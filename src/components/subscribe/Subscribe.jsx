import './subscribe.css'

const Subscribe = () => {
    return (
        <>

            <div id='subscribe' className="mail">
                <h1 className="mailTitle">Subscribe to Love!</h1>
                <span className="mailDesc">Tired of religion? Sign up to receive love updates</span>
                <div className="mailInputContainer">
                    <input type="text" placeholder="Your Email" />
                    <button>Subscribe</button>
                </div>
            </div>

        </>
    )
};

export default Subscribe;