import { getBlocks } from "@/lib/block"
import { getMenus } from "@/lib/menu"
import { Header } from "@/components/drupal/Header"
import { Footer } from "@/components/drupal/Footer"
import { Block } from "@/components/drupal/Block"
import type { Metadata } from "next"
import { getMetatagByPath } from "@/lib/metatag"

const slug = '/'

export async function generateMetadata(
): Promise<Metadata> {
  const metadata = getMetatagByPath(slug)
  return metadata
}

export default async function Home() {
  const blocks = await getBlocks(slug, ['content'])
  const menu = await getMenus(slug, ['primary_menu', 'footer_top'])
  return (
    <>
    <Header menus={menu?.primary_menu} />
    <main>
      {!blocks?.content?.length &&
        <h1 className="text-center text-4xl">
          Welcome to the Drext.js
        </h1>
      }
      {blocks?.content?.length &&
        blocks.content.map((block: any) => (
          <div key={block?.block_id}>
            <Block block={block} />
          </div>
        ))
      }
    </main>
    <Footer menus={menu?.footer_top} />
    </>
  )
}
