import React from "react"
import { StyledFrame } from './Frame.styled'
import Portfolio from '../portfolio'

const Frame = () => {

    return (
        <StyledFrame>
            <nav className='top-nav'>
                <div className='logo'>CK</div>
                <ul className="menu-list">
                    <li>
                        <p>CV</p>
                    </li>
                    <li>
                        <p>CONTACT</p>
                    </li>
                </ul>
            </nav>
            <nav className='side-nav'>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
            <div className='content'>
                <div className='heading'>
                    <h2>CAMERON KIRBY,</h2>
                    <h2>FULLSTACK WEB DEVELOPER</h2>
                    <h2>AND UI/UX DESIGNER</h2>
                    <div className="heading-break"></div>
                </div>
                <Portfolio />
            </div>
        </StyledFrame>
    );
}

export default Frame;