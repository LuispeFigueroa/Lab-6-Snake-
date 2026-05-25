import Snake from './Snake.jsx'
import Food from './Food.jsx'

const CELL_SIZE = 24
const COLS = 20
const ROWS = 20

export default function Board({ snake, food }) {
    return (
        <div style={{
            position: 'relative',
            width: CELL_SIZE * COLS,
            height: CELL_SIZE * ROWS,
            backgroundColor: '#0d0013',
            border: '2px solid #b967ff',
            boxShadow: '0 0 20px #b967ff88',
            margin: '0 auto',
        }}>
            <Snake segments={snake} cellSize={CELL_SIZE} />
            <Food position={food} cellSize={CELL_SIZE} />
        </div>
    )
}