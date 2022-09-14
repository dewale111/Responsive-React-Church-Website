import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Subscribe from '../../components/subscribe/Subscribe';
import CarouselComponent from '../../components/carousel/Carousel';


import './gallery.css';

const Gallery = () => {

    return (
        <>
            <div className="gbody">
                <div className="head">
                    <Navbar />
                </div>
                <div className="Gheader">
                    <div className="inText">
                        Gallery
                    </div>
                    <a className="joinUs" href="#subscribe">
                        <button>Join Us</button>
                    </a>
                </div>
                <CarouselComponent/>
                <Subscribe />
                <Footer />
            </div>
        </>

    )
};

export default Gallery;