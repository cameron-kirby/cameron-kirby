import React from "react"
import { Link } from "react-router-dom";
import { StyledHome } from './Home.styled'
import { Folder, RightArrowAlt } from "@styled-icons/boxicons-solid"
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination])


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
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={"auto"}
                        navigation
                        pagination={{
                        type: 'bullets',
                        "dynamicBullets": true }}
                    >
                        <SwiperSlide>
                            <div className="work-item">
                                <div className="work-item-media">
                                    <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                                </div>
                                <div className="work-item-body">
                                    <h4>Work item</h4>
                                    <p>This is a dummy work item!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="work-item">
                                <div className="work-item-media">
                                    <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                                </div>
                                <div className="work-item-body">
                                    <h4>Work item</h4>
                                    <p>This is a dummy work item!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="work-item">
                                <div className="work-item-media">
                                    <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                                </div>
                                <div className="work-item-body">
                                    <h4>Work item</h4>
                                    <p>This is a dummy work item!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="work-item">
                            <div className="work-item-media">
                                <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                            </div>
                            <div className="work-item-body">
                                <h4>Work item</h4>
                                <p>This is a dummy work item!</p>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>
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