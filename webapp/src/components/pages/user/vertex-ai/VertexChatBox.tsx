import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  KeyboardEvent,
} from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from '@/store/user'

import { chatContentSchema } from '@/utils/form'
// import { taxifyFunctions } from '@/lib/taxfy/functions'
import Image from 'next/image'
import { ChatRoom } from './VertexChatMenu'
import { z } from 'zod'
import { useForm, Controller, Resolver } from 'react-hook-form'
// import { TextDecoder } from 'text-encoding'
import { useToastMessage } from '@/hooks/useToastMessage'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remark2Rehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import rehypeCodeTitles from 'rehype-code-titles'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import { sleep } from '@/utils/time'
import VertexChatExamples from './VertexChatExamples'
// import { AddVertexMessageParams } from '../../../../../../common/types/http/addVertexMessageParams'
import { db } from '@/lib/firebase'
import { orderBy } from 'firebase/firestore'
import {
  VertexChatRoom,
  VertexChatRoomMessage,
  genVertexChatRoomMessagePath,
  genVertexChatRoomPath,
} from '../../../../../../common/models'
import { Timestamp } from '@skeet-framework/firestore'
import { get, query } from '@/lib/taxfy/firestore'
import rehypeSlug from 'rehype-slug'
import rehypeExternalLinks from 'rehype-external-links'

type ChatMessage = {
  id: string
  role: string
  createdAt: Timestamp | undefined
  updatedAt: Timestamp | undefined
  content: string
}

const schema = z.object({
  chatContent: chatContentSchema,
})

type Inputs = z.infer<typeof schema>

type Props = {
  _setNewChatModalOpen: (_value: boolean) => void
  _currentChatRoomId: string | null
  _getChatRooms: () => void
}

