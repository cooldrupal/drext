import { Link } from "@/components/navigation/Link"

interface PagerMoreProps {
  url: string
  text?: string
}

export function PagerMore({ url, text = 'More' }: PagerMoreProps) {
  return (
    <div className="text-center">
      <Link href={url}>
        <span className="text-center cursor-pointer">
          {text}
        </span>
      </Link>
    </div>
  )
}
