export function Entity({ entity }: any) {
  return (
    <article>
      {entity.field_body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: entity.field_body?.processed }}
        />
      )}
    </article>
  )
}