export default function VertexChatBox({
  _setNewChatModalOpen,
  _currentChatRoomId,
  _getChatRooms,
}: Props) {
  const { t } = useTranslation()
  const user = useRecoilValue(userState)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [chatRoom, setChatRoom] = useState<ChatRoom | null>(null)
  const addToast = useToastMessage()

  const chatContentRef = useRef<HTMLDivElement>(null)
  const scrollToEnd = useCallback(() => {
    if (_currentChatRoomId && chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight
    }
  }, [chatContentRef, _currentChatRoomId])

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm<Inputs>({
    resolver: schema as unknown as Resolver<Inputs>,
    defaultValues: {
      chatContent: '',
    },
  })

  const chatContent = watch('chatContent')
  const chatContentLines = useMemo(() => {
    return (chatContent.match(/\n/g) || []).length + 1
  }, [chatContent])

  const getChatRoom = useCallback(async () => {
    if (db && user.uid && _currentChatRoomId) {
      try {
        const data = await get<VertexChatRoom>(
          db,
          genVertexChatRoomPath(user.uid),
          _currentChatRoomId,
        )
        if (!data) throw new Error('Chat room not found')
        setChatRoom(data as ChatRoom)
      } catch (e) {
        console.error(e)
      }
    }
  }, [_currentChatRoomId, user.uid])

  useEffect(() => {
    void (async () => {
      try {
        await getChatRoom()
      } catch (e) {
        console.error(e)
      }
    })()
  }, [getChatRoom])

  const [isSending, setSending] = useState(false)

  const getUserChatRoomMessage = useCallback(async () => {
    if (db && user.uid && _currentChatRoomId) {
      const querySnapshot = await query<VertexChatRoomMessage>(
        db,
        genVertexChatRoomMessagePath(user.uid, _currentChatRoomId),
        [orderBy('createdAt', 'asc')],
      )
      const messages: ChatMessage[] = []
      for await (const qs of querySnapshot.docs) {
        const data = qs.data()
        const html = await unified()
          .use(remarkParse)
          .use(remarkDirective)
          .use(remarkGfm)
          .use(remark2Rehype)
          .use(rehypeSlug)
          .use(rehypeExternalLinks, {
            target: '_blank',
            rel: ['noopener noreferrer'],
          })
          .use(rehypeCodeTitles)
          .use(rehypeHighlight)
          .use(rehypeStringify)
          .process(data.content as string)

        messages.push({
          id: qs.id,
          ...data,
          content: html.value,
        } as ChatMessage)
      }

      setChatMessages(messages)
    }
  }, [_currentChatRoomId, user.uid])

  useEffect(() => {
    void (async () => {
      try {
        await getUserChatRoomMessage()
      } catch (e) {
        console.error(e)
      }
    })()
  }, [getUserChatRoomMessage])

  useEffect(() => {
    if (chatMessages.length > 0) {
      scrollToEnd()
    }
  }, [chatMessages, scrollToEnd])

  const isDisabled = useMemo(() => {
    return isSending || errors.chatContent != null
  }, [isSending, errors.chatContent])

  const onSubmit = useCallback(
    async (inputs: Inputs) => {
      try {
        setSending(true)
        if (!isDisabled && user.uid && _currentChatRoomId) {
          setChatMessages((prev) => {
            return [
              ...prev,
              {
                id: `UserSendingMessage${new Date()}`,
                role: 'user',
                createdAt: undefined,
                updatedAt: undefined,
                content: inputs.chatContent,
              },
              {
                id: `AssistantAnsweringMessage${new Date()}`,
                role: 'ai',
                createdAt: undefined,
                updatedAt: undefined,
                content: '',
              },
            ]
          })
          // const res = await Functions<AddVertexMessageParams>(
          //   'taxfy',
          //   'addVertexMessage',
          //   {
          //     vertexChatRoomId: _currentChatRoomId,
          //     content: inputs.chatContent,
          //   },
          // )
          // if (!res.data?.data?.body) {
          //   throw new Error('No response body')
          // }
          // const reader = res.data.data.body.getReader()
          // const decoder = new TextDecoder('utf-8')

          // while (true) {
          //   const { value, done } = await reader.read()
          //   if (done) break
          //   try {
          //     const dataString = decoder.decode(value)
          //     if (dataString != 'Stream done') {
          //       const data = JSON.parse(dataString)
          //       setChatMessages((prev) => {
          //         const chunkSize = data?.text?.length
          //         if (prev[prev.length - 1].content.length === 0) {
          //           prev[prev.length - 1].content =
          //             prev[prev.length - 1].content + data.text
          //         }
          //         if (
          //           !prev[prev.length - 1].content
          //             .slice(chunkSize * -1)
          //             .includes(data.text)
          //         ) {
          //           prev[prev.length - 1].content =
          //             prev[prev.length - 1].content + data.text
          //         }

          //         return [...prev]
          //       })
          //     }
          //   } catch (e) {
          //     console.warn(e)
          //   }
          // }

          if (chatRoom && chatRoom.title == '') {
            await sleep(200)
            await getChatRoom()
            await _getChatRooms()
          }
          await getUserChatRoomMessage()
          reset()
        }
      } catch (err) {
        console.error(err)
        if (
          err instanceof Error &&
          (err.message.includes('Firebase ID token has expired.') ||
            err.message.includes('Error: getUserAuth'))
        ) {
          addToast({
            type: 'error',
            title: t('errorTokenExpiredTitle'),
            description: t('errorTokenExpiredBody'),
          })
        } else {
          addToast({
            type: 'error',
            title: t('errorTitle'),
            description: t('errorBody'),
          })
        }
      } finally {
        setSending(false)
      }
    },
    [
      isDisabled,
      t,
      _currentChatRoomId,
      user.uid,
      chatRoom,
      addToast,
      reset,
      getChatRoom,
      _getChatRooms,
      getUserChatRoomMessage,
    ],
  )

  const onKeyDown = useCallback(
    async (event: KeyboardEvent) => {
      if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
        await handleSubmit(onSubmit)()
      }
    },
    [handleSubmit, onSubmit],
  )

  return (
    <>
      <div className="content-height-mobile sm:content-height w-full overflow-y-auto pt-4 sm:flex-1 sm:px-4 sm:pt-0">
        <div className="flex h-full w-full flex-col justify-between gap-4">
          <div
            ref={chatContentRef}
            className={clsx(
              chatContentLines > 4
                ? 'chat-height-5'
                : chatContentLines == 4
                  ? 'chat-height-4'
                  : chatContentLines == 3
                    ? 'chat-height-3'
                    : chatContentLines == 2
                      ? 'chat-height-2'
                      : 'chat-height-1',
              'w-full overflow-y-auto pb-24',
            )}
          >
            <div className={clsx('bg-gray-50 dark:bg-gray-800', 'w-full p-4')}>
              <div className="mx-auto flex w-full max-w-3xl flex-row items-start justify-start gap-4 p-4 sm:p-6 md:gap-6">
                {chatRoom?.model === 'chat-bison@001' && (
                  <Image
                    src={
                      'https://storage.googleapis.com/taxfy-assets/imgs/bdlc/Bison.png'
                    }
                    alt="Bison icon"
                    className="my-3 aspect-square h-6 w-6 rounded-full sm:h-10 sm:w-10"
                    unoptimized
                    width={40}
                    height={40}
                  />
                )}
                {chatRoom?.model === 'chat-bison-32k' && (
                  <Image
                    src={
                      'https://storage.googleapis.com/taxfy-assets/imgs/bdlc/Bison32k.png'
                    }
                    alt="Bison icon"
                    className="my-3 aspect-square h-6 w-6 rounded-full sm:h-10 sm:w-10"
                    unoptimized
                    width={40}
                    height={40}
                  />
                )}

                <div className="flex w-full flex-col">
                  <div className="pb-2">
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      {chatRoom?.title ? chatRoom?.title : t('noTitle')}
                    </p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {chatRoom?.model}: {chatRoom?.maxTokens} {t('tokens')}
                    </p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {'Temperature'}: {chatRoom?.temperature}, {'Top-p'}:{' '}
                      {chatRoom?.topP}, {'Top-k'}: {chatRoom?.topK}
                    </p>
                  </div>
                  <div className="prose dark:prose-invert lg:prose-lg w-full max-w-none">
                    <p className="text-base font-medium text-gray-800 dark:text-gray-50">
                      {chatRoom?.context}
                    </p>
                  </div>
                  <div className="pt-4">
                    {chatRoom && _currentChatRoomId && (
                      <VertexChatExamples
                        currentChatRoomId={_currentChatRoomId}
                        chatRoom={chatRoom}
                        getChatRoom={getChatRoom}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {chatMessages.map((chatMessage) => (
              <div
                key={chatMessage.id}
                className={clsx(
                  chatMessage.role === 'system' &&
                    'bg-gray-50 dark:bg-gray-800',
                  chatMessage.role === 'ai' && 'bg-gray-50 dark:bg-gray-800',
                  'w-full p-4',
                )}
              >
                <div className="mx-auto flex w-full max-w-3xl flex-row items-start justify-center gap-4 p-4 sm:p-6 md:gap-6">
                  {chatMessage.role === 'user' && (
                    <Image
                      src={user.iconUrl}
                      alt="User icon"
                      className="my-3 aspect-square h-6 w-6 rounded-full sm:h-10 sm:w-10"
                      unoptimized
                      width={40}
                      height={40}
                    />
                  )}
                  {(chatMessage.role === 'ai' ||
                    chatMessage.role === 'system' ||
                    chatMessage.role === 'assistant') &&
                    chatRoom?.model === 'chat-bison@001' && (
                      <Image
                        src={
                          'https://storage.googleapis.com/taxfy-assets/imgs/bdlc/Bison.png'
                        }
                        alt="Bison icon"
                        className="my-3 aspect-square h-6 w-6 rounded-full sm:h-10 sm:w-10"
                        unoptimized
                        width={40}
                        height={40}
                      />
                    )}
                  {(chatMessage.role === 'ai' ||
                    chatMessage.role === 'system' ||
                    chatMessage.role === 'assistant') &&
                    chatRoom?.model === 'chat-bison-32k' && (
                      <Image
                        src={
                          'https://storage.googleapis.com/taxfy-assets/imgs/bdlc/Bison32k.png'
                        }
                        alt="Bison icon"
                        className="my-3 aspect-square h-6 w-6 rounded-full sm:h-10 sm:w-10"
                        unoptimized
                        width={40}
                        height={40}
                      />
                    )}

                  <div className="flex w-full flex-col">
                    {chatMessage.role === 'system' && (
                      <div className="pb-2">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                          {chatRoom?.title ? chatRoom?.title : t('noTitle')}
                        </p>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {chatRoom?.model}: {chatRoom?.maxTokens} {t('tokens')}
                        </p>
                      </div>
                    )}
                    <div className="prose dark:prose-invert lg:prose-lg w-full max-w-none">
                      <div
                        className="w-full max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: chatMessage.content,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-row items-end gap-4">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="mx-auto flex w-full max-w-3xl flex-row items-end justify-between gap-4">
                <Controller
                  name="chatContent"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      onKeyDown={onKeyDown}
                      className={clsx(
                        chatContentLines > 4
                          ? 'h-48'
                          : chatContentLines == 4
                            ? 'h-36'
                            : chatContentLines == 3
                              ? 'h-28'
                              : chatContentLines == 2
                                ? 'h-20'
                                : `h-10`,
                        'flex-1 border-2 border-gray-900 p-1 font-normal text-gray-900 sm:text-lg dark:border-gray-50 dark:bg-gray-800 dark:text-white',
                      )}
                    />
                  )}
                />

                <button
                  type="submit"
                  disabled={isDisabled}
                  className={clsx(
                    'flex h-10 w-10 flex-row items-center justify-center',
                    isDisabled
                      ? 'bg-gray-300 hover:cursor-wait dark:bg-gray-800 dark:text-gray-400'
                      : 'bg-gray-900 hover:cursor-pointer dark:bg-gray-600',
                  )}
                >
                  <PaperAirplaneIcon className="mx-3 h-6 w-6 flex-shrink-0 text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
