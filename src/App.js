import { Stage, Container, Sprite, useTick } from '@inlet/react-pixi'
import {useState, useEffect, useCallback} from 'react'

import sheep1 from './assets/images/sheeps/sheep-1.png'
import './App.css';

function App() {
  const [sheepPosition, setSheepPositon] = useState(200);
  const [moveLeft, setMoveLeft] = useState(false)
  const [moveRight, setMoveRight] = useState(false)
  const [sheepSpeed, setSheepSpeed] = useState(2)

  //События клавиатуры

  const onKeyDown = useCallback((e) => {
    e.preventDefault();
    const code = e.keyCode
    if (code === 37 || code === 65) {
      setMoveLeft(true)
    } else if (code === 39 || code === 68) {
      setMoveRight(true)
    }
  }, [])
  const onKeyPress = (e) => {
    e.preventDefault();
  }
  const onKeyUp = (e) => {
    e.preventDefault();
    const code = e.keyCode
    if (code === 37 || code === 65) {
      setMoveLeft(false)
    } else if (code === 39 || code === 68) {
      setMoveRight(false)
    }
  }

  //Движок игры
  const moveLeftAct = () => {
      setSheepPositon(sheepPosition - 1 * sheepSpeed)
  }

  const moveRightAct = () => {
    setSheepPositon(sheepPosition + 1 * sheepSpeed)
  }

  useTick(moveLeftAct, moveLeft);
  useTick(moveRightAct, moveRight);

  //Добавление и удаление событий клавиатуры
  const addListeners = () => {
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    document.addEventListener('keypress', onKeyPress)
  }
  const removeListeners = () => {
    document.removeEventListener('keydown', onKeyDown)
    document.removeEventListener('keyup', onKeyUp)
    document.removeEventListener('keypress', onKeyPress)
  }
  const makeListenres = () => {
    addListeners()
    return removeListeners
  }

  useEffect (makeListenres, [])

  return (
    <Container>
      <Sprite
        image={sheep1}
        anchor={{ x: 0.5, y: 1 }}
        x={sheepPosition}
        y={686}
        width={80}
        height={60}
      />
    </Container>
  );
}

export default App;
