import React from 'react'
import Data from '../Data'

const Food = () => {
  const foodData = Data.filter((item) => item.category === 'Food')

  return (
    <div>
      {foodData.map((fooditem) => (
        <div key={fooditem.id}>
          <h1>{fooditem.title}</h1>
          <img src={fooditem.img_url} alt={fooditem.title} />
        </div>
      ))}
    </div>
  )
}

export default Food