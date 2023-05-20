import Footer from '../Footer'
import Header from '@/app/Header'
import { Intro } from '@/app/(main)/1.Intro'
import Image from 'next/image'
import { Members } from './2.Members'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <Intro />
        <Members />
      </main>
      <Footer />
    </>
  )
}
