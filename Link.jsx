import { Routes, Route } from "react-router-dom"

// import pages
import Home from "./src/pages/Home"
import Projects from "./src/pages/Projects"
import About from "./src/pages/About"
import Contact from "./src/pages/Contact"

// import components
import SingleProject from "./src/components/SingleProject"


const Link = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/:id' element={<SingleProject/>}/>
        <Route path='/aboutme' element={<About/>}/>
        <Route path='/contactme' element={<Contact/>}/>
    
    </Routes>
  )
}

export default Link
