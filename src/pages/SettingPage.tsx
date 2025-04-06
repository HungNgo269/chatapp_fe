interface SettingPageProps {
  propName?: string
}

const SettingPage: React.FC<SettingPageProps> = ({ propName }) => {
  return (
    <div>
      <h1>propName</h1>
    </div>
  )
}

export default SettingPage
