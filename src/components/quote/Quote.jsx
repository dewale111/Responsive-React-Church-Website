import { useState } from 'react';
import './quote.css'
import { QuoteData } from './QuoteData'
import { FaAngleLeft, FaAngleRight, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import {motion} from 'framer-motion'


const Quote = () => {
    const transition = {type: 'spring', duration: 2}


    const [selected, setSelected] = useState(0);
    const qlength = QuoteData.length;

    const prevQuote = () => {
        selected===0 ? setSelected(qlength-1) : setSelected(selected-1);
    }
    const nextQuote = () => {
        selected===qlength-1 ? setSelected(0) : setSelected(selected+1);
    }


    return (
        <>
            <div className="QuoteContainer">
                <div className="leftQ">
                    <span className="nuggets">Nuggets from our Pastors</span>

                    <span>{<FaQuoteLeft size={30} color={'white'}/>}</span>
                    <motion.span
                    key={selected}
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{...transition, type:'tween'}}
                    exit={{opacity: 0, x: 100}} 
                    className='quote'>{QuoteData[selected].quote}</motion.span>
                    <span>{<FaQuoteRight size={30} color={'white'}/>}</span>
                    <span className="name">
                        <span style={{color: 'white'}}>
                            {QuoteData[selected].name}
                        </span>
                        <span style = {{color: 'purple', fontWeight:"700"}}>{" "}-{QuoteData[selected].position}</span>
                    </span>
                </div>
                <div className="rightQ">
                    <div className="imagefull">
                        <motion.div
                        initial={{opacity: 0, x: -100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{...transition, type:'tween'}}></motion.div>
                        <motion.div 
                        initial={{opacity: 0, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{...transition, type:'tween'}}
                        className="stay"></motion.div>
                        <motion.img 
                        key={selected}
                        initial={{opacity: 0, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{...transition, duration: 1, type: 'just'}}
                        exit={{opacity: 0, x: -100}}
                        src={QuoteData[selected].img} alt="" />
                    </div>
                    <div className="arrow">
                        <motion.span 
                        whileHover={{scale: 1.4}}
                        whileTap={{scale: 0.9}}
                        onClick={prevQuote} className='leftArrow'>{<FaAngleLeft size={40} />}</motion.span>
                        <motion.span 
                        whileHover={{scale: 1.4}}
                        whileTap={{scale: 0.9}}
                        onClick={nextQuote} className='rightArrow'>{<FaAngleRight size={40} />}</motion.span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Quote;