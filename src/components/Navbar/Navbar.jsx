import React, {useState} from 'react';
import './Navbar.css';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.png';

const Menu = () =>(
                <>
              <p><a href="#home">Home</a></p>  
              <p><a href="#wgpt3">What is GPT3?</a></p> 
              <p><a href="#possibility">open AI</a></p>
              <p><a href="#features">Case Studies</a></p> 
              <p><a href="#blog">Library</a></p>
                </>
)

const Navbar = () => {
  const [ToggleMenu , setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src='' />
          </div>
          <div className='gpt3__navbar-links_container'>
              <Menu />
        </div>
      </div>  
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'> Sign Up</button>
      </div>
        <div className='gpt3__navbar-menu'>
          {ToggleMenu
          ?<RiCloseLine  color="#fff"  size={27} onClick = {() => setToggleMenu(false)} />
          :<RiMenu3Line  color="#fff"  size={27} onClick = {() => setToggleMenu(true)} />
          }
          {ToggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-links'>
                <Menu />
                              <div className='gpt3__navbar-menu_container-links-sign'>
                      <p>Sign in</p>
                      <button type='button'> Sign Up</button>
                    </div>
              </div>
            </div>
            
          )}
        </div>
      </div>
  )
}

export default Navbar 