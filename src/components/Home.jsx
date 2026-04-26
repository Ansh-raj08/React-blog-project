import React from 'react'
import Data from '../Data'

const Home = () => {
  return (
    <div>
      {Data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img src={item.img_url} alt={item.title} />
        </div>
      ))}
    </div>
  )
}

export default Home