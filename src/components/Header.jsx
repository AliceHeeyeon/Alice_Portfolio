import { useState, useEffect } from 'react'
import NavMenu from './NavMenu'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'

const Header = () => {
  const [time, setTime] = useState(null)
  const [isNight, setIsNight] = useState(false)
  const [menuIsOpen, openMenu] = useState(false)

  const toggleMenu = () => {
    openMenu(!menuIsOpen)
    document.body.classList.toggle('no-scroll')
  } 

  useEffect(() => {
    const updateTime = () => {
      const currentTime = formatTime(new Date())
      setTime(currentTime)
    }
    updateTime()

    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  },[])

  function formatTime(date) {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    const appm = hours >= 12 ? 'PM' : 'AM'

    if (hours > 17) {
      setIsNight(true)
    } else {
      setIsNight(false)
    }

    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes

    const strTime = hours + ':' + minutes + appm
    return strTime
  }

  return (
    <div className='topnav'>
      {/* desktop */}
      <div className='nav-desktop'>
        <div onClick={toggleMenu} className='menu-icons'>
          <BiMenu />
          <span>MENU</span>
        </div>
        <div className='logo'>
          <Link to='/'>ALICE HEEYEON KIM</Link>
        </div>
        <div className='time'>
          <p>Auckland</p>
          <span>{isNight ? <BsMoon/> : <FiSun/>}</span>
          {time}
        </div>
      </div>

      {/* mobile */}
      <div className='nav-mobile'>
        <div onClick={toggleMenu} className='hambuger-icon'>
          <BiMenu />
        </div>
        <div className='logo-mobile'>
          <Link to='/'>ALICE KIM</Link>
        </div>
      </div>

      {menuIsOpen && <NavMenu closeMethod={toggleMenu} />}
    </div>
  )
}

export default Header
