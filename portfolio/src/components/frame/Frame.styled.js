import styled from "styled-components"

export const StyledFrame = styled.div`
    background-color: #282c34;
    min-height: 100vh;

    .top-nav {
        position: fixed;
        z-index: 999;
        height: 4rem;
        width: 100%;
        display: flex;

        background-color: #282c34;
        border-bottom: 1px solid #434343;
        box-shadow: 0 0 1.6rem rgb(0 0 0 / 70%);

        .logo {
            height: 4rem;
            width: 4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.8rem;
            font-weight: 900;

            color: #ffffff;
        }

        .menu {
            display: flex;
            height: 100%;

            a {
                position: relative;
                border-right: 1px solid #434343;
                overflow: hidden;
                display: flex;
                border-bottom: none;
                padding: 0 1rem;
                font-size: 1.2rem;
                font-weight: 500;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ffffff;
                transition: all 0.5s;

                :hover {
                    background-color: red;
                }

                svg {
                    color: #ffffff;
                    width: 1.8rem;
                    padding-right: .2rem;
                }
            }
        }
    }

    .side-nav {
        position: fixed;
        z-index: 1000;
        left: 0;
        height: 100%;
        width: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        border-right: 1px solid #434343;
        border-top: none;
        background-color: transparent;

        .side-item {
            display: flex;
            align-items:center;
            justify-content: center;
            border-top: 1px solid #434343;
            width: 100%;
            padding: .5rem 0rem;
            transition: all 0.5s;

            svg {
                width: 75%;
                color: #ffffff;
            }

            :hover {
                background-color: red;
            }
        }
        
    }

    .content {
        padding: 5rem 1rem 1rem 5rem;

        .heading {
            max-width: 60rem;

            h2 {
                color: #ffffff;
            }

            .heading-break {
                margin: 1rem 0;
                display: block;
                width: 75%;
                height: 3px;
                background-color: #fff;
            }
        }
    }
`