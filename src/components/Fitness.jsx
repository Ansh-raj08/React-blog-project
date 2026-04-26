import React from 'react'
import Data from '../Data'

const Fitness = () => {
  const fitnessData = Data.filter((item) => item.category === 'Fitness')

  return (
    <div>
      {fitnessData.map((fitnessitem) => (
        <div key={fitnessitem.id}>
          <h1>{fitnessitem.title}</h1>
          <img src={fitnessitem.img_url} alt={fitnessitem.title} />
        </div>
      ))}
    </div>
  )
}

export default Fitness