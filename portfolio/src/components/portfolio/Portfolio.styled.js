import styled from "styled-components"

export const StyledPortfolio = styled.div`
    .item {
        width: 49%;
        .item-photo {

            img {
                max-width: 100%;
                object-fit: cover;
                border: 3px solid #fff;
            }
        }

        .item-content {

            .item-links {
                display: flex;
                justify-content: space-evenly;
                position: relative;
                margin-bottom: 0.5rem;

                a {
                    text-decoration: none;
                    color: #ffffff;
                    font-size: 1rem;
                    padding: .5rem 1rem;
                    border: 3px solid #fff;
                    width: 50%;
                    text-align: center;
                    transition: all 0.2s ease;

                    :hover {
                        background: #ffffff;
                        color: #282c34;
                    }
                }
            }
        
            .item-title {
                h2 {
                    color: #ffffff;
                    font-size: 2rem;
                    font-weight: 600;
                    margin-bottom: 0.25rem;
                    text-transform: uppercase;
                }
            }

            .item-body {
                display: flex;
                color: #ffffff;

                .item-body-text {
                    width: 80%;
                    font-size: 1.4rem;
                }

                .item-body-icons {
                    width: 20%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    svg {
                        width: 40%;
                    }
                }
            }
        }
        
    }
`