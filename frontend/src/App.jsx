import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LandingPage from './pages/landing-page/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header sticky='top'/>
      <main >
        <LandingPage/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
