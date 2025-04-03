import React from 'react'

interface Props {
  propName?: string
}

const SettingPage: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      <h1>SettingPage</h1>
    </div>
  )
}

export default SettingPage
