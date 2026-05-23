export default function Snake({ segments, cellSize }) {
    return (
        <>
            {segments.map((seg, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    left: seg.x * cellSize,
                    top: seg.y * cellSize,
                    width: cellSize,
                    height: cellSize,
                    backgroundColor: i === 0 ? 'green' : 'lightgreen',
                    borderRadius: 3,
                }} />
            ))}
        </>
    )
}