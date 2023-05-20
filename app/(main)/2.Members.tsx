import Image from 'next/image'
import Avatars from '@/public/avatars.png'
import { Button } from '@/app/ui/button'
import Link from 'next/link'

export function Members() {
  return (
    <section className="w-full py-24 bg-slate-100">
      <div className="container mx-auto px-6">
        <Image
          className="inline-block w-full md:w-1/2 md:pr-4 align-middle mb-3"
          src={Avatars}
          alt="茶馆工作室所有成员的头像"
        />
        <div className="inline-block w-full md:w-1/2 font-slate-800 md:pl-4 align-middle">
          <h2 className="text-3xl font-extrabold mb-3">我们是谁？</h2>
          <p className="mb-2">
            我们是一群热爱 Minecraft
            游戏的玩家，我们中的大部分人出身于全球最大的 Minecraft 百科全书网站
            Minecraft Wiki，拥有良好的游戏译名翻译经验。其他成员大部分来自
            Minecraft 社区中的其他部分和开源社区团队。
          </p>
          <p className="mb-2">我们的目标是为玩家提供更好的体验。</p>
          <Button size="xl" asChild>
            <Link href="/members/">了解团队</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
