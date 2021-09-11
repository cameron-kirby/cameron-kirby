import React from "react"
import { StyledStudy } from '../Study.styled'
// images
import title_bg from "../../../../../../img/work/dummy/landing-image.jpg"

const Dummy = () => {

    return (
        <StyledStudy title_bg={title_bg}>
            <section id="landing">
                <div className="title-spacer"></div>
                <div className="title-sticky">
                    <span>PROJECT TITLE:</span>
                    <h3>Dummy Project</h3>
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
        </StyledStudy>
    );
}

export default Dummy;