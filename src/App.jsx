import { useCallback, useEffect, useState } from 'react'
 
import './App.css'

function App() {
  const [color,setColor] = useState("")
  const [length,setlength]=useState(8)
  const [number,numAllow]=useState(true)
  const [char,charAllow]=useState(true)
  const [pass,passAllow]=useState("")

  const passwordGenerator=useCallback(()=>{
    let code="";
    let str="AaBbCcDdEeFfGgHhIijJkKlLmMnNOoPpQqRrSsTtUuVvWwXxYyZz";
    let num="0123456789";
    let specialChar="!@#$%^&*_-=";
    if(numAllow)str+=num;
    
    if(charAllow)  str+=specialChar;
    
    for (let i = 0; i <=length; i++) {
      let ran=Math.floor(Math.random()*str.length+1)
      code+=str.charAt(ran)
      
    }
    passAllow(code);

  },[length,number,char,passAllow]);

  
useEffect(()=>{
  passwordGenerator()
},[length,charAllow,numAllow,passwordGenerator])

 
  return (
    <>
      <div className="flex main-div   h-screen w-screen bg-slate-500 items-center justify-center gap-y-40" style={{background:color}}  >
        <div className='main'>
          <h1 className="text-white text-center text-xl font-medium"  >Random Password Generator</h1>
          <div className="flex justify-center pt-2"   >
            <input type="text" readOnly className='px-3 rounded-l-sm w-full h-8' placeholder="Password" 
            value={pass}
            />
            <button class="bg-blue-500 hover:bg-blue-700 text-white   px-4 rounded-r-md">Copy</button>
          </div>
          <div className="flex flex-row gap-x-5 mt-3" >
            <div className="range flex items-center justify-center flex-row">
              <input type="range"
                min={8}
                max={100}
                value={length}
                className='cursor-pointer w-20'
                onChange={(e)=>setlength(e.target.value)}
              />
              <label className='text-white ml-2' >Length: {length}</label>
            </div>
            <div className="check">
              <input type="checkbox"
              defaultChecked={numAllow}
              onChange={()=>{numAllow((prev)=>!prev)}}
              />
              <label className='text-white ml-4'>Number</label>
            </div>
            <div className="check">
              <input type="checkbox"
              defaultChecked={charAllow}
              onChange={()=>{charAllow((prev)=>!prev)}}
              />
              <label className='text-white ml-5'>Special Character</label>
            </div>
          </div>
        </div>
       
      <div className="p-3 bg-white mt-5 rounded-3xl">
            <button className="bg-red-500 mr-10 text-white px-5 py-2 rounded-2xl"
            onClick={()=>setColor("red")}
            >Red</button>
            <button className="bg-green-500 mr-10 text-white px-5 py-2 rounded-2xl"
            
            onClick={()=>setColor("green")}
            >Green</button>
            <button className="bg-blue-500 mr-10 text-white px-5 py-2 rounded-2xl"
            onClick={()=>setColor("blue")}
            
            >Blue</button>
            <button className="bg-purple-500 text-white px-5 py-2 rounded-2xl"
            onClick={()=>setColor("")}purple
            
            >Purple</button>

        </div>
      </div>
    </>
  )
}


export default App
