import { useEffect, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import { chatMessagesState, type ChatMessage } from '@/store/chat'
import { useAuth } from '@/hooks/useAuth'
import { useTaxifyFunctions } from '@/hooks/useTaxifyFunctions'

type Inputs = {
  chatContent: string
}

type Props = {
  _setNewChatModalOpen: (_value: boolean) => void
  _currentChatRoomId: string | null
  _getChatRooms: () => void
}

export default function ChatBox({
  _setNewChatModalOpen,
  _currentChatRoomId,
  _getChatRooms,
}: Props) {
  const { t } = useTranslation(['common'])
  const { register, handleSubmit, reset } = useForm<Inputs>()
  const [messages, setMessages] = useRecoilState(chatMessagesState)
  const { user } = useAuth()
  const { createChatMessage } = useTaxifyFunctions()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const onSubmit = async (data: Inputs) => {
    if (!user) return

    // Add user message
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      content: data.chatContent,
      role: 'user',
      timestamp: Date.now(),
    }
    setMessages((prev) => [...prev, userMessage])

    try {
      // Send message to backend
      const response = await createChatMessage({
        content: data.chatContent,
        roomId: user.uid,
        userId: user.uid,
      })

      // Add assistant response
      if (response) {
        const assistantMessage: ChatMessage = {
          id: `assistant-${Date.now()}`,
          content: response.data as string,
          role: 'assistant',
          timestamp: Date.now(),
        }
        setMessages((prev) => [...prev, assistantMessage])
      }
    } catch (error) {
      console.error('Error sending message:', error)
    }

    // Reset form
    reset()
  }

  return (
    <div className="flex h-full flex-col">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 rounded-lg p-3 ${
              message.role === 'user'
                ? 'ml-auto bg-blue-500 text-white'
                : 'mr-auto bg-gray-200 dark:bg-gray-700'
            } max-w-[80%]`}
          >
            {message.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit(onSubmit)} className="border-t p-4">
        <div className="flex gap-2">
          <input
            {...register('chatContent', { required: true })}
            className="flex-1 rounded-lg border p-2 dark:bg-gray-700"
            placeholder={t('typeMessage')}
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            {t('send')}
          </button>
        </div>
      </form>
    </div>
  )
}
