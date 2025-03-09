import React from 'react'
import about from '../assets/About.jpg'
import butt1 from '../assets/button1.jpg'
import butt2 from '../assets/button2.jpg'

const AboutOurGym = () => {
  return (
    <div className='About'>
        <h1 className='about-text'>ABOUT OUR GYM</h1>
        <img src={about} className='about-image'></img>
        <div className='About-desc'>
            <h3 className='about-subtext'>Welcome to Fitness Gym, your go-to platform for achieving your health and fitness goals. Whether you're a beginner or a seasoned athlete, our app offers personalized programs, expert guidance, and a supportive community to help you every step of the way.</h3>
            <button className='years'>10 years of experience</button>
        </div>
        <div className='About-buttons'>
            <img src={butt1}className='butt1'></img>
            <img src={butt2}className='butt2'></img>
            <div className='button-text' >
                <div className='butt-main-text'>
                <h4 className='butt-text-blonde'>We provide  </h4>
                <h4 className='butt-text-noblonde'>  complete assesment</h4>
                </div>
                <h6 className='butt-text-sub'>Subscribe from the page to get 10% dicount,WHAT ARE YOU WAITING FOR?</h6>
            </div>
        </div>
        <div button ></div>
    </div>
  )
}

export default AboutOurGym 
