import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='Hero-MainText'>
      <h1 className='Hero-text1'>WORK WITH </h1>
      <h1 className='Hero-text2'>PROFESSIONALS </h1>
      <h4 className='Hero-subtext'>At Fittness Gym, we connect you with top-notch professionals who can help bring your vision to life.</h4>
      </div>
      <div className='Hero-buttons'>
      <Link to="/start" className='start'>Start Now</Link>
         <button className='learnMore'>learn more</button> 
      </div>
      
      
    </div>
  )
}
export default Hero