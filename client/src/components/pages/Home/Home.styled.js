import styled from "styled-components"
import section1bg from "../../../img/homebg.jpg"

export const StyledHome = styled.div`
    #home-landing {
        width: 100%;
        height: calc(100vh - 113px);

        .hero {
            position: relative;
            width: 100%;
            height: calc(100vh - 113px);
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${section1bg});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;

            :before {
                position: absolute;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                background-color: rgba(0,0,0,0.25);
            }
        }

        .centered-section {
            display: flex;
            flex-direction: column;
            color: var(--white);

            @media (max-width:481px)  { 
                /* smartphones, iPhone, portrait 480x320 phones */ 
                text-align: center;
            }

            h1 {
                font-weight: 600;
                span{
                    font-weight: 900;
                    color: var(--orange);

                    @media (max-width:481px)  { 
                        /* smartphones, iPhone, portrait 480x320 phones */ 
                        font-size: 4rem;
                    }
                }
            }
            h2 {
                font-weight: 300;
            }
        }
    }

    #home-recentwork {
        background-color: var(--white);

        .section-heading { 
            padding: 2rem var(--margin-width);
            border-bottom: 1px solid rgba(159,174,176,.35);
            display: flex;
            align-items: center;
            color: var(--black);

            @media (max-width:481px)  { 
                /* smartphones, iPhone, portrait 480x320 phones */ 
                padding: 2rem var(--mobile-margin-width);
            }

            .icon {
                margin-right: 1rem;
                width: 3rem;
            }
        }

        .work-row {
            padding: 3rem var(--margin-width);

            @media (max-width:481px)  { 
                /* smartphones, iPhone, portrait 480x320 phones */ 
                margin-left: calc(-1 * var(--mobile-margin-width));
                padding: 3rem var(--mobile-margin-width);
            }

            .swiper-button-next, .swiper-button-prev {
                color: var(--black);
                top: 92%;
            }

            .swiper-pagination-bullet-active {
                background: var(--black);
            }

            .swiper-pagination-bullets {
                bottom: 25px;
            }

            .swiper-slide {
                width: auto;
            }

            .work-item {

                .work-item-media {
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                .work-item-body {
                    h4 {
                        padding: 1rem 0;
                        font-size: 1.3rem;
                        font-weight: 300;
                        text-transform: uppercase;
                    }

                    p{
                        padding-bottom: 7rem;
                        font-size: 1.2rem;
                        font-weight: 600;
                    }
                }
            }
        }

        .work-sectionfooter {
            padding: 2rem var(--margin-width);
            background-color: var(--black);
            color: var(--white);

            @media (max-width:481px)  { 
                /* smartphones, iPhone, portrait 480x320 phones */ 
                padding: 2rem var(--mobile-margin-width);
            }

            a {
                color: white;
                text-decoration: none;
            }

            .footer-row {
                display: flex;
                justify-content: space-between;

                .icon {
                    width: 3rem;
                }
            }
        }
    }

    
`