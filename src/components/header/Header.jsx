import React from 'react'
import "./../header/header.scss"
import "./../../utils.css"
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='header container'>
            <nav>
                <ul className='menu'>
                    <li>
                        <a className='link' href='#about'>About</a>
                    </li>
                    <li>
                        <a className='link' href='#work'>Work</a>
                    </li>
                    <li>
                        <a className='link' href='#contact'>Contact</a>
                    </li>
                    <li className='line'></li>
                    <li className='sun'>
                        <IoSunnySharp />
                        {/* <IoMoonSharp /> */}
                    </li>
                    <li>
                        <a className='resume btn' href='#'>Resume</a>
                    </li>
                </ul>
                <div className="bars"><FaBars /></div>
            </nav>

        </div>
    )
}

export default Header