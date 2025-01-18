import { AuthProvider } from '@/contexts/AuthContext'
import DefaultLayout from '@/layouts/default/DefaultLayout'

function AboutPageContent() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-4">About page content goes here.</p>
      </div>
    </DefaultLayout>
  )
}

export default function AboutPage() {
  return (
    <AuthProvider>
      <AboutPageContent />
    </AuthProvider>
  )
}
