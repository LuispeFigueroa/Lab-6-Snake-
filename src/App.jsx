import { useState, useEffect, useRef } from 'react'
import Score from './components/Score.jsx'
import Board from './components/Board.jsx'
import StartScreen from './components/StartScreen.jsx'

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
        if (!prev || prev.length === 0) return prev

        const head = {
          x: prev[0].x + dirRef.current.x,
          y: prev[0].y + dirRef.current.y,
        }

        // colisión con bordes
        if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
          setStatus('over')
          return prev
        }

        // colisión con cuerpo
        if (prev.some(s => s.x === head.x && s.y === head.y)) {
          setStatus('over')
          return prev
        }

        // come la comida?
        const ateFood = head.x === food.x && head.y === food.y

        if (ateFood) {
          setScore(s => {
            const ns = s + 10
            setBest(b => Math.max(b, ns))
            return ns
          })
          setFood({
            x: Math.floor(Math.random() * COLS),
            y: Math.floor(Math.random() * ROWS),
          })
          return [head, ...prev] // crece, no se quita la cola
        }

        return [head, ...prev.slice(0, -1)] // se mueve normal
      })
    }, 200)

    return () => clearInterval(interval)
  }, [status, food])

  useEffect(() => {
    const handler = (e) => {
      const moves = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      }
      if (!moves[e.key]) return
      e.preventDefault()

      const next = moves[e.key]
      const cur = dirRef.current

      if (next.x === -cur.x && next.y === -cur.y) return

      dirRef.current = next
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])


  return (
    <div>
      <h1>Snake Game</h1>

      {status === 'idle' && (
        <StartScreen onStart={() => setStatus('running')} />
      )}

      {status !== 'idle' && (
        <>
          <Score score={score} best={best} />
          <Board snake={snake} food={food} />

          {status === 'running' && (
            <button onClick={() => setStatus('paused')}>⏸ Pausar</button>
          )}

          {status === 'paused' && (
            <button onClick={() => setStatus('running')}>▶ Continuar</button>
          )}

          {status === 'over' && (
            <div>
              <p>Game Over! Puntaje: {score}</p>
              <button onClick={() => {
                setSnake([{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }])
                setFood({ x: 15, y: 10 })
                setScore(0)
                dirRef.current = { x: 1, y: 0 }
                setStatus('running')
              }}>↺ Reiniciar</button>
            </div>
          )}
        </>
      )}
    </div>
  )
}