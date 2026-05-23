import Snake from './Snake.jsx'
import Food from './Food.jsx'

const CELL_SIZE = 20
const COLS = 20
const ROWS = 20

export default function Board({ snake, food }) {
    return (
        <div style={{
            position: 'relative',
            width: CELL_SIZE * COLS,
            height: CELL_SIZE * ROWS,
            backgroundColor: 'black',
            border: '2px solid darkgreen',
        }}>
            <Snake segments={snake} cellSize={CELL_SIZE} />
            <Food position={food} cellSize={CELL_SIZE} />
        </div>
    )
}