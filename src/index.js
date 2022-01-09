import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Input() {
  return (
    <div>
      <input type="button"/>
    </div>
  )
}

function Color() {
  const [textColor, setTextColor] = useState(null)
  return (
    <div>
      <label>color</label>
      <input 
        type="color" 
        onChange={(e) => {
          setTextColor(e.target.value)
        }
      }/>
      <h1 style={{ color: textColor }}>Text Color</h1>
    </div>
  )
}

function BackgoundColor() {
  const [backGround, setBackGround] = useState('white');
  return (
    <div>
      <label>backgroundColor</label>
      <input 
        type="color"
        onChange={(e) => 
          setBackGround(e.target.value)
        }
      />
      <h1 style={{ background: backGround }}>Back Ground Color</h1>
    </div>
  )
}

function Opacity() {
  const [opacity, setOpacity] = useState('1');
  return (
    <div>
      <label>opacity</label>
      <input 
        type="range" min="0" max="1" step="0.1" 
        onChange={(e) => 
          setOpacity(e.target.value)
        }
      />
      <span style={{ opacity: opacity }}>{opacity}</span>
    </div>
  )
}

function BorderRadius() {
  const [borderRadius, setBorderRadius] = useState(50)
  return (
    <div>
      <label>borderRadius</label>
      <input 
        type="range" min="10" max="50" step="1"
        onChange={(e) => 
          setBorderRadius(e.target.value)
        }
      />
      <span>{ borderRadius }</span>
      <div style={{ height: 40, width: 40, background: 'blue', borderRadius: borderRadius + '%'}}></div>
    </div>
  )
}

function FontSize() {
  const [fontSize, setFontSize] = useState(40);
  return (
    <div>
      <label>fontSize</label>
      <input 
        type="range" min="10" max="40" step="1"
        onChange={(e) =>
          setFontSize(e.target.value)
        }
      />
      <span style={{ fontSize: fontSize + 'px' }}>{ fontSize }</span>
    </div>
  )
}

function Disabled() {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div>
      <label>disabled</label>
      <input 
        type="checkbox"
        onChange={() => 
          setIsDisabled(!isDisabled)
        }
      />
      { isDisabled }
      <button disabled={isDisabled}>disabled</button>
    </div>
  )
}

function ButtonText() {
  const [buttonText, setButtonText] = useState();
  return (
    <div>
      <label>Button Text</label>
      <input 
        type="text"
        onChange={(e) =>
          setButtonText(e.target.value)
        }
      />
      <h3 style={{ color: 'blue'}}>{ buttonText }</h3>
    </div>
  )
} 

function App() {
  return (
    <div>
      <Input />
      <Color />
      <BackgoundColor />
      <Opacity />
      <BorderRadius />
      <FontSize />
      <Disabled />
      <ButtonText />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);