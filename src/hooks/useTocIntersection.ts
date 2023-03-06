import { useEffect, useRef, useState } from 'react'

export const tableOfContentsId = 'toc'

export const getDecodedLink = (hash: string) => decodeURIComponent(hash).slice(1)

const useTocIntersection = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement[]>()
  const [lists, setLists] = useState<string[]>()
  const observer = useRef<IntersectionObserver | null>(null)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const anchors: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
      `.${tableOfContentsId} a`
    )
    const anchorArr = Array.from(anchors)
    setAnchorEl(anchorArr)
    setLists(anchorArr.map((a) => getDecodedLink(a.hash)))
  }, [])

  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id)
      }
    })
  }

  useEffect(() => {
    observer.current = new IntersectionObserver(handleScroll, { rootMargin: `0% 0% -80% 0%` })

    if (lists) {
      lists.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          observer.current?.observe(el)
        }
      })
    }

    return () => observer && observer.current?.disconnect()
  }, [lists])

  return { activeId, anchorEl }
}

export default useTocIntersection
