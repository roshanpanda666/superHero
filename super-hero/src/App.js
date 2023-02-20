import './App.css';
import { useState } from 'react';

var marvel = require('marvel-characters')


function App() {

  let superNamePre=(marvel())
  
  const[name,superName]=useState(' a super hero')

    const supFun=()=>{

      superName(superNamePre)
      console.log(superName)

    }
  return (
    <div>
      <div className="father">
        <div className="container">
      
          <h1> You are {name}</h1>
          <button className='nButt' onClick={supFun}>click</button>
        
        </div>
      </div>
    </div>
  );
}

export default App;
