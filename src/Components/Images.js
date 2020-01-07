import React from 'react'
import ImageCard from './ImageCard'
import './image.css'

const Images = (props)=>{
  const images = props.image.map((image)=>{
      return <div>
      <ImageCard key={image.id} image={image} />
      </div>
   })
return <div className="image-list">{images}</div>
}

export default Images