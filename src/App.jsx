import Score from './components/Score.jsx'

export default function App() {
  return (
    <div>
      <h1>Snake Game</h1>
      <Score score={0} best={0} />
    </div>
  )
}