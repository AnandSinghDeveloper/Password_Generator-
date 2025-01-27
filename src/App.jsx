import { useCallback, useEffect, useState } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [spchar, setSpchar] = useState(false)
  const [password, setPassword] = useState("")

  const PasswordGenretor = useCallback(()=> {

    let psscode = null 

    let charcode = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    if(number){
          charcode += "0123456789";

    }
    if(spchar){
      charcode += "@#$%!~^&*()_+=?";
    }

    for(let i=1 ; i<length ; i++ ){
        let Charactor = Math.floor(Math.random() * charcode.length + 1)

          psscode += charcode.charAt(Charactor);    
  
    }

    setPassword(psscode)

    console.log(password);
    
    
   


  },[length, number, spchar,setPassword]);

  useEffect(()=>{

    PasswordGenretor()


  },[number,spchar,PasswordGenretor ,length])


  return (
    <div className='h-screen w-screen flex justify-center items-center bg-[#ff735c] '>
      <div className='w-1/2 h-80 flex flex-col p-3  bg-[#f9c8c0] rounded-xl'>

      <h1 className='text-3xl font-bold text-center pt-3'> Password Genretor</h1>

       <label className=' font-medium text-lg' htmlFor="password">Password</label>
       <div>
       <input
      value={password}
      readOnly
      className='w-3/4 py-2 px-2 outline-none mt-2 rounded-lg ' type="text" />
      <button className='py-2 px-4 bg-blue-500 rounded ml-2'>Copy text</button>
       </div>
       <div  className='flex'>
       <label className='font-medium text-lg p-4 ' htmlFor="password">Length : {length}</label>
       <input
      value={length}
      readOnly
      min={8}
      max={50}
      onChange={(e)=>{
        setLength(e.target.value)
      }}
      className=' py-2 px-2  ' type="range" /> 

<label className='font-medium text-lg p-4 ' >Number :</label>
       <input
      value={number}
      defaultChecked={number}
      onChange={()=>{setNumber((pev)=> !pev )}}
      className=' w-5   ' type="checkbox" /> 

<label className='font-medium text-lg p-4 ' >Spical Charactor :</label>
       <input
      value={spchar}
      defaultChecked={number}
      onChange={()=>{setSpchar((pev)=> !pev )}}
      className='w-5  ' type="checkbox" /> 
     
       </div>

      </div>
  


    </div>
     
  
  )
}

export default App
