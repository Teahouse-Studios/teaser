'use client'
import { useState } from 'react'
import { Icon } from '@mdi/react'
import { mdiPlay } from '@mdi/js'

export default function BilibiliVideo({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="aspect-w-16 aspect-h-9  w-full rounded-md bg-black shadow-lg">
      {!isOpen ? (
        <button
          className="w-full h-full transition-all hover:bg-white hover:bg-opacity-10 flex items-center justify-center"
          onClick={() => {
            setIsOpen(true)
          }}
        >
          <Icon path={mdiPlay} className="text-white w-16" />
        </button>
      ) : (
        <iframe
          src={`https://player.bilibili.com/player.html?bvid=${id}&page=1`}
          title="Bilibili 视频"
          allowFullScreen={true}
          className="w-full h-full rounded-md overflow-hidden"
        ></iframe>
      )}
    </div>
  )
}
