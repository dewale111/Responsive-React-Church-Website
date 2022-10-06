import './sra.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/subscribe/Subscribe';

const Sra = () => {
    return(
        <>
        <div className="mcontainer">
            <div className="navv">
                <Navbar/>
            </div>
            This page is currently under construction, please bear with us.
            <Subscribe/>
            <Footer/>
        </div>
        </>
    )
};

export default Sra;