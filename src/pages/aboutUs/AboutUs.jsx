import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './aboutUs.css'
import Subscribe from '../../components/subscribe/Subscribe';

const AboutUs = () => {
    return (
        <>
            <div className="navvv">
                <Navbar />
            </div>
            <div className="Aheader">
                <div className="inText">
                    About us
                </div>
                <a className="joinUs" href="#subscribe">
                    <button>Join Us</button>
                </a>
            </div>
            <div className="other">
                <Subscribe />
                <Footer />
            </div>
        </>
    )
};

export default AboutUs;