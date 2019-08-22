import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <h1 className="is-size-5">Images from Unsplash...</h1>
      <p style={{ marginBottom: "5%" }}>
        Now this is the Law of the Jungle, as old and true as the sky, for as
        long as you keep scrolling, you shall find more doggo images.
      </p>
    </Layout>
  )
}

export default Gallery
