import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import { Menu, X } from "@styled-icons/boxicons-regular"

const StyledNavigation = styled.nav`

    .header {
        position: sticky;
        z-index: 2; /* Sit on top */
        width: 100%;
        padding: 30px 55px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            text-decoration: none;
            color: var(--black);
            font-weight: 900;
            font-size: 3rem;
        }

        .nav-toggle {
            border: none;
            background: none;
            cursor: pointer;
            width: 2rem;
            padding: 0;

            position: relative;
            cursor: pointer;
            /* Animation */
            transform: rotate(0deg);
            transition: .5s ease-in-out;

            span {
                display: block;
                position: absolute;
                height: 6px;
                width: 100%;
                background: var(--black);
                opacity: 1;
                left: 0;
                /* Animation */
                transform: rotate(0deg);
                transition: .25s ease-in-out;
                ${({ navOpen }) => {
                    if(!navOpen){
                        return `
                            :nth-child(1) {
                                top: -.75rem;
                            }

                            :nth-child(2), :nth-child(3) {
                                top: 0rem;
                            }

                            :nth-child(4) {
                                top: .75rem;
                            }
                        `
                    } else {
                        return `
                            width: 100%;
                            :nth-child(1) {
                                top: 0rem;
                                width: 0%;
                                left: 50%;
                            }

                            :nth-child(2) {
                                top: 0rem;
                                transform: rotate(45deg);
                            }

                            :nth-child(3) {
                                top: 0rem;
                                transform: rotate(-45deg);
                            }

                            :nth-child(4) {
                                top: 0rem;
                                width: 0%;
                                left: 50%;
                            }
                        `
                    }
                }}
            }
        }
    }

    .overlay{
        height: 100%;
        width: 50%;
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 50%;
        top: 0;
        background-color: var(--offwhite);
        overflow-x: hidden;
        transform: ${({ navOpen }) => navOpen ? 'translateX(0)' : 'translateX(+100%)'};
        transition: transform .35s cubic-bezier(var(--transition-main), 1);

        .overlay-content {
            position: relative;
            top: 25%; /* 25% from the top */
            width: 100%; /* 100% width */
            text-align: center; /* Centered text/links */
            margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */

            .menu-items {
                display: flex;
                flex-direction: column;

                a {
                    text-decoration: none;
                    color: var(--blue);
                    font-weight: 700;
                    font-size: 2.5rem;
                    margin: .5rem 0;
                    transition: color .35s cubic-bezier(var(--transition-main), 1);

                    :hover {
                        color: var(--black)
                    }
                }
            }
        }
    }
`

const Navigation = ({ navOpen, setNavOpen }) => {

    const handleMenuToggle = () => {
        setNavOpen(prevNavOpen => !prevNavOpen)
        
    }

    return (
        <StyledNavigation navOpen={navOpen}>
            <div className="header">
                <Link to="/" className="logo">CAMERON KIRBY</Link>
                <button className="nav-toggle" onClick={handleMenuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="overlay">
                <div className="overlay-content">
                    <div className="menu-items">
                        <Link to="/work">Work</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/journal">Journal</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </StyledNavigation>
    );
}

export default Navigation;