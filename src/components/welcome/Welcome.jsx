import { FaFacebook, FaInstagram, FaQuoteLeft, FaQuoteRight, FaYoutube } from 'react-icons/fa';
import { BsTwitter } from "react-icons/bs";
import './welcome.css'
import {motion} from 'framer-motion'

const Welcome = () => {

    const transition = {type: 'spring', duration:3};

    return (
        <div className="welcomecontainer">
            <div className="welcometitle">Welcome Home!</div>
            <div className="wbody">
                <span>{<FaQuoteLeft size={30} color={'purple'} />}</span>
                <div className="welcomebody">This is Livingword fellowship, we have a mandate by God to raise impactful individuals in today's generation and generations to come and we have been committed to this mission for over 25 years. Join Us today and see the Giant in you find expression. We also encourage you to engage our social media via the following links</div>
                <span>{<FaQuoteRight size={30} color={'purple'} />}</span>
            </div>
            <motion.div 
            transition={transition}
            whileInView={{right: "0rem"}}
            initial={{left: "0rem"}}

            className="welcomesocial">
                <a href="https://www.facebook.com/lwfoau/" className="icon">
                    <FaFacebook size={28} style={{color: '#3b5998'}}/>
                </a>
                <a href="https://www.instagram.com/livingwordoau/" className="icon">
                    <FaInstagram size={28} style={{color: '#f20a5f'}}/>
                </a>
                <a href="https://twitter.com/livingwordoau" className="icon">
                    <BsTwitter size={28} style={{color: '#1DA1F2'}}/>
                </a>
                <a href="https://www.youtube.com/channel/UCLI0kZ-vI3ppaDWZo1ay0Bg" className="icon">
                    <FaYoutube size={28} style={{color: 'red'}}/>
                </a>
            </motion.div>
        </div>
    )
};

export default Welcome;