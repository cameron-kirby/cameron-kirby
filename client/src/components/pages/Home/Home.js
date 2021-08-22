import React from "react"
import { StyledHome } from './Home.styled'
import { Folder } from "@styled-icons/boxicons-solid"


const Home = () => {

    return (
        <StyledHome>
            <section id="landing">
                <div className="hero">
                    <div className="centered-section">
                        <h1><span>Hey!</span><br/>I'm Cameron Kirby</h1>
                        <h2>A full-stack web developer<br/>based in Chicago, IL</h2>
                    </div>
                </div>
            </section>
            <section id="section-2">
                <div className="section-banner">
                    <p className="banner-text">Check out my recent projects</p>
                    <div className="icon"><Folder/></div>
                </div>
            </section>
        </StyledHome>
    );
}

export default Home;