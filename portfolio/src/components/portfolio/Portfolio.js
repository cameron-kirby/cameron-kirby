import React from 'react'
import { StyledPortfolio } from './Portfolio.styled'
// images
import portfolioImage from '../../img/port-placeholder.jpg'
// icons
import { ReactLogo, Nodejs } from '@styled-icons/boxicons-logos'

const Portfolio = () => {

    return (
        <StyledPortfolio>
            <div className='item'>
                <div className='item-photo'>
                    <img src={portfolioImage} alt="Logo" />
                </div>
                <div className='item-content'>
                    <div className='item-links'>
                        <a href='#'>SEE LIVE</a>
                        <a href='#'>VIEW CODE</a>
                    </div>
                    <div className='item-title'>
                        <h2>PORTFOLIO TITLE</h2>
                    </div>
                    <div className='item-body'>
                        <div className='item-body-text'>
                        A fully responsive react CRUD application using The Guardian News & Open Weather Map API with Firebase for Database, Auth and Hosting. This app pulls headlines from all the main sections of The Guardian. Users are able to login and leave comments on all articles.

This app features:
- Various React hooks such as useEffect, useHistory and useLocation to make API calls and define routes.
- Multiple API calls to fetch News and Weather data.
- State stored and persisted using Redux and local storage.
- User authentication to allow for article comment creation, deletion and editing.

I worked with The Guardian's style guide to retain brand consitency. MaterializeUI was used for the icons.
                        </div>
                        <div className='item-body-icons'>
                            <ReactLogo />
                            <Nodejs />
                        </div>
                    </div>
                </div>
            </div>
        </StyledPortfolio>
    );
}

export default Portfolio;