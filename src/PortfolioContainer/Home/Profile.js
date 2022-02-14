import React from 'react';
import Typical from 'react-typical';

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
                <div className='profile-details-role'>
                    <span claassName='primary-text'>
                        {" "}
                        <h1>
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Website Designer Extraordinaire",
                            1000,
                            "Full Stack Developer",
                            1000,
                            "MERN Stack Engineer",
                            1000,
                            "SQL and MongoDB Databasing",
                            1000,
                            "React Developer/Engineer",
                            1000,
                        ]}
                        />
                        </h1>
                        <span className='profile-role-tagline'>
                            Skilled in front and back end development
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Please Hire Me!{" "}
                    </button>
                    <a href='Anthony Korneagay Jr Updated Resume.docx' download='Anthony Korneagay Jr Updated Resume.docx'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
                </div>
            </div>
        </div>
    )   
}