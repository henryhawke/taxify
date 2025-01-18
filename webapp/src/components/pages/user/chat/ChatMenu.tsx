/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, Dispatch, SetStateAction } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useToastMessage } from '@/hooks/useToastMessage'

export interface ChatRoom {
  id: string
  title: string
  model: string
  context: string
  maxTokens: number
  temperature: number
  createdAt?: Date
  updatedAt?: Date
  messages?: any[]
}

export interface ChatMenuProps {
  isNewChatModalOpen: boolean
  setNewChatModalOpen: Dispatch<SetStateAction<boolean>>
  currentChatRoomId: string | null
  setCurrentChatRoomId: Dispatch<SetStateAction<string | null>>
  chatRooms: ChatRoom[]
  setChatRooms: Dispatch<SetStateAction<ChatRoom[]>>
  loading: boolean
  error: string | null
  getChatRooms: () => Promise<void>
  onCreateChat: (title: string) => Promise<void>
}

export default function ChatMenu({ onCreateChat }: ChatMenuProps) {
  const [title, setTitle] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const addToast = useToastMessage()

  const handleSubmit = useCallback(async () => {
    if (!title.trim()) {
          addToast({
        title: 'Error',
        description: 'Please enter a title',
            type: 'error',
      })
      return
    }

    try {
      setIsLoading(true)
      await onCreateChat(title)
      setTitle('')
          addToast({
        title: 'Success',
        description: 'Chat created successfully',
            type: 'success',
      })
    } catch (error) {
          addToast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to create chat',
            type: 'error',
          })
      } finally {
      setIsLoading(false)
    }
  }, [title, onCreateChat, addToast])

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        fullWidth
        label="Chat Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isLoading}
        sx={{ mb: 2 }}
      />
      <Button
        fullWidth
        variant="contained"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        Create Chat
      </Button>
    </Box>
  )
}
