import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Color} from './components/color.js';
import {BackgoundColor} from './components/backgroundColor.js';
import {Opacity} from './components/opacity.js';
import {Input} from './components/input.js';
import {BorderRadius} from './components/borderRadius.js';
import {FontSize} from './components/fontSize.js';
import {Disabled} from './components/disabled.js';
import {ButtonText} from './components/buttonText.js';

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