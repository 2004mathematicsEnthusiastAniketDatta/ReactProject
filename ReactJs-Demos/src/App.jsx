import { useState } from 'react'
import './App.css'

function App() {
  
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <div className={darkMode ? 'bg-gray-900 min-h-screen' : 'bg-gray-100 min-h-screen'}> 
        <div className='p-4'>
          <button 
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-md ${
              darkMode 
                ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            } transition-colors duration-200`}
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
          
          <div className={`mt-6 p-4 rounded-md border ${
            darkMode ? 'border-gray-700 text-white' : 'border-gray-300 text-gray-800'
          }`}>
            <h1 className="text-xl font-bold">
              Current Mode: {darkMode ? 'Dark Mode' : 'Light Mode'}
            </h1>
            <p className="mt-2">
              Toggle the button above to switch between dark and light mode.
            </p>
          </div>
        </div>      
      </div>
    </>
  )
}

export default App
