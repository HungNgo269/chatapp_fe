interface ProfilePageProps {
  propName?: string
}

const ProfilePage: React.FC<ProfilePageProps> = ({ propName }) => {
  return (
    <div>
      <h1>propName</h1>
    </div>
  )
}

export default ProfilePage
