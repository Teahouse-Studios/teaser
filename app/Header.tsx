import Image from 'next/image'
import Link from 'next/link'

import TeahouseLogo from '@/public/logo.svg'

export default function Header() {
  return (
    <header className="backdrop-blur sticky flex top-0 z-10 container mx-auto py-1 max-h-16 items-center">
      <Link href="/" className="flex mr-4" title="首页">
        <Image
          src={TeahouseLogo}
          alt="Teahouse Studios"
          className="block h-16 w-auto"
        />
      </Link>
    </header>
  )
}
