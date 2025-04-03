import React from 'react'

interface Props {
  propName?: string
}

const ProfilePage: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      <h1>ProfilePage</h1>
    </div>
  )
}

export default ProfilePage
