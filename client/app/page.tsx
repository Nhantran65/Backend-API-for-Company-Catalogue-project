import Image from 'next/image'
import MainLayout from './layouts/MainLayout'
export default function Home() {
  return (
    <MainLayout>
    <section className="py-6 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Welcome to Companies Catalogue</h2>
      <p className="text-gray-600 mb-4">
        Discover stories and experiences from internships and alumni at various IT companies.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
        Explore Companies
      </button>
    </section>
  </MainLayout>
  )
}
