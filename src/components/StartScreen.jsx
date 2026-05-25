export default function StartScreen({ onStart }) {
    return (
        <div>
            <h2> Snake Game</h2>
            <p>Usa las flechas del teclado para mover la serpiente</p>
            <p>Come la comida para crecer y sumar puntos</p>
            <button onClick={onStart}>▶ Jugar</button>
        </div>
    )
}