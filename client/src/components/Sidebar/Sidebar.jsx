import React from 'react'
import './Sidebar.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img src="https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" alt="" />
                <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam architecto quis consequatur, animi perspiciatis ex recusandae dolor rerum minima modi sint molestias similique optio quod voluptate culpa, quidem repudiandae id. 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Formal</li>
                    <li className="sidebarListItem">Spice</li>
                    <li className="sidebarListItem">Sweet</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">PING ME</span>
                <div className="sidebarSocial">
                    <GitHubIcon className="sidebarIcon"/>
                    <LinkedInIcon className="sidebarIcon" />
                    <MailIcon className="sidebarIcon"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
