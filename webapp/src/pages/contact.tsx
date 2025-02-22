import { AuthProvider } from '@/contexts/AuthContext'
import DefaultLayout from '@/layouts/default/DefaultLayout'

function ContactPageContent() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-4">Contact page content goes here.</p>
      </div>
    </DefaultLayout>
  )
}

export default function ContactPage() {
  return (
    <AuthProvider>
      <ContactPageContent />
    </AuthProvider>
  )
}
