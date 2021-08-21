import React from "react"
import { Link, useLocation} from "react-router-dom"
import { StyledNavigation } from './Navigation.styled'
import { GithubSquare, Linkedin } from '@styled-icons/fa-brands'


const Navigation = ({ navOpen, setNavOpen }) => {
    const handleMenuToggle = () => {
        setNavOpen(prevNavOpen => !prevNavOpen)
    }

    return (
        <StyledNavigation navOpen={navOpen}>
            <div className="header">
                <Link to="/" className="logo" onClick={navOpen ? handleMenuToggle:undefined}>CAMERON KIRBY</Link>
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
                        <Link to="/work" onClick={handleMenuToggle} className={(useLocation().pathname==="/work") ? "isActive": ""}>Work</Link>
                        <Link to="/profile" onClick={handleMenuToggle} className={(useLocation().pathname==="/profile") ? "isActive": ""}>Profile</Link>
                        <Link to="/journal" onClick={handleMenuToggle} className={(useLocation().pathname==="/journal") ? "isActive": ""}>Journal</Link>
                        <Link to="/contact" onClick={handleMenuToggle} className={(useLocation().pathname==="/contact") ? "isActive": ""}>Contact</Link>
                    </div>
                    <div className="social-media-items">
                        <a href="https://github.com/cameron-kirby" target="_blank" rel="noreferrer">
                            <GithubSquare/>
                        </a>
                        <a href="https://www.linkedin.com/in/kameroncirby/" target="_blank" rel="noreferrer">
                            <Linkedin/>
                        </a>
                    </div>
                </div>
            </div>
        </StyledNavigation>
    );
}

export default Navigation;