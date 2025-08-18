import { Link } from "@/components/navigation/Link"
import { PagerLinks } from "@/lib/pager"

interface PagerMoreProps {
  links: PagerLinks;
  page: number;
}

export function PagerFull({ links, page }: PagerMoreProps) {
  return (
    <nav className="flex justify-center">
      <>
      {(links.first && links.prev) && (
        <Link href={links.first} title='Go to first page'>
          <span className="text-center cursor-pointer">
            {'|<'} First
          </span>
        </Link>
      )}

      {links.prev && (
        <Link href={links.prev} title='Go to previous page'>
          <span className="text-center cursor-pointer">
            {'<'} Previous
          </span>
        </Link>
      )}

      {Object.entries(links.pages).map(([pageNumber, url]) => {
        const isActive = Number(pageNumber) === page + 1;
        return (
          <Link href={url} key={pageNumber} title={isActive ? 'Current page' : `Go to page ${pageNumber}`}>
            <span
              className={`text-center cursor-pointer`}
            >
              {pageNumber}
            </span>
          </Link>
        );
      })}

      {(links.over) && (
        <span>...</span>
      )}

      {(links.next) && (
        <Link href={links.next} title='Go to next page'>
          <span className="text-center cursor-pointer">
              Next {'>'}
          </span>
        </Link>
      )}

      {links.next && links.last && (
        <Link href={links.last} title='Go to last page'>
          <span className="text-center cursor-pointer">
              Last {'>|'}
          </span>
        </Link>
      )}
      </>
    </nav>
  )
}

export function PagerMini({ links, page }: PagerMoreProps) {
  return (
    <div className="flex items-center justify-center">
      {links.prev && (
        <Link href={links.prev} title="Go to previous page">
          <span className="text-center cursor-pointer">
            {'<'}
          </span>
        </Link>
      )}

      <span className="text-center cursor-default">
        {page + 1}
      </span>

      {links.next && (
        <Link href={links.next} title="Go to next page">
          <span className="text-center cursor-pointer">
            {'>'}
          </span>
        </Link>
      )}
    </div>
  )
}
