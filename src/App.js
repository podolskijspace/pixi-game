import { Stage, Sprite } from '@inlet/react-pixi'
import {use}

import sheep1 from './assets/images/sheeps/sheep-1.png'
import './App.css';

function App() {


  return (
    <div className="App">
      <Stage width={400} height={686} options={{ backgroundColor: 0xeef1f5 }}>
        <Sprite
          image={sheep1}
          anchor={{ x: 0.5, y: 1 }}
          x={200}
          y={686}
          width={60}
          height={60}
        />
      </Stage>
    </div>
  );
}

export default App;
