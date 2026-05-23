import { useState, useEffect, useRef } from 'react'
import Score from './components/Score.jsx'
import Board from './components/Board.jsx'

const COLS = 20
const ROWS = 20

export default function App() {
  const [snake, setSnake] = useState([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
  ])
  const [food, setFood] = useState({ x: 15, y: 10 })
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)
  const [status, setStatus] = useState('idle')

  const dirRef = useRef({ x: 1, y: 0 })

  useEffect(() => {
    if (status !== 'running') return

    const interval = setInterval(() => {
      setSnake(prev => {
        const head = {
          x: prev[0].x + dirRef.current.x,
          y: prev[0].y + dirRef.current.y,
        }
        return [head, ...prev.slice(0, -1)]
      })
    }, 200)
    return () => clearInterval(interval)
  }, [status])


  return (
    <div>
      <h1>Snake Game</h1>
      <Score score={score} best={best} />
      <Board snake={snake} food={food} />
      <button onClick={() => setStatus('running')}> Comenzar</button>
    </div>
  )
}