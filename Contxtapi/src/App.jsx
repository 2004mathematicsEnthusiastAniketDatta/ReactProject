import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div className='bg-zinc-800 min-h-screen w-full '>
       < Login />
       <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
