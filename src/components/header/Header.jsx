import Navbar from "../navbar/Navbar";
import "./header.css";
import {motion} from 'framer-motion'

const Header = () => {

    const transition = {type: 'spring', duration: 1};



    return (
        <>
        <Navbar/>
        <div
        className="headerContainer">
            <motion.div 
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{...transition, type:'tween'}}
            className="inTextContainer">
                Raising Covenant giants
                <span>For over 25 years...</span>
            </motion.div>
            <a href="#subscribe">
                <button>Join Us</button>
            </a>

        </div>
        </>
    )
};

export default Header;