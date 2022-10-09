import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Box} from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Box className="pricing" w='100%' h='960px' bg='white'></Box>
    </div>
  );
}

export default App
