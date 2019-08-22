import React, { useState, useEffect } from "react"
import axios from "axios"
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component"
import "./gallery.css"

const ImageGallery = ({ images, loading, fetchImages }) => {
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={() => fetchImages()}
      hasMore={true}
      loader={
        <p style={{ textAlign: "center", marginTop: "1%" }}>
          More doggos incoming...
        </p>
      }
    >
      <div className="image-grid">
        {!loading
          ? images.map(image => (
              <div className="image-item" key={image.id}>
                <img src={image.urls.regular} alt={image.alt_description} />
              </div>
            ))
          : ""}
      </div>
    </InfiniteScroll>
  )
}

const InfiniteImages = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchImages()
  }, [])

  const endpoint = "<Endpoint placeholder>"

  const fetchImages = () => {
    axios(endpoint).then(res => {
      setImages([...images, ...res.data.images])
      setLoading(false)
    })
  }
  return (
    <ImageGallery images={images} loading={loading} fetchImages={fetchImages} />
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
  fetchImages: PropTypes.func,
}

export default InfiniteImages
