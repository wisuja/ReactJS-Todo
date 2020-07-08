import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link to='/' style={linkStyle}>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: 'white'
}
