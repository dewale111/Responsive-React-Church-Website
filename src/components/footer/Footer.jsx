import "./footer.css";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        
        <ul className="fList1">
          <h1>Worship with us @</h1>
          <span>Ifeloju CICS, banking area,</span>
          <span>Obafemi Awolowo University,</span>
          <span>Ile-Ife, Osun State,</span>
          <span>Nigeria.</span>
        </ul>
        <ul className="fList">
          <h1>Quick Links</h1>
          <li className="fListItem"><a href="/aboutus">About Us</a></li>
          <li className="fListItem"><a href="#t">Join the living force</a></li>
          <li className="fListItem"><a href="#t">Men of Significance</a></li>
          <li className="fListItem"><a href="#t">Women of Worth</a></li>
          <li className="fListItem"><a href="#t">Club Extreme</a></li>
          <li className="fListItem"><a href="#t">Solid Rock Academy</a></li>
        </ul>
        
        <ul className="fList" id="qlink2">
          <li className="fListItem"><a href="#t">Contact Us</a></li>
          <li className="fListItem"><a href="#t">Giving</a></li>
          <li className="fListItem"><a href="#t">Events</a></li>
          <li className="fListItem"><a href="/gallery">Gallery</a></li>
          <li className="fListItem"><a href="#t">Prayer Request</a></li>
          <li className="fListItem"><a href="#t">Messages</a></li>
        </ul>
      </div>
      <div className="fsocial">
        <a href="https://www.facebook.com/lwfoau/" className="facebook">
          <FaFacebookF size={25}/>
        </a>
        <a href="https://www.instagram.com/livingwordoau/" className="instagram">
          <FaInstagram size={25}/>
        </a>
        <a href="https://twitter.com/livingwordoau" className="twitter">
          <FaTwitter size={25}/>
        </a>
        <a href="https://www.youtube.com/channel/UCLI0kZ-vI3ppaDWZo1ay0Bg" className="youtube">
          <FaYoutube size={25}/>
        </a>
      </div>

      <div className="fText">Copyright ©{new Date().getFullYear()} LivingwordOAU.</div>
    </div>
  );
};

export default Footer;
