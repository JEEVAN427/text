import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("")
   

  


  return (
    <>
      <div className="flex h-screen w-screen bg-slate-500 items-center justify-center" style={{background:color}}>
        <div>
          <h1 className="text-white" style={{background:color}}>Random Password Generator</h1>
          <div className="flex justify-center" style={{background:color}} >
            <textarea name="" id="" cols="30" rows="10" className=''></textarea>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
