import ChatMenu, { ChatRoom } from '@/components/pages/user/chat/ChatMenu'
import ChatBox from '@/components/pages/user/chat/ChatBox'
import { useCallback, useEffect, useState } from 'react'
import { userState } from '@/store/user'
import { useRecoilValue } from 'recoil'
import { useToastMessage } from '@/hooks/useToastMessage'
import {
  DocumentData,
  QueryDocumentSnapshot,
  limit,
  orderBy,
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useTranslation } from 'next-i18next'
import { UserChatRoom, genUserChatRoomPath } from '@/common/models'
import { query } from '@/lib/taxfy/firestore'

export default function ChatScreen() {
  const { t } = useTranslation()
  const [isNewChatModalOpen, setNewChatModalOpen] = useState(false)
  const [currentChatRoomId, setCurrentChatRoomId] = useState<string | null>(
    null,
  )

  const user = useRecoilValue(userState)

  const [chatList, setChatList] = useState<ChatRoom[]>([])
  const [_lastChat, setLastChat] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null)
  const [isDataLoading, setDataLoading] = useState(false)
  const addToast = useToastMessage()

  const getChatRooms = useCallback(async () => {
    if (db && user.uid) {
      try {
        setDataLoading(true)

        const querySnapshot = await query<UserChatRoom>(
          db,
          genUserChatRoomPath(user.uid),
          [orderBy('createdAt', 'desc'), limit(15)],
        )
        const list: ChatRoom[] = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          list.push({ ...data, id: doc.id } as ChatRoom)
        })
        setChatList(list)
        setLastChat(querySnapshot.docs[querySnapshot.docs.length - 1])
      } catch (err) {
        console.error(err)
        if (err instanceof Error && err.message.includes('permission-denied')) {
          addToast({
            type: 'error',
            title: t('errorTokenExpiredTitle') ?? 'Token Expired.',
            description: t('errorTokenExpiredBody') ?? 'Please sign in again.',
          })
        } else {
          addToast({
            type: 'error',
            title: t('errorTitle') ?? 'Error',
            description:
              t('errorBody') ?? 'Something went wrong... Please try it again.',
          })
        }
      } finally {
        setDataLoading(false)
      }
    }
  }, [user.uid, setDataLoading, addToast, t])

  useEffect(() => {
    void (async () => {
      try {
        await getChatRooms()
      } catch (e) {
        console.error(e)
      }
    })()
  }, [getChatRooms])

  return (
    <>
      <div className="content-height flex w-full flex-col items-start justify-start overflow-auto sm:flex-row">
        <ChatMenu
          isNewChatModalOpen={isNewChatModalOpen}
          setNewChatModalOpen={setNewChatModalOpen}
          currentChatRoomId={currentChatRoomId}
          setCurrentChatRoomId={setCurrentChatRoomId}
          chatRooms={chatList}
          setChatRooms={setChatList}
          loading={isDataLoading}
          error={null}
          getChatRooms={getChatRooms}
          onCreateChat={async (title: string) => {
            // TODO: Implement chat creation
            console.log('Creating chat with title:', title)
          }}
        />
        <ChatBox
          _setNewChatModalOpen={setNewChatModalOpen}
          _currentChatRoomId={currentChatRoomId}
          _getChatRooms={getChatRooms}
        />
      </div>
    </>
  )
}
