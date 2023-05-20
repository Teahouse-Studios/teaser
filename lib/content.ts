import fs from 'fs/promises'
import path from 'path'
import glob from 'glob'
import { bundleMDX } from 'mdx-bundler'

export const GLOBS = ['app/members/*.mdx']

export const allFiles: string[] = []

for (const globPattern of GLOBS) {
  const files = await glob.glob(globPattern, { cwd: process.cwd() })
  allFiles.push(...files)
}

export interface ContentFrontmatter {
  title: string
  description: string
}

export class Content {
  initialized = false
  file: string
  code: string = ''
  frontmatter: Record<string, any> = {}
  async read() {
    return fs.readFile(this.file, 'utf-8')
  }

  constructor(file: string) {
    this.file = file
  }

  async #init() {
    const mdx = await bundleMDX({
      source: this.file,
      cwd: path.dirname(this.file),
      mdxOptions(options, frontmatter) {
        options.remarkPlugins = [...(options.remarkPlugins ?? [])]
        options.rehypePlugins = [...(options.rehypePlugins ?? [])]

        return options
      },
    })

    this.code = mdx.code
    this.frontmatter = mdx.frontmatter
    this.initialized = true
  }

  // Workaround for async constructor
  public static async create(file: string) {
    const content = new Content(file)
    await content.#init()
    return content
  }
}

export const contents = await Promise.all(
  allFiles.map(async (file) => await Content.create(file)),
)
