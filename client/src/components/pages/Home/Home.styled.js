import styled from "styled-components"
import section1bg from "../../../img/homebg.jpg"

export const StyledHome = styled.div`
    #landing {
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

    #section-2 {
        width: 100%;
        height: 20vh;
        background-color: var(--orange);

        .section-banner { 
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--black);
            
            .banner-text{
                font-weight: 600;
                font-size: 2rem;
            }

            .icon {
                margin: 1rem;
                width: 3rem;
            }
        }
    }

    
`