import styled from "styled-components"
import section1bg from "../../../img/homebg.jpg"

export const StyledHome = styled.div`
    #home-landing {
        width: 100%;
        height: 99vh;

        .hero {
            position: relative;
            width: 100%;
            height: 99vh;
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

            h1 {
                font-weight: 600;
                span{
                    font-weight: 900;
                    color: var(--orange)
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
            padding: 2rem 55px 2rem;
            border-bottom: 1px solid rgba(159,174,176,.35);
            display: flex;
            align-items: center;
            color: var(--black);

            .icon {
                margin-right: 1rem;
                width: 3rem;
            }
        }

        .work-row {
            margin-left: -55px;
            padding: 3rem 55px;
            display: flex;
            justify-content: space-between;

            .work-item {
                width: 25%;
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
                    h4 {
                        padding: 1rem 0;
                        font-size: 1.3rem;
                        font-weight: 300;
                        text-transform: uppercase;
                    }

                    p{
                        padding-bottom: 1rem;
                        font-size: 1.2rem;
                        font-weight: 600;
                    }
                }
            }
        }

        .work-sectionfooter {
            padding: 2rem 55px 2rem;
            border-bottom: 1px solid rgba(159,174,176,.35);
            background-color: var(--black);
            color: var(--white);

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