import "./closenav.css"
import { MdCancel } from "react-icons/md";



const Closenav = (props) => {

    

    return (     
      <div className="closeNavContainer"> 
        <div className="closeMMenu">
                {<MdCancel 
                onClick = {() => props.isMobile && props.closeMobileMenu()} 
                size="32px"/>}
        </div>
        <div className="closeNavLinks">
          <a onClick={() =>props.isMobile && props.closeMobileMenu()} className="waw" href="/aboutus">WHO ARE WE?</a>
          <a onClick={() =>props.isMobile && props.closeMobileMenu()} className="cont" href="#subscribe">CONTACT US</a>
          <a onClick={() =>props.isMobile && props.closeMobileMenu()} className="gall" href="/gallery">GALLERY</a>
          <a onClick={() =>props.isMobile && props.closeMobileMenu()} className="jlf" href="#cursor">MESSAGES</a>
          <a onClick={() =>props.isMobile && props.closeMobileMenu()} className="prq" href="#cursor">PRAYER REQUESTS</a>
          <a onClick={() =>props.isMobile && props.closeMobileMenu()} className="jlf" href="#cursor">JOIN THE LIVING FORCE</a>
        </div>
        
      </div>
    )
  };

  export default Closenav;