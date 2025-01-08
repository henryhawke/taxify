import { useEffect, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRecoilState } from 'recoil'
import { chatMessagesState } from '@/store/chat'
import { useAuth } from '@/hooks/useAuth'
import { useTaxifyFunctions } from '@/hooks/useTaxifyFunctions'

type Inputs = {
  chatContent: string
}

export default function ChatBox() {
  const { t } = useTranslation(['common'])
  const { register, handleSubmit, reset } = useForm<Inputs>()
  const [messages, setMessages] = useRecoilState(chatMessagesState)
  const { user } = useAuth()
  const { createChatMessage } = useTaxifyFunctions()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // ... rest of the component code ...
}
