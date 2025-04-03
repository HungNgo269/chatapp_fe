import React from 'react'

interface Props {
  propName?: string
}

const HomePage: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  )
}

export default HomePage
