import './describe.css'
import { MdCheckCircleOutline } from 'react-icons/md'


const Describe = () => {
    return (
        <>
            <div className="DescribeContainer">
                <div className='newfull1'>
                <div className="full">
                    <div className="first" id="ease">
                        {<MdCheckCircleOutline
                            size="32px" color='white' />}
                        <span className='descDetails'>We are Young</span>
                        <a href="/aboutus"><button className="btn">About Us</button></a>

                    </div>
                </div>
                </div>
                <div className='newfull2'>
                <div className="full">
                    <div className="second" id="ease">
                        {<MdCheckCircleOutline
                            size="32px" color='white' />}
                        <span className='descDetails'>We are Saved</span>
                        <a href="#subscribe"><button className="btn">Join Us</button></a>

                    </div>
                </div>
                </div>
                <div className="newfull3">
                <div className="full">
                    <div className="third" id="ease">
                        {<MdCheckCircleOutline
                            size="32px" color='white' />}
                        <span className='descDetails'>We are Wordites</span>
                        <a href="/messages"><button className="btn">Listen to Messages</button></a>

                    </div>
                </div>
                </div>
            </div>
        </>
    )
};

export default Describe;