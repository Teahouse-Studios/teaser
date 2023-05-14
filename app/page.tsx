import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Intro } from '@/components/home/1.Intro'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <Intro />
        <section className="container">sss</section>
      </main>
      <Footer />
    </>
  )
}
