import './subscribe.css'

const Subscribe = () => {
    return (
        <>

            <div id='subscribe' className="mail">
                <h1 className="mailTitle">Subscribe to Love!</h1>
                <span className="mailDesc">Tired of religion? Sign up to receive our newsletters</span>
                <div className="mailInputContainer">
                    <input type="name" placeholder="Your Name" className="name" />
                    <input type="email" placeholder="Your Email" />
                    <button>Subscribe</button>
                </div>
            </div>

        </>
    )
};

export default Subscribe;