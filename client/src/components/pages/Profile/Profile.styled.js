import styled from "styled-components"

export const StyledProfile = styled.div`
    #profile-landing {
        width: 100%;
        min-height: 100vh;
        background-color: var(--black);
        padding: 118px 55px 70px;
        .page-links {
            width: 100%;
            padding-bottom: 1.3rem;
            ul {
                padding: 0 0 37px;

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
            }
        }
        .landing-text {
            color: var(--white);
            width: 83.33333%;

            p {
                font-size: 3rem;
                font-weight: 600;
                line-height: 1.1;
                margin-bottom: 1.5em;
            }
        }
    }
`