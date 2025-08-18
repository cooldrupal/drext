import { Link } from "@/components/navigation/Link"

export async function Breadcrumb({ breadcrumb, delimiter = '/' }: { breadcrumb: any, delimiter?: string }) {
  console.log(delimiter)
  return (
    <nav aria-label="breadcrumb" className="text-center">
      <ul className="flex justify-center">
        {breadcrumb?.map((item: any, index: number) => {
          const isLast = index === breadcrumb.length - 1;
          return (
            <li key={index} className="flex items-center">
              {item.url ? (
                <Link href={item.url}>
                  {item.text}
                </Link>
              ) : (
                <span>{item.text}</span>
              )}
              {!isLast && <span>{delimiter}</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  )
}
