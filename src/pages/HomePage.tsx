interface HomePageProps {
  propName?: string
}

const HomePage: React.FC<HomePageProps> = ({ propName }) => {
  return (
    <div>
      <h1>propName</h1>
    </div>
  )
}

export default HomePage
