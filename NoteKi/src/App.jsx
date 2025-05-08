import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Scrollbar } from 'react-scrollbars-custom';
import Header from './ui/Header';
import Sidebar from './ui/Sidebar';
import TextArea from './ui/TextArea';

function App() {

  const [tabTitle, setTabTitle] = useState("Page 1")

  const handleChangeTabTitle = (tabTitle) => {
    if (tabTitle.length > 0) {
      setTabTitle(tabTitle)
    }
    else {
      setTabTitle("NoteKi")
    }
    console.log(tabTitle)
  }

  useEffect(() => {
    document.title = tabTitle
  })

  return (
    <>
    <div className='flex flex-col bg-main h-screen font-montserrat'>
      <Header tabTitle={tabTitle}/>
      <div id="main"
        className='flex flex-row h-screen p-2'>
          <Sidebar/>
          <TextArea
          onInputChange={handleChangeTabTitle}/>
          </div>
    </div>
    </>
  )
}

export default App
