import './workforce.css'


const Workforce = () => {
    return (
        <>
            <div id='wforce' className="WorkforceContainer">
                <div className="intro">
                    <h1>Are you ready to make IMPACT?</h1>
                    <p>Here's the place for you, Join any of the following directorates as you kickstart your journey to becoming a person of positive influence.</p>
                </div>
                <div className="wrap">
                <div className="row">
                    <div className="Wfull">
                        <div className="unitImage" id='outreach'>

                        </div>
                        <div className="unit">
                            <span>Outreach</span>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="Wfull">
                        <div className="unitImage" id='worship'>

                        </div>
                        <div className="unit">
                            <span>Worship</span>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="Wfull">
                        <div className="unitImage" id='missions'>

                        </div>
                        <div className="unit">
                            <span>Missions</span>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="Wfull">
                        <div className="unitImage" id='admin'>

                        </div>
                        <div className="unit">
                            <span>Administration</span>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="Wfull">
                        <div className="unitImage" id='training'>

                        </div>
                        <div className="unit">
                            <span>Training</span>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="Wfull">
                        <div className="unitImage" id='membership'>

                        </div>
                        <div className="unit">
                            <span>Membership</span>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
};

export default Workforce;