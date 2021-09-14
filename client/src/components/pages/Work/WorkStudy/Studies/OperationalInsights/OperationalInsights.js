import React from "react"
import { StyledStudy } from '../Study.styled'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';


// images
import title_bg from "../../../../../../img/work/operational-insights/landing-image.jpg"

// setup swiper modules
SwiperCore.use([Navigation, Pagination])

const OperationalInsights = () => {

    return (
        <StyledStudy title_bg={title_bg}>
            <section id="landing">
                <div className="title-spacer"></div>
                <div className="title-sticky">
                    <span>PROJECT TITLE:</span>
                    <h3>Operational Insights</h3>
                </div>
            </section>
            <section id="description">
                <div className="desc-row">
                    <div className="desc-column">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien molestie, semper urna ac, pretium diam. Curabitur ultrices sodales felis nec aliquam. Donec ut felis non ligula ultricies tincidunt nec a risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien molestie, semper urna ac, pretium diam. Curabitur ultrices sodales felis nec aliquam. Donec ut felis non ligula ultricies tincidunt nec a risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien molestie, semper urna ac, pretium diam. Curabitur ultrices sodales felis nec aliquam. Donec ut felis non ligula ultricies tincidunt nec a risus. </p>
                    </div>
                    <div className="desc-column">
                        <h4>SCOPE</h4>
                        <ul>
                            <li>FRONT-END</li>
                            <li>BACK-END</li>
                        </ul>
                    </div>
                    <div className="desc-column">
                        <h4>TECHNOLOGIES</h4>
                        <ul>
                            <li>IBM CLOUD</li>
                            <li>CLOUDANT</li>
                            <li>ANGULAR</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="screenshots">
                <div className="screenshot-row">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={"auto"}
                        navigation
                        pagination={{
                        type: 'bullets',
                        "dynamicBullets": true }}
                    >
                        <SwiperSlide>
                            <div className="screenshot-item">
                                <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="screenshot-item">
                                <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="screenshot-item">
                                <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="screenshot-item">
                                <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="screenshot-item">
                                <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="screenshot-item">
                                <img src="https://via.placeholder.com/346x230" alt="Work title" width="346px" height="230"></img>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </StyledStudy>
    );
}

export default OperationalInsights;