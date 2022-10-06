import React from 'react'
import './mos.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/subscribe/Subscribe';

const Mos = () => {
    return(
        <>
        <div className="ccontainer">
            <div className="navv">
                <Navbar/>
            </div>
            This Page is currently under construction, please bear with us.
            <Subscribe/>
            <Footer/>
        </div>
        </>
    )
};

export default Mos;