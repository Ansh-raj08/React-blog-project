import React from 'react'
import Data from '../Data'

const Hollywood = () => {
  const hollywoodData = Data.filter((item) => item.category === 'Hollywood')

  return (
    <div>
      {hollywoodData.map((hollydata) => (
        <div key={hollydata.id}>
          <h1>{hollydata.title}</h1>
          <img src={hollydata.img_url} alt={hollydata.title} />
        </div>
      ))}
    </div>
  )
}

export default Hollywood