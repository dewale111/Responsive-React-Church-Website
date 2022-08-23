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
          <li className="fListItem">About Us</li>
          <li className="fListItem">Join the living force</li>
          <li className="fListItem">Men of Significance</li>
          <li className="fListItem">Women of Worth</li>
          <li className="fListItem">Club Extreme</li>
          <li className="fListItem">Solid Rock Academy</li>
        </ul>
        
        <ul className="fList" id="qlink2">
          <li className="fListItem">Contact Us</li>
          <li className="fListItem">Giving</li>
          <li className="fListItem">Events</li>
          <li className="fListItem">Gallery</li>
          <li className="fListItem">Prayer Request</li>
          <li className="fListItem">Messages</li>
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
