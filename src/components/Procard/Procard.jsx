import React from 'react'
import { Link } from 'react-router-dom'
import './Procard.css'

const Procard = ({name}) => {
  return (
    <Link className="procard">
      <h1>{name}</h1>
    </Link>
  )
}

export default Procard
