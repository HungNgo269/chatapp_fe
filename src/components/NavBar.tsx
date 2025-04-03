import React from 'react'

interface Props {
  propName?: string
}

const NavBar: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      <h1>NavBar</h1>
    </div>
  )
}

export default NavBar
