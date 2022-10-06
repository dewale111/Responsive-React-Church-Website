import React from 'react'
import './clubx.css'
import Navbar from '../../components/navbar/Navbar'
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

const Clubx = () => {
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

export default Clubx;