import React from 'react'
import { Link } from 'react-scroll';
// Images
import Logo from '../assets/mcm.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'> 
          {/* Logo */}
          <a href='#'>
            <img className='w-[113px] h-[100px] rounded-xl' src={Logo} alt='Logo'/>
          </a>
          {/* Button */}
          <Link to='contact'><button className='btn btn-sm'>Work With Me</button></Link>
          
        </div>
      </div>
    </header>
  )
}

export default Header