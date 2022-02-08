import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import {Color} from './components/Color';
import {BackgoundColor} from './components/BackgroundColor';
import {Opacity} from './components/Opacity';
import {Input} from './components/Input';
import {BorderRadius} from './components/BorderRadius';
import {FontSize} from './components/FontSize';
import {Disabled} from './components/Disabled';
import {ButtonText} from './components/ButtonText';

function App() {
  const [textColor, setTextColor] = useState();
  const [backGround, setBackGround] = useState('white');
  const [opacity, setOpacity] = useState(1);
  const [borderRadius, setBorderRadius] = useState(10);
  const [fontSize, setFontSize] = useState(40);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('');

  return (
    <Container maxWidth="sm" sx={{ height: '100vh'}}>
      <Box sx={{ height: '100%',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Box sx={{ minHeight: '5rem'}}>
            <Input
              textColor={textColor}
              backGround={backGround}
              opacity={opacity}
              borderRadius={borderRadius}
              fontSize={fontSize}
              isDisabled={isDisabled}
              buttonText={buttonText}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Color onChange={(value) => { setTextColor(value) }}/>
            <BackgoundColor onChange={(value) => { setBackGround(value)}} />
            <Opacity onChange={(value) => { setOpacity(value)}} opacity={opacity} />
            <BorderRadius onChange={(value) => { setBorderRadius(value)}} borderRadius={borderRadius}/>
            <FontSize onChange={(value) => { setFontSize(value)}} fontSize={fontSize} min='10' max='40' step='1' />
            <Disabled onChange={() => { setIsDisabled(!isDisabled)}} />
            <ButtonText onChange={(value) => { setButtonText(value)}} />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default App;
