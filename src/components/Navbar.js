import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import image_logo from '../image_logo.png';
import './Navbar.css';
import {Button} from './Button';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton = ()=> {
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton()
    },[]);

    window.addEventListener('resize', showButton);

    return(
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <a href="http://alatoo.edu.kg/" target={"_blank"} className="navbar-logo" onClick={closeMobileMenu}>
                            AIU<i className="navbar-brand mr-auto" href="#"><img src={image_logo} width="60" height="60" /></i>
                            <div className="full-name">
                                <h5>Ala-Too InternationL University</h5>
                            </div>
                    </a>
                    
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a href="http://alatoo.edu.kg/view/public/gallery/list.xhtml" target={"_blank"} to='/pictures' className='nav-links' onClick={closeMobileMenu}>
                                Pictures
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="http://alatoo.edu.kg/view/public/pages/contacts.xhtml;jsessionid=F3JVR0yuKu5qDmVeGGmmR9s7IXdFLS1A6AkIDYMv.unknown-host" target={"_blank"} to='/contacts' className='nav-links' onClick={closeMobileMenu}>
                                Contacts
                            </a>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/bighit' className='nav-links' onClick={closeMobileMenu}>
                                BigHit
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                                AIU
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>AIU</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar