export default function Score({ score, best, level }) {
    return (
        <div>
            <p> Puntos: {score}</p>
            <p> Mejor Puntuación: {best}</p>
            <p> Nivel: {level}</p>
        </div>
    )
}