import React from 'react'
import { Canvas } from './canvas'
import './App.scss'

const App = () => (
    <div className='app-container'>
      <header>
        <h1>Minesweeper</h1>
      </header>
      <div className='app-game-container'>
        <Canvas />
      </div>
    </div>
)

export default App
