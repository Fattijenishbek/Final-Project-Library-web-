import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
import Video from './videos/video-1.mp4';
import FirebaseData from './FirebaseData';


function HeroSection(){
    return(
        <div className='hero-container'>
            {/* <video autoPlay loop muted > 
                <source src={Video} type="video/mp4" />
            </video> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>LET'S ENJOY!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>TO UNIVERSE</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH VIDEO <i className='far fa-play-circle' /></Button>
            </div>
            <FirebaseData />
        </div>
    )
}

export default HeroSection