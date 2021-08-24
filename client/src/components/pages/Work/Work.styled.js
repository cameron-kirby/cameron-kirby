import styled from "styled-components"

export const StyledWork = styled.div`
    .filters {
        padding-top: 115px; // pad out navbar
        width: 100%;

        ul {
            padding: 0 var(--margin-width) 37px;

            @media (max-width:481px)  { 
                /* smartphones, iPhone, portrait 480x320 phones */ 
                padding: 0 var(--mobile-margin-width) 37px;
            }

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
        padding: 0 var(--margin-width);

        @media (max-width:481px)  { 
            /* smartphones, iPhone, portrait 480x320 phones */ 
            padding: 0;
        }

        .masonry{
            position: relative;
            margin-left: calc(-1 * var(--margin-width));

            @media (max-width:481px)  { 
                /* smartphones, iPhone, portrait 480x320 phones */ 
                margin-left: 0;
            }

            .work-item {
                background-color: var(---gray);
                width: 50%;
                padding-left: 55px;

                @media (max-width:481px)  { 
                    /* smartphones, iPhone, portrait 480x320 phones */ 
                    width: 100%;
                    padding-left:0;
                }

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

                    @media (max-width:481px)  { 
                        /* smartphones, iPhone, portrait 480x320 phones */ 
                        h3 {
                            padding: 1rem 1rem;
                        }
                        p {
                            padding: 0rem 1rem 1rem;
                        }
                    }
                }
            }
        }
    }
`