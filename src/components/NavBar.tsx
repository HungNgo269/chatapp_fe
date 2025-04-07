interface NabBarProps {
  propName?: string
}

const NabBar: React.FC<NabBarProps> = ({ propName }) => {
  return (
    <div>
      <h1>propName</h1>
    </div>
  )
}

export default NabBar
