import React, { useState } from 'react'
import "./../header/header.scss"
import "./../../utils.css"
import { Link } from "react-scroll"
import { FaBars } from "react-icons/fa6";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div id="header" className=' container'>
            <nav>
                <div className="menu">
                    <Link activeClass='active' to='header' spy={true} smooth={true} offset={-10000} duration={500} className="linkItems">Home</Link>
                    <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="linkItems">About</Link>
                    <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className="linkItems">Work</Link>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="linkItems">Contact</Link>
                    <div className='line'></div>
                    <div className="resume btn">Resume</div>
                </div>
                <div className="bars mobMenu"><FaBars onClick={() => setShowMenu(!showMenu)} />
                    <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                        <Link activeClass='active' to='header' spy={true} smooth={true} offset={-10000} duration={500} className="navLinkItems" onClick={() => setShowMenu(false)}>HomePage</Link>
                        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="navLinkItems" onClick={() => setShowMenu(false)}>About</Link>
                        <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className="navLinkItems" onClick={() => setShowMenu(false)}>Work</Link>
                        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="navLinkItems" onClick={() => setShowMenu(false)}>Contact</Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header