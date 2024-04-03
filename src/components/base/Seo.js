import React from "react"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

export const Seo = ({ title, description}) => {
  const { title: defaultTitle, description: defaultDescription} = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  }

  return (
    <>
      <title>{seo.title + " | Carleton CUSEC Society"}</title>
      <meta name="description" content={seo.description} />
    </>
  )

}