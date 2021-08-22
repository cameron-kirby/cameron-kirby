import React from "react"
import { Link } from "react-router-dom";
import { StyledHome } from './Home.styled'
import { Folder, RightArrowAlt } from "@styled-icons/boxicons-solid"


const Home = () => {

    return (
        <StyledHome>
            <section id="home-landing">
                <div className="hero">
                    <div className="centered-section">
                        <h1><span>Hey!</span><br/>I'm Cameron Kirby</h1>
                        <h2>A full-stack web developer<br/>based in Chicago, IL</h2>
                    </div>
                </div>
            </section>
            <section id="home-recentwork">
                <div className="section-heading">
                    <div className="icon"><Folder/></div>
                    <h3>Recent work</h3>
                </div>
                <div className="work-row">
                    <div className="work-item">
                        <div className="work-item-media">
                            <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                        </div>
                        <div className="work-item-body">
                            <h4>Work item</h4>
                            <p>This is a dummy work item!</p>
                        </div>
                    </div>
                    <div className="work-item">
                        <div className="work-item-media">
                            <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                        </div>
                        <div className="work-item-body">
                            <h4>Work item</h4>
                            <p>This is a dummy work item!</p>
                        </div>
                    </div>
                    <div className="work-item">
                        <div className="work-item-media">
                            <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                        </div>
                        <div className="work-item-body">
                            <h4>Work item</h4>
                            <p>This is a dummy work item!</p>
                        </div>
                    </div>
                    <div className="work-item">
                        <div className="work-item-media">
                            <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                        </div>
                        <div className="work-item-body">
                            <h4>Work item</h4>
                            <p>This is a dummy work item!</p>
                        </div>
                    </div>
                </div>
                <div className="work-sectionfooter">
                    <Link to="/work">
                        <div className="footer-row">
                            <h3>All projects</h3>
                            <div className="icon">
                                <RightArrowAlt/>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </StyledHome>
    );
}

export default Home;