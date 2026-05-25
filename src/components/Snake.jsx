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
                    backgroundColor: i === 0 ? '#ff71ce' : `hsl(${280 - i * 5}, 100%, ${60 - i}%)`,
                    borderRadius: 3,
                    boxShadow: i === 0 ? '0 0 8px #ff71ce' : 'none',
                }} />
            ))}
        </>
    )
}