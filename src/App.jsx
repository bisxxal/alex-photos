import { useEffect, useRef} from 'react'
import Animationpage from './components/Animationpage'
import './App.css'
import Lastpage from './components/Lastpage'
import Page1 from './components/Page1'  
import LocomotiveScroll from 'locomotive-scroll';
 
 
function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div  >
    <Page1/>
      <Animationpage/>
      <Lastpage/>
    </div>
  )
}

export default App
