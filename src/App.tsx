import { useState } from 'react'
import {Tape} from './components/TickerTape'
import  WithSubnavigation  from './components/Navbar'
import { HeroPage } from './pages/Main'
import StatsGridWithImage from './pages/Main'
import LargeWithNewsletter from './components/Footer'
import './App.css'
const App:React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Tape/>
      <WithSubnavigation/>
      <HeroPage/>
      <StatsGridWithImage/>
      <LargeWithNewsletter/>
    </div>
  );
}

export default App
