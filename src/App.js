import React from "react";
import './styles.css'
import Main from "./Components/Main";
import GuessNumber from "./Components/GuessNumber";
import FindPic from "./Components/Findpic";
import Flames from "./Components/Flames";
import { BrowserRouter,  Route, Routes } from 'react-router-dom'



const App=()=>{

 
  return(
    <div >
    

    <div>
    <BrowserRouter>

   
              
     <Routes>
      <Route path="/jkGame" element={<Main  />} />
       <Route path="/" element={<Main />} />
       <Route path='/guess' element={<GuessNumber />} />
       <Route path='/memory-game' element={<FindPic />} />
       <Route path="/flames" element={<Flames />} />
     </Routes>
    </BrowserRouter>
  </div>
     
     </div>
  )
}

export default App;