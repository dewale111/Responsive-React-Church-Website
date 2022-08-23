import Closenav from "./Closenav"
import {CgMenu} from "react-icons/cg"
import "./mobileNav.css"
import {useState} from 'react'


const MobileNav = () => {

    const [open, setOpen] = useState(false);

    const closeMobileMenu = () => setOpen(false);

    return (
      <>
        <div className="mobileContainer">
            <div className="menu">
                {!open && <CgMenu 
                onClick = {() => setOpen(!open)} 
                size="30px"/>}
            </div>
            {open && <Closenav isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </div>
      </>
    );
  };
  
  export default MobileNav;