import React from 'react'
import { Link } from 'react-router-dom'


export const ErrorPage = () => {
    console.log("error page");
  return (
    <section className='section'>
    
      <h1>Error 404: Page Not Found</h1>
      <Link to="/">
        Back to Home
      </Link>
    </section>
  )
}
