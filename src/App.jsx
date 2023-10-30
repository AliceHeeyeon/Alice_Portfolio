import { HashRouter } from 'react-router-dom'
import './css/App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Link from '../Link'

function App() {

  return (
    <HashRouter>
      <Header />
      <Link />
      <Footer />
    </HashRouter>
  )
}

export default App
