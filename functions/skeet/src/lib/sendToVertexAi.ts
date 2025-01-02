import { VertexChatRoom, VertexExampleInput } from '@common/models/vertexModels'
import { VertexAI } from '@taxify-framework/ai'
import taxifyOptions from '../../taxifyOptions.json'
import { db } from '@/index'
import { update } from '@taxify-framework/firestore'

export const sendToVertexAI = async (
  vertexChatRoomData: VertexChatRoom,
  vertexExampleData: VertexExampleInput[],
  content: string,
  chatRoomPath: string,
) => {
  try {
    const vertexAi = new VertexAI({
      projectId: taxifyOptions.projectId,
      location: taxifyOptions.region,
    })

    const examples = vertexExampleData.map((example) => {
      return {
        input: { content: example.input },
        output: { content: example.output },
      }
    })

    if (vertexChatRoomData.title === '' || !vertexChatRoomData.title) {
      console.log('Updating VertexChatRoom Title...')
      const titlePrompt = await vertexAi.generateTitlePrompt(content)
      const title = await vertexAi.prompt(titlePrompt)
      if (vertexChatRoomData.id) {
        await update<VertexChatRoom>(db, chatRoomPath, vertexChatRoomData?.id, {
          title,
        })
      }
    }

    return vertexAi.prompt({
      context: vertexChatRoomData.context,
      examples,
      messages: [
        {
          author: 'user',
          content: content,
        },
      ],
    })
  } catch (error) {
    throw new Error(`sendToVertexAI: ${error}`)
  }
}
