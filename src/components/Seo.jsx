import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL, getPageMeta } from '../seo'

function setAttr(selector, attr, value) {
  document.head.querySelector(selector)?.setAttribute(attr, value)
}

// Setzt Titel, Beschreibung, Canonical und Open-Graph-Angaben je Route
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { title, description } = getPageMeta(pathname)
    const url = SITE_URL + pathname
    document.title = title
    setAttr('meta[name="description"]', 'content', description)
    setAttr('link[rel="canonical"]', 'href', url)
    setAttr('meta[property="og:url"]', 'content', url)
    setAttr('meta[property="og:title"]', 'content', title)
    setAttr('meta[property="og:description"]', 'content', description)
    setAttr('meta[name="twitter:title"]', 'content', title)
    setAttr('meta[name="twitter:description"]', 'content', description)
  }, [pathname])

  return null
}
