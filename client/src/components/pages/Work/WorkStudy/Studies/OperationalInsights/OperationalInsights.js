import React from "react"

import { StyledOperationalInsights } from './OperationalInsights.styled'

const OperationalInsights = () => {

    return (
        <StyledOperationalInsights>
            <section id="landing">
                <div className="title-spacer"></div>
                <div className="title-sticky">
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
                            <li>CLOUDANT</li>
                            <li>ANGULAR</li>
                        </ul>
                    </div>
                </div>
            </section>
        </StyledOperationalInsights>
    );
}

export default OperationalInsights;