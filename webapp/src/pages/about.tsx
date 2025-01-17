import DefaultLayout from '@/layouts/default/DefaultLayout'

export default function AboutPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-4">About page content goes here.</p>
      </div>
    </DefaultLayout>
  )
}
