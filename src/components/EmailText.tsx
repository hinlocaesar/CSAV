/**
 * Renders an email address so it only ever breaks at the "@".
 *
 * Without this, `colegiodestaanadevictorias@gmail.com` wraps mid-word in the
 * narrow contact cards, splitting it into an unreadable "gma / il.com".
 */
export function EmailText({
  value,
  className = '',
}: {
  value: string
  className?: string
}) {
  const at = value.lastIndexOf('@')
  if (at === -1) return <span className={className}>{value}</span>

  return (
    <span className={className}>
      {value.slice(0, at)}
      <wbr />
      <span className="whitespace-nowrap">{value.slice(at)}</span>
    </span>
  )
}
