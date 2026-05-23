export default function Food({ position, cellSize }) {
    return (
        <div style={{
            position: 'absolute',
            left: position.x * cellSize,
            top: position.y * cellSize,
            width: cellSize,
            height: cellSize,
            backgroundColor: 'red',
            borderRadius: '50%',
        }} />
    )
}