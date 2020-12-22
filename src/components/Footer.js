import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'
import image_logo from '../image_logo.png';


function Footer (){
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Want to get Book Recommendations?
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe anytime.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Send</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>About Company</Link>
                        <Link to='/'>Investors</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>About Company</Link>
                        <Link to='/'>Investors</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>About Company</Link>
                        <Link to='/'>Investors</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>About Company</Link>
                        <Link to='/'>Investors</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                        AIU <i href="#"><img src={image_logo} width="15" height="15" /></i>
                        </Link>
                    </div>
                </div>
            </section>
            <div className='social-icons'>
                <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                    <i className='fab fa-facebook-f'/>
                </Link>
                <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                    <i className='fab fa-instagram'/>
                </Link>
                <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                    <i className='fab fa-twitter'/>
                </Link>
                <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='LinkedIn'>
                    <i className='fab fa-linkedin'/>
                </Link>
            </div>
            <small className='website-rights'>Ala-Too International Unniversity  © 2020</small>
        </div>
    );
}

export default Footer;