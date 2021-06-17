import React from 'react'
import './Header.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

import Logo from './bg.png';
import Logo2 from './bgLeft.jpg';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
                <img className="headerImg" src={Logo2} alt="girlImage" />
            </div>
            <div className="headerRight">
                <div className="headerTitle">
                    <span className="headerTitleSmall">Blog 2.0 presents</span>
                    <span className="headerTitleLarge">The Journey</span>
                    <hr style={{width: '600px',marginTop: '20px'}}/>
                </div>
                <div className="headerInfo">
                    <div className="about">
                        I am a passionate learner,coder and a third year student studying Computer Science and Engineering.
                        This website is an attempt to jot down all the ups and downs technically and personally and to showcase my journey.. 
                    </div>
                    <div className="sidebarSocial">
                        <a href="https://github.com/Siriayanur" style={{textDecoration:'none',color:'inherit'}}>
                            <GitHubIcon className="sidebarIcon" style={{ color: '#424874' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/a-m-siri-544a19190/" style={{textDecoration:'none',color:'inherit'}}>
                            <LinkedInIcon className="sidebarIcon" style={{ color: '#424874' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
