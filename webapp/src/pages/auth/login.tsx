import React from 'react'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import LoginForm from '@/components/pages/auth/LoginForm'

export default function LoginPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <LoginForm />
      </div>
    </DefaultLayout>
  )
}
