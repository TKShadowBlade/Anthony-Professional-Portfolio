import React from 'react';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='#'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/anthony-korneagay-769a503b/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                    </div>
                
                <div classname="profile-details-name">
                    <span className="primary-text">
                        Hello, I'm <span className="highlighted-text">Anthony</span>
                    </span>
                </div>
                </div>
            </div>
        </div>
    )   
}