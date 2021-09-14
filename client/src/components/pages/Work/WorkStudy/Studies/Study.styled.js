import styled from "styled-components"


export const StyledStudy = styled.div`

    #landing {
        width: 100%;
        background-color: var(--black);

        .title-spacer {
            width: 100%;
            height: 100vh;
            margin-bottom: 120px;
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.title_bg});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }

        .title-sticky {
            position: sticky;
            left: 35px;
            bottom: 50px;
            z-index: 2;
            color: var(--white);
            width: 80%;
            padding-left: 8.33333%;

            span {
                font-weight: 100;
                font-size: 1rem;
                margin-bottom: 1rem;
            }

            h3 {
                font-size: 3rem;
                font-weight: 600;
                line-height: 1.1;
            }
        }
    }

    #description {
        width: 100%;
        background-color: var(--black);
        padding: 2rem var(--margin-width) 120px;

        .desc-row {
            display: flex;
            justify-content: space-between;

            .desc-column {
                width: 33.3333%;

                :first-child {
                    width: 41.66667%;
                    margin-right: 8.33333%;
                    margin-left: 8.33333%;

                    p {
                        font-size: 1.3rem;
                        line-height: 1.2em;
                        margin-bottom: 1em;
                    }
                }

                :nth-child(2) {
                    width: 16.6667%;

                    
                }

                :nth-child(3) {
                    width: 25%;
                }

                h4 {
                    color: var(--white);
                    font-weight: 100;
                    font-size: 1rem;
                    margin-bottom: 1rem;
                }

                ul {
                    color: var(--white);
                    font-weight: 600;

                    li {
                        line-height: 1.3em;
                    }
                }

                p {
                    color: var(--white)
                }
            }
        }
    }

    #screenshots {
        width: 100%;
        background-color: var(--white);
        padding: 4rem var(--margin-width) 4rem;

        .screenshot-row {
            @media (max-width:481px)  { 
                /* smartphones, iPhone, portrait 480x320 phones */ 
                margin-left: calc(-1 * var(--mobile-margin-width));
                padding: 3rem var(--mobile-margin-width);
            }

            .swiper-button-next, .swiper-button-prev {
                color: var(--black);
            }

            .swiper-pagination-bullet-active {
                background: var(--black);
            }

            .swiper-pagination-bullets {
                bottom: 10px;
            }

            .swiper-slide {
                width: auto;
            }
        }
    }

`