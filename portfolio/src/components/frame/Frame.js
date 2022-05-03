import React from "react"
import { StyledFrame } from './Frame.styled'
import Portfolio from '../portfolio'
// icons
import { LinkedinSquare, Github } from '@styled-icons/boxicons-logos'
import { DocumentText } from '@styled-icons/heroicons-solid'

const Frame = () => {

    return (
        <StyledFrame>
            <nav className='top-nav'>
                <div className='logo'>CK</div>
                <div className="menu">
                        <a>
                            <DocumentText />
                            CV
                        </a>
                        <a>CONTACT</a>
                </div>
            </nav>
            <nav className='side-nav'>
                <a href='https://github.com/cameron-kirby' rel='noreferrer' target='_blank' className='side-item'>
                        <Github />
                </a>
                <a href='https://www.linkedin.com/in/kameroncirby/' rel='noreferrer' target='_blank' className='side-item'>
                    <LinkedinSquare />
                </a>
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