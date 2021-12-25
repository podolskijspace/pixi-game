import React from 'react';
import ReactDOM from 'react-dom';
import { Stage } from '@inlet/react-pixi'

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Stage width={400} height={686} options={{ backgroundColor: 0xeef1f5 }}>

      <App />
    </Stage>
  </React.StrictMode>,
  document.getElementById('root')
);
