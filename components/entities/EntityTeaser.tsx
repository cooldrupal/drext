import { Link } from "@/components/navigation/Link"
import { getPath } from "@/lib/utils"

export function EntityTeaser({entity, ...props}: any) {
  return (
    <article {...props}>
      <Link href={getPath(entity)}>{entity.title}</Link>
    </article>
  )
}
