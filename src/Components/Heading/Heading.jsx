import React from 'react'
import './Heading.css'

const title = (props) => {
  return (
    <div>
      <div className='heading'>
      <p>{props.title}</p>
      <h2>{props.mainTitle}</h2>
    </div>
    </div>
  )
}

export default title
