import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { drupal } from "@/lib/drupal"
import { getEntityByPath } from "@/lib/entity"
import { getBreadcrumb } from "@/lib/breadcrumb"
import { getMenus } from "@/lib/menu"
import { Entity, getEntityTypes } from "@/components/drupal/Entity"
import { Header } from "@/components/drupal/Header"
import { Footer } from "@/components/drupal/Footer"
import { Breadcrumb } from "@/components/drupal/Breadcrumb"
import { getMetatag } from "@/lib/metatag"
import { Title } from "@/components/drupal/Title"

type EntityPageParams = {
  slug: string[]
}
type EntityPageProps = {
  params: Promise<EntityPageParams>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const RESOURCE_TYPES = getEntityTypes()

export async function generateMetadata(
  props: EntityPageProps
): Promise<Metadata> {
  const params = await props.params
  const { slug } = params

  const entity = await getEntityByPath(slug)
  const metatag = getMetatag(entity)
  return metatag;
}

export async function generateStaticParams(): Promise<EntityPageParams[]> {
  const resources = await drupal.getResourceCollectionPathSegments(
    RESOURCE_TYPES,
    {}
  )

  return resources.map((resource) => {
    return {
      slug: resource.segments,
    }
  })
}

export default async function EntityPage(props: EntityPageProps) {
  const params = await props.params
  const { slug } = params

  const entity = await getEntityByPath(slug)
  if (!entity) {
    notFound()
  }

  const breadcrumb = await getBreadcrumb(slug)
  const menu = await getMenus(slug, ['primary_menu', 'footer_top'])
  return (
    <>
    <Header menus={menu?.primary_menu} />
    <Title title={entity.label} />
    <Breadcrumb breadcrumb={breadcrumb} />
    <main className={'w-full'}>
      <Entity entity={entity} />
    </main>
    <Footer menus={menu?.footer_top} />
    </>
  )
}
