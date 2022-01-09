import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Input(props) {
  const buttonStyle = {
    color: props.textColor,
    background: props.backGround,
    opacity: props.opacity,
    borderRadius: props.borderRadius + '%',
    fontSize: props.fontSize + 'px',
  }
  return (
    <div>
      <input type="button" value={props.buttonText} style={ buttonStyle } disabled={props.isDisabled}/>
    </div>
  )
}

function Color(props) {
  return (
    <div>
      <label>color</label>
      <input 
        type="color" 
        onChange={(e) => {
          props.onChange(e.target.value)
        }
      }/>
    </div>
  )
}

function BackgoundColor(props) {
  return (
    <div>
      <label>backgroundColor</label>
      <input 
        type="color"
        onChange={(e) => 
          props.onChange(e.target.value)
        }
      />
    </div>
  )
}

function Opacity(props) {
  return (
    <div>
      <label>opacity</label>
      <input 
        type="range" min="0" max="1" step="0.1" value={props.opacity}
        onChange={(e) => 
          props.onChange(e.target.value)
        }
      />
      <span>{props.opacity}</span>
    </div>
  )
}

function BorderRadius(props) {
  return (
    <div>
      <label>borderRadius</label>
      <input 
        type="range" min="10" max="50" step="1" value={props.borderRadius}
        onChange={(e) => 
          props.onChange(e.target.value)
        }
      />
      <span>{ props.borderRadius }</span>
      <div style={{ height: 40, width: 40, background: 'blue', borderRadius: props.borderRadius + '%'}}></div>
    </div>
  )
}

function FontSize(props) {
  return (
    <div>
      <label>fontSize</label>
      <input 
        type="range" min="10" max="40" step="1" value={props.fontSize}
        onChange={(e) =>
          props.onChange(e.target.value)
        }
      />
      <span>{ props.fontSize }</span>
    </div>
  )
}

function Disabled(props) {
  return (
    <div>
      <label>disabled</label>
      <input 
        type="checkbox"
        onChange={() => 
          props.onChange()
        }
      />
    </div>
  )
}

function ButtonText(props) {
  return (
    <div>
      <label>Button Text</label>
      <input 
        type="text"
        onChange={(e) =>
          props.onChange(e.target.value)
        }
      />
    </div>
  )
} 

function App() {
  const [textColor, setTextColor] = useState();
  const [backGround, setBackGround] = useState('white');
  const [opacity, setOpacity] = useState(1);
  const [borderRadius, setBorderRadius] = useState(10);
  const [fontSize, setFontSize] = useState(40);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('');
  return (
    <div>
      <div>
        <Input 
          textColor={textColor} 
          backGround={backGround} 
          opacity={opacity}
          borderRadius={borderRadius}
          fontSize={fontSize}
          isDisabled={isDisabled}
          buttonText={buttonText}
        />
      </div>
      <Color onChange={(value) => { setTextColor(value) }}/>
      <BackgoundColor onChange={(value) => { setBackGround(value)}} />
      <Opacity onChange={(value) => { setOpacity(value)}} opacity={opacity} />
      <BorderRadius onChange={(value) => { setBorderRadius(value)}} borderRadius={borderRadius}/>
      <FontSize onChange={(value) => { setFontSize(value)}} fontSize={fontSize} />
      <Disabled onChange={() => { setIsDisabled(!isDisabled)}} />
      <ButtonText onChange={(value) => { setButtonText(value)}} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);