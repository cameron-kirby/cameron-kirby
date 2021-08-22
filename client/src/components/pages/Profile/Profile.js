import React from "react"
import { StyledProfile } from './Profile.styled'

const Profile = ({ useWindowDimensions }) => {
    return (
        <StyledProfile>
            <section id="profile-landing">
                <div className="page-links">
                    <ul>
                        <li>
                            <button>Link 1</button>
                        </li>
                        <li>
                            <button>Link 2</button>
                        </li>
                        <li>
                            <button>Link 3</button>
                        </li>
                    </ul>
                </div>
                <div className="landing-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien molestie, semper urna ac, pretium diam. Curabitur ultrices sodales felis nec aliquam. Donec ut felis non ligula ultricies tincidunt nec a risus. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien molestie, semper urna ac, pretium diam. Curabitur ultrices sodales felis nec aliquam. Donec ut felis non ligula ultricies tincidunt nec a risus. </p>
                </div>
            </section>
        </StyledProfile>
    )
}

export default Profile;