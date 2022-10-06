import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import './navbar.css'

const Navbar = () => {
  return (
    <>
    
    <nav id='navbar'>
      <div className="navImg">
        <a href="/">
          <img src="https://pbs.twimg.com/media/FK0tRN_XIAAqiKk.jpg" alt="" />
        </a>
      </div>

      <div className="NavItems">
          <div className="MobileNav">
            <MobileNav />
          </div>
          <div className="DesktopNav">
            <DesktopNav />
          </div>
      </div>
    </nav>
  </>
  )
};

export default Navbar;