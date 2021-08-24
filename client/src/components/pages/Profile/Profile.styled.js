import styled from "styled-components"

export const StyledProfile = styled.div`
    #profile-landing {
        width: 100%;
        min-height: 100vh;
        background-color: var(--black);
        padding: 118px var(--margin-width) 70px;

        @media (max-width:481px)  { 
            /* smartphones, iPhone, portrait 480x320 phones */ 
            padding: 118px var(--mobile-margin-width) 70px;
        }

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

    #profile-blurbs {
        .section-heading {
            padding: 2rem var(--margin-width);
            border-bottom: 1px solid rgba(159,174,176,.35);

            @media (max-width:481px)  { 
                /* smartphones, iPhone, portrait 480x320 phones */ 
                padding: 2rem var(--mobile-margin-width);
            }
        }

        .blurb-row {
            padding: 3rem var(--margin-width);
            border-bottom: 1px solid rgba(159,174,176,.35);

            @media (max-width:481px)  { 
                /* smartphones, iPhone, portrait 480x320 phones */ 
                padding: 3rem var(--mobile-margin-width);
            }

            :last-child {
                padding-bottom: 6rem;
            }

            .columns {
                width: 83.33333%;
                display: flex;
                justify-content: space-between;

                @media (max-width:481px)  { 
                    /* smartphones, iPhone, portrait 480x320 phones */ 
                    flex-direction: column;
                    width: 100%;
                }

                .blurb-row-title {
                    width: 25%;

                    @media (max-width:481px)  { 
                        /* smartphones, iPhone, portrait 480x320 phones */ 
                        width: 100%;
                    }
                }
                
                .blurb-row-body {
                    width: 50%;
                    padding-left: 15px;

                    @media (max-width:481px)  { 
                        /* smartphones, iPhone, portrait 480x320 phones */ 
                        width: 100%;
                        padding-left: 0;
                        margin-top: 1rem;
                    }

                    p {
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }

    #profile-skills {
        background-color: var(--black);
        color: var(--white);

        .section-heading {
            padding: 2rem var(--margin-width);
            border-bottom: 1px solid rgba(159,174,176,.35);

            @media (max-width:481px)  { 
                /* smartphones, iPhone, portrait 480x320 phones */ 
                padding: 2rem var(--mobile-margin-width);
            }
        }

        .skills-row {
            padding: 2rem var(--margin-width);
            display: flex;
            justify-content: space-between;

            @media (max-width:481px)  { 
                /* smartphones, iPhone, portrait 480x320 phones */ 
                padding: 2rem var(--mobile-margin-width);
                flex-direction: column;
            }

            .skills-column {
                width: 25%;

                :last-child {
                    width: 33.3333%
                }

                @media (max-width:481px)  { 
                    /* smartphones, iPhone, portrait 480x320 phones */ 
                    width: 100%;

                    :last-child {
                        width: 100%;
                    }
                }

                .column-title {
                    padding-bottom: 2rem;

                    @media (max-width:481px)  { 
                        /* smartphones, iPhone, portrait 480x320 phones */ 
                        padding: 2rem 0;
                    }
                }

                .column-list {

                    li {
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
`