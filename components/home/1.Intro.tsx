import { ReactNode } from 'react'
import BilibiliVideo from '../BilibiliVideo'
import AkariBot from '@/public/akaribot.png'
import Meme from '@/public/meme.png'
import Image, { StaticImageData } from 'next/image'

export function Intro() {
  return (
    <section className="container mx-auto flex flex-col mt-24 mb-12 gap-3">
      <div className="w-full pr-4 mb-6 ">
        <h1 className="text-7xl font-extrabold tracking-tight mb-3 text-slate-900 leading-tight">
          从 Minecraft 开始，不断前进。
        </h1>
        <div className="text-lg mb-4">
          茶馆工作室专注于 Minecraft
          等游戏的周边内容创作，创作出了多款创意资源、语言附加包，致力于为玩家提供更欢乐的游戏体验。
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        <div className="flex-1">
          <div className="text-lg text-slate-600 font-bold mb-3">
            我们的作品...
          </div>
          <div className="flex flex-row gap-3">
            <ProductCard title="梗体中文" image={Meme}>
              梗体中文是一款 Minecraft
              资源包。梗体中文将一部分游戏内容译名或其他游戏内字符串替换成了一些梗和笑话，让你在玩游戏的时候能够感受到更多的乐趣。
            </ProductCard>
            <ProductCard title="小可" image={AkariBot}>
              小可是一个多平台聊天机器人。她有多种功能，支持
              Telegram、Discord、QQ、QQ 频道等平台。
            </ProductCard>
          </div>
        </div>
        <div className="flex-1">
          <BilibiliVideo id="BV1ZX4y1A7jY" />
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  children,
  title,
  image,
}: {
  children: ReactNode
  title: ReactNode
  image: StaticImageData
}) {
  return (
    <div className="flex flex-col items-center justify-center shadow-xl rounded-lg flex-1">
      <Image src={image} alt="" className="rounded-lg"></Image>
      <div className="text-2xl font-bold mb-2 px-6 pt-6 pb-3">{title}</div>
      <div className="mb-8 px-6">{children}</div>
    </div>
  )
}
