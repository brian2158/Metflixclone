
import './Navbar.css'
import logo from '../../assets/assets/logo.png' 
import searchicon from '../../assets/assets/search_icon.svg' 
import bellicon from '../../assets/assets/bell_icon.svg' 
import profile_img from '../../assets/assets/profile_img.png' 
import dropdown_icon from '../../assets/assets/caret_icon.svg' 
import { useEffect, useRef } from 'react'
import { logout } from '../../firebase'
const Navbar = () => {

  const navRef = useRef();
  useEffect(()=>{
 window.addEventListener("scroll", ()=>{
  if(window.scrollY >= 80){
    navRef.current.classList.add('nav-dark')
  }
  else{
    navRef.current.classList.remove('nav-dark')
  }
 })
  },[])


  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List </li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={searchicon} alt="" className='icons'/>
        <p>Children</p>
        <img src={bellicon} alt=""className='icons' />
        <div className='navbar-profile'>
        <img src={profile_img} alt="" className='profile' />
        <img src={dropdown_icon} alt="" />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
