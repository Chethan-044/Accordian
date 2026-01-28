import React from 'react'
import Accordian from './components/Accordian/index.jsx'
import Randomcolor from './components/randomcolor/index.jsx'
import Stars from './components/Stars/Stars.jsx'
import Image from './components/Imageslider/Image.jsx'
const App = () => {
  return (
    <div>
      {/* <Accordian/> */}
      {/* <Randomcolor/> */}
      {/* <Stars/> */}
      <Image url={'https://picsum.photos/v2/list'} limit={6}/>
    </div>
  )
}

export default App