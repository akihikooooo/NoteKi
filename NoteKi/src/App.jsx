import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Scrollbar } from 'react-scrollbars-custom';
import Header from './ui/Header';
import Sidebar from './ui/Sidebar';

function App() {

  const [tabTitle, setTabTitle] = useState("Page 1")

  useEffect(() => {
    document.title = tabTitle
  })

  return (
    <>
    <div className='flex flex-col bg-main'>
      <Header tabTitle={tabTitle}/>
      <div id="main"
        className='flex flex-row'>
          <Sidebar/>
          </div>
    </div>
    </>
  )
}

export default App
