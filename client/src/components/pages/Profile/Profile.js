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
                            <button>My skills</button>
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
            <section id="profile-blurbs">
                <div className="section-heading">
                    <h3>Blurb Section Title</h3>
                </div>
                <div className="blurb-row">
                    <div className="columns">
                        <div className="blurb-row-title">
                            <h4>Row title</h4>
                        </div>
                        <div className="blurb-row-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien molestie, semper urna ac, pretium diam. Curabitur ultrices sodales felis nec aliquam. Donec ut felis non ligula ultricies tincidunt nec a risus.</p>
                        </div>
                    </div>
                </div>
                <div className="blurb-row">
                    <div className="columns">
                        <div className="blurb-row-title">
                            <h4>Row title</h4>
                        </div>
                        <div className="blurb-row-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien molestie, semper urna ac, pretium diam. Curabitur ultrices sodales felis nec aliquam. Donec ut felis non ligula ultricies tincidunt nec a risus.</p>
                        </div>
                    </div>
                </div>
                <div className="blurb-row">
                    <div className="columns">
                        <div className="blurb-row-title">
                            <h4>Row title</h4>
                        </div>
                        <div className="blurb-row-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien molestie, semper urna ac, pretium diam. Curabitur ultrices sodales felis nec aliquam. Donec ut felis non ligula ultricies tincidunt nec a risus.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="profile-skills">
                <div className="section-heading">
                    <h3>My skills</h3>
                </div>
                <div className="skills-row">
                    <div className="skills-column">
                        <div className="column-title">
                            <h4>Column Title</h4>
                        </div>
                        <ul className="column-list">
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                        </ul>
                    </div>
                    <div className="skills-column">
                        <div className="column-title">
                            <h4>Column Title</h4>
                        </div>
                        <ul className="column-list">
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                        </ul>
                    </div>
                    <div className="skills-column">
                        <div className="column-title">
                            <h4>Column Title</h4>
                        </div>
                        <ul className="column-list">
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                        </ul>
                    </div>
                </div>
            </section>
        </StyledProfile>
    )
}

export default Profile;