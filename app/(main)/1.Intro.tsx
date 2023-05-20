import { ReactNode } from 'react'
import BilibiliVideo from '../BilibiliVideo'
import AkariBot from '@/public/akaribot.png'
import Meme from '@/public/meme.png'
import Icon from '@mdi/react'
import { mdiGithub, mdiWeb } from '@mdi/js'
import Image, { StaticImageData } from 'next/image'

export function Intro() {
  return (
    <section className="container px-6 mx-auto flex flex-col mt-24 mb-12 gap-3">
      <div className="w-full pr-4 mb-6">
        <h1 className="text-7xl font-extrabold tracking-tight mb-3 text-slate-900 leading-tight">
          从 Minecraft 开始，
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            不断前进
          </span>
          。
        </h1>
        <div className="text-lg mb-4">
          茶馆工作室专注于 Minecraft
          等游戏的周边内容创作，创作出了多款创意资源、语言附加包，致力于为玩家提供更欢乐的游戏体验。
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
        <div className="lg:basis-1/2">
          <div className="text-lg text-slate-600 font-bold mb-3">
            我们的作品...
          </div>
          <div className="flex flex-row gap-3">
            <ProductCard
              title="梗体中文"
              image={Meme}
              links={
                <>
                  <LinkEntry
                    icon={mdiGithub}
                    href="https://github.com/Teahouse-Studios/mcwzh-meme-resourcepack"
                  >
                    GitHub
                  </LinkEntry>
                  <LinkEntry icon={mdiWeb} href="https://meme.teahouse.team/">
                    在线构建
                  </LinkEntry>
                </>
              }
            >
              梗体中文是一款 Minecraft
              资源包。梗体中文将一部分游戏内容译名或其他游戏内字符串替换成了一些梗和笑话，让你在玩游戏的时候能够感受到更多的乐趣。
            </ProductCard>
            <ProductCard
              title="小可"
              image={AkariBot}
              links={
                <>
                  <LinkEntry
                    icon={mdiGithub}
                    href="https://github.com/Teahouse-Studios/akari-bot"
                  >
                    GitHub
                  </LinkEntry>
                  <LinkEntry icon={mdiWeb} href="https://bot.teahouse.team/">
                    Wiki
                  </LinkEntry>
                </>
              }
            >
              小可是一个多平台聊天机器人。她有多种功能，支持
              Telegram、Discord、QQ、QQ 频道等平台。
            </ProductCard>
          </div>
        </div>
        <div>
          <div className="max-w-[65vw] lg:basis-1/2 mx-auto">
            <BilibiliVideo id="BV1ZX4y1A7jY" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  children,
  title,
  links,
  image,
}: {
  children: ReactNode
  title: ReactNode
  links: ReactNode
  image: StaticImageData
}) {
  return (
    <div className="flex flex-col items-center justify-between shadow-xl rounded-lg flex-1 px-6 py-6">
      <div className="flex flex-col items-center">
        <Image className="mb-5 rounded-lg" src={image} alt="" height={100} />
        <div className="text-2xl font-bold mb-2">{title}</div>
      </div>
      <div className="mb-2">{children}</div>
      <ul className="list-none flex gap-3">{links}</ul>
    </div>
  )
}

function LinkEntry({
  children,
  icon,
  href,
}: {
  children: ReactNode
  icon: string
  href: string
}) {
  return (
    <li className="inline-block">
      <a
        href={href}
        className="inline-flex"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon path={icon} className="block h-6 mr-1" />
        {children}
      </a>
    </li>
  )
}
