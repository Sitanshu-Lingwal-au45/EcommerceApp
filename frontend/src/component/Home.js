import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>
    <h1>Home Route is working</h1>
    <Link to="/products">Got to products</Link>
    </div>
  )
}

export default Home