export default function Food({ position, cellSize }) {
    return (
        <div style={{
            position: 'absolute',
            left: position.x * cellSize,
            top: position.y * cellSize,
            width: cellSize,
            height: cellSize,
            backgroundColor: '#05ffa1',
            borderRadius: '50%',
            boxShadow: '0 0 8px #05ffa1',
        }} />
    )
}