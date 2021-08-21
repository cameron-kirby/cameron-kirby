import styled from "styled-components"

export const StyledWork = styled.div`
    .filters {
        padding-top: 115px; // pad out navbar
        width: 100%;

        ul {
            padding: 0 55px 37px;

            li {
                display: inline-block;
                padding-right: 30px;
                vertical-align: top;

                button {
                    background: transparent;
                    border: 0;
                    padding: 0;
                    color: var(--gray);
                    font-size: 1.5rem;
                    font-weight: 600;
                    cursor: pointer;
                }
            }

            .is-active button{
                color: var(--black)
            }
        }
    }
    .work {
        padding: 0 55px;
        .masonry{
            position: relative;
            margin-left: -55px;
            .work-item {
                background-color: var(---gray);
                width: 50%;
                padding-left: 55px;

                .work-item-media {
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .work-item-body {
                    h3 {
                        padding: 1rem 0;
                        font-size: 1.3rem;
                        font-weight: 300;
                        text-transform: uppercase;
                    }
                    p {
                        padding-bottom: 2rem;
                        font-size: 1.7rem;
                        font-weight: 600;
                    }
                }
            }
        }
    }
`