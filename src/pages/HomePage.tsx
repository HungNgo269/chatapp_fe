import Cookies from 'js-cookie'
interface HomePageProps {
  propName?: string
}

const HomePage: React.FC<HomePageProps> = ({ propName }) => {
  const token = Cookies.get('accessToken')
  console.log(token)
  return (
    <div>
      <h1>propName</h1>
    </div>
  )
}

export default HomePage
