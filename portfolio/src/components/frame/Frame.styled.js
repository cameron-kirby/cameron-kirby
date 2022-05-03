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

        .menu-list {
            display: flex;
            height: 100%;

            li {
                position: relative;
                border-right: 1px solid #434343;
                overflow: hidden;
                display: flex;
                align-items: stretch;
                border-bottom: none;
                padding: 0;

                p {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 1rem;

                    color: #ffffff;
                }
            }
        }
    }

    .side-nav {
        position:fixed;
        left: 0;
        height: 100%;
        width: 4rem;
        align-items: flex-end;
        justify-content: center;
        box-shadow: none;
        border-right: 1px solid #434343;
        border-top: none;
        background-color: transparent;
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