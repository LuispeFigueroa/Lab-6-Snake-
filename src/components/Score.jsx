export default function Score({ score, best, level }) {
    return (
        <div style={{
            display: 'flex',
            gap: 32,
            justifyContent: 'center',
            marginBottom: 12,
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
        }}>
            <span style={{ color: '#ff71ce' }}>SCORE: <strong>{score}</strong></span>
            <span style={{ color: '#01cdfe' }}>BEST: <strong>{best}</strong></span>
            <span style={{ color: '#b967ff' }}>LVL: <strong>{level}</strong></span>
        </div>
    )
}