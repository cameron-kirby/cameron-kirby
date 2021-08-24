import styled from "styled-components"

export const StyledNavigation = styled.nav`
.header {
    position: fixed;
    z-index: 1; /* Sit on top */
    width: 100%;
    padding: 30px 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.headerColor};

    .logo {
        text-decoration: none;
        color: ${props => props.textColor};
        font-weight: 900;
        font-size: 2rem;
    }
}
    
.nav-toggle {
    position: fixed;
    top: 33px;
    right: 55px;
    display: block;
    cursor: pointer;
    width: 1.5rem;
    padding: .8rem;
    z-index: 3;
    /* Animation */
    transform: rotate(0deg);
    transition: .5s ease-in-out;

    span {
        // display: block;
        position: absolute;
        height: 5px;
        width: 100%;
        background: ${props => props.textColor};
        left: 0;
        /* Animation */
        transform: rotate(0deg);
        transition: .25s ease-in-out;
        ${({ navOpen }) => {
            if(!navOpen){
                return `
                    :nth-child(1) {
                        top: 0rem;
                    }

                    :nth-child(2), :nth-child(3) {
                        top: calc(50% - 3px);
                    }

                    :nth-child(4) {
                        top: calc(100% - 6px);
                    }
                `
            } else {
                return `
                    background: var(--black);
                    width: 100%;
                    :nth-child(1) {
                        top: calc(50% - 3px);
                        width: 0%;
                        left: 50%;
                    }

                    :nth-child(2) {
                        top: calc(50% - 3px);
                        transform: rotate(45deg);
                    }

                    :nth-child(3) {
                        top: calc(50% - 3px);
                        transform: rotate(-45deg);
                    }

                    :nth-child(4) {
                        top: calc(50% - 3px);
                        width: 0%;
                        left: 50%;
                    }
                `
            }
        }}
    }
}


.overlay{
    height: 100%;
    width: 50%;
    position: fixed; /* Stay in place */
    z-index: 2; /* Sit on top */
    left: 50%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--offwhite);
    overflow-x: hidden;
    transform: ${({ navOpen }) => navOpen ? 'translateX(0)' : 'translateX(+100%)'};
    transition: transform .7s cubic-bezier(.23,1,.32,1);

    .overlay-content {
        position: relative;
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
                font-size: 3.5rem;
                margin: .3rem 0;
                transition: color .35s cubic-bezier(var(--transition-main), 1);

                :hover {
                    color: var(--black)
                }
            }
        }

        .social-media-items {
            margin-top: 1rem;

            a { 
                color: var(--blue);
                padding: 0 .5rem;
                transition: color .35s cubic-bezier(var(--transition-main), 1);

                :hover {
                    color: var(--black)
                }
                svg {
                    width: 3rem;
                }
            }
        }
    }
}
`