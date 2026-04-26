import React from 'react'
import Data from '../Data'

const Technology = () => {
  const technologyData = Data.filter((item) => item.category === 'Technology')

  return (
    <div>
      {technologyData.map((techitem) => (
        <div key={techitem.id}>
          <h1>{techitem.title}</h1>
          <img src={techitem.img_url} alt={techitem.title} />
        </div>
      ))}
    </div>
  )
}

export default Technology