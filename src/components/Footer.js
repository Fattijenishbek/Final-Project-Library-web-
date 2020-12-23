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
                        <Link to='/sign-up'>About University</Link>
                        <Link to='/'>Faculty</Link>
                        <Link to='/'>Admission</Link>
                        <Link to='/'>Help</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2 id="contacts">Contact Us</h2>
                        <Link to='/sign-up'>Email</Link>
                        <Link to='/'>Call</Link>
                        <Link to='/'>Address</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/sign-up'>Our Students</Link>
                        <Link to='/'>Campus</Link>
                        <Link to='/'>Students' works</Link>
                        <Link to='/'>Activities</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>Official page</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Twitter</Link>
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
                <a href="https://web.facebook.com/ALATOOinternationalUniversity1996/?_rdc=1&_rdr" 
                className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                    <i className='fab fa-facebook-f'/>
                </a>
                <a href="https://www.instagram.com/alatoo.edu.kg/?hl=en"
                className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                    <i className='fab fa-instagram'/>
                </a>
                <a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                    <i className='fab fa-twitter'/>
                </a>
                <a href="https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react"
                className='social-icon-link linkedin' to='/' target='_blank' aria-label='LinkedIn'>
                    <i className='fab fa-linkedin'/>
                </a>
            </div>
            <small className='website-rights'>Ala-Too International University  © 2020</small>
        </div>
    );
}

export default Footer;