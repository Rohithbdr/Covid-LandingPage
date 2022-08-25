import classes from './Navbar.module.css'
import { useState } from 'react'
import Logo from '../Logo/Logo'

const Navbar = () => {
  const [navbarOpened, toggleNavbar] = useState(false);

  return (    
    <>    
    <nav className={classes.navParent}>
      {navbarOpened && <button onClick={() => {console.log('test'); toggleNavbar(false)}} className={classes.navBackdrop}></button>}
      <div className={`${classes.navContainer} mx-auto flex justify-between items-center`}>
        <Logo/>
        <button onClick={() => toggleNavbar(true)} className={`md:hidden ${classes.ham}`}>
          <div>
          </div>
          <div>          
          </div>
          <div>          
          </div>
        </button>
        <div className={`${classes.navOptions} ${navbarOpened ? classes.navActive : ''}`}>
          <a onClick={() => toggleNavbar(false)} href="#overview" className={classes.active}>
            Overview
          </a>
          <a onClick={() => toggleNavbar(false)} href="#contagion">
            Contagion
          </a>
          <a onClick={() => toggleNavbar(false)} href="#symptoms">
            Symptoms
          </a>
          <a onClick={() => toggleNavbar(false)} href="#prevention">
            Prevention
          </a>
          <button className={classes.contactBtn}>
            Contact 
          </button>
          <button onClick={() => toggleNavbar(false)}
                  className={`${classes.closeBtn} md:hidden`}>
            <span>x</span>
          </button>
        </div>    
      </div>
    </nav>
    </>
  )
}

export default Navbar