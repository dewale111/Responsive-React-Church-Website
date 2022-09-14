import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './aboutUs.css'
import Subscribe from '../../components/subscribe/Subscribe';
import YoutubeEmbed from '../../components/YouTubeEmbed/YouTubeEmbed';


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
                <div className="we">
                    <YoutubeEmbed embedId="WZ2DoaTXXPs" />
                </div>
                <div className="mv">
                    <div className="mission">
                        <h1><span style={{color: 'black'}}>Our</span> Vision</h1>
                        <p>It is our vision to raise covenant giants.</p>
                    </div>
                    <div className="vision">
                        
                        <p>It is our mission to transform the world system to the word of God system.</p>
                        <h1><span style={{color: 'black'}}>Our</span> Mission</h1>
                    </div>
                </div>
                <div className="core">
                    <h1>Our <span style={{color: 'purple'}}>Core Values</span></h1>
                    <div className="values">
                        <div className='val'>Honor
                            <div className="overlay">
                                <div className="valtext">Here's the Honour text.</div>
                            </div>
                        </div>
                        <div className='val'>Generousity
                            <div className="overlay">
                                <div className="valtext">Here's the Generousity text.</div>
                            </div>
                        </div>
                        <div className='val'>Wisdom
                            <div className="overlay">
                                <div className="valtext">Here's the Wisdom text.</div>
                            </div>
                        </div>
                        <div className='val'>Excellence
                            <div className="overlay">
                                <div className="valtext">Here's the Excellence text.</div>
                            </div>
                        </div>
                        <div className='val'>Supernatural
                            <div className="overlay">
                                <div className="valtext">Here's the Supernatural text.</div>
                            </div>
                        </div>
                        <div className='val'>Transformation
                            <div className="overlay">
                                <div className="valtext">Here's the Transformation text.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe />
                <Footer />
            </div>
        </>
    )
};

export default AboutUs;