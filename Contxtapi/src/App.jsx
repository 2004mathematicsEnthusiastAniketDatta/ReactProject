import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div className='bg-zinc-800 min-h-screen w-full '>
       
      </div>
    </UserContextProvider>
  )
}

export default App
