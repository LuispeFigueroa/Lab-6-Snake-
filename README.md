#  Snake Game

**README asistido por IA*   

Implementación del juego clásico Snake desarrollado con React + Vite.

## Tecnologías
- React (JSX, useState, useEffect)
- Vite

## Instalación

```bash
npm install
npm run dev
```

Abre http://localhost:5173 en tu navegador.

## Cómo jugar
- Presiona **Jugar** para iniciar
- Usa las **flechas del teclado** para mover la serpiente
- Come la comida 🔴 para crecer y sumar **10 puntos**
- Cada **50 puntos** sube el nivel y la serpiente va más rápido
- El juego termina si chocas con la pared o con tu propio cuerpo

## Estructura del proyecto
```
src/
├── components/
│   ├── Board.jsx       # tablero del juego
│   ├── Food.jsx        # comida
│   ├── Score.jsx       # puntaje y nivel
│   ├── Snake.jsx       # serpiente
│   └── StartScreen.jsx # pantalla de inicio
└── App.jsx             # contenedor principal y lógica del juego
```