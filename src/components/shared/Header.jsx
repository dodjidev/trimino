// import { Button } from 'flowbite-react'
import React from 'react'
import { useState } from 'react'
import { MenuOutline , CloseOutline} from 'react-ionicons'
// import Logo from '../../assets/icons/vem-logo.jpeg'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  let [navVisibleClass, setNavVisibleClass] = useState('hidden')
  const changeNavState = ()=> setNavVisibleClass(navVisibleClass => (navVisibleClass == 'visible' ? 'hidden' : 'visible'))
  
  return (
    <div className='w-full  top-0 right-0 z-10'>
      <div className='md:flex bg-white  p-4 drop-shadow-lg items-center gaps-3 justify-between z-10'>
             <div className='text-lg font-medium text-black flex  items-center justify-between md:block '>
                 <h1 className='font-bold'>
                   {/* <img  src={Logo} className="h-[40px] w-[40px]"/> */}
                  </h1>  
                 <div className='cursor-pointer' onClick={changeNavState}>
                   {navVisibleClass == 'visible' ? <CloseOutline cssClasses='md:hidden'/>: <MenuOutline cssClasses='md:hidden'/> } 
                 </div>
              </div>
             <div className={` md:flex  md:visible items-center justify-between w-[95%] ${navVisibleClass}`}>
                <div className='md:ml-3 '>
                    <a href="/#about-container" className='menu-link' >A propos</a>
                    <Link to="/services" className='menu-link' >Nos services</Link>
                    <Link to="/schools" className='menu-link' >Ecoles partenaires</Link>
                    <Link to="/formations" className='menu-link' >Les formations</Link>
                    <Link to="/degrees" className='menu-link' >Les diplomes</Link>
                </div>
                <div>
                      {/* <Button>
                        <Link to='/login'>Login</Link>
                      </Button> */}
                </div>
             </div>
      </div>
    </div>
  )
}

export default Header
