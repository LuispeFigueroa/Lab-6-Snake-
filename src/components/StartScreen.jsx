export default function StartScreen({ onStart }) {
    return (
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h2 style={{
                fontSize: '2rem',
                letterSpacing: '0.3em',
                marginBottom: '2rem',
                color: '#01cdfe',
                textShadow: '0 0 10px #01cdfe',
            }}>
                SNAKE GAME
            </h2>
            <p style={{ marginBottom: '1rem', color: '#b967ff', fontSize: '1rem' }}>
                Usa las flechas del teclado para moverte
            </p>
            <p style={{ marginBottom: '3rem', color: '#ff71ce', fontSize: '1rem' }}>
                Come la comida para crecer · Cada 50 pts sube el nivel
            </p>
            <button onClick={onStart} style={{ fontSize: '1rem', padding: '14px 32px' }}>
                JUGAR
            </button>
        </div>
    )
}