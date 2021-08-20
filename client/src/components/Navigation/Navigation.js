import React from "react"
import { Link } from "react-router-dom";
import { StyledNavigation } from './Navigation.styled'
import { GithubSquare, Linkedin } from '@styled-icons/fa-brands'


const Navigation = ({ navOpen, setNavOpen }) => {

    const handleMenuToggle = () => {
        setNavOpen(prevNavOpen => !prevNavOpen)
        
    }

    return (
        <StyledNavigation navOpen={navOpen}>
            <div className="header">
                <Link to="/" className="logo">CAMERON KIRBY</Link>
                <div className="nav-toggle" onClick={handleMenuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="overlay">
                <div className="overlay-content">
                    <div className="menu-items">
                        <Link to="/work">Work</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/journal">Journal</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="social-media-items">
                        <a href="https://github.com/cameron-kirby" target="_blank">
                            <GithubSquare/>
                        </a>
                        <a href="https://www.linkedin.com/in/kameroncirby/" target="_blank">
                            <Linkedin/>
                        </a>
                    </div>
                </div>
            </div>
        </StyledNavigation>
    );
}

export default Navigation;