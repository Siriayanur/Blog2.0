import React from 'react'
import './Appbar.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
function Appbar()
{
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <GitHubIcon    className="topClassIcon"/>
                <LinkedInIcon  className="topClassIcon"/>
                <InstagramIcon className="topClassIcon"/>
                <TwitterIcon   className="topClassIcon"/>
            </div>
            <div className="topCenter">
                <ul className="topCenterList">
                    <li className="topCenterListItem"><Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>HOME</Link></li>
                    <li className="topCenterListItem"><Link to="/settings" style={{textDecoration: 'none', color: 'inherit'}}>ABOUT</Link></li>
                     <li className="topCenterListItem"><Link to="" style={{textDecoration: 'none', color: 'inherit'}}>CONTACT</Link></li>
                    <li className="topCenterListItem"><Link to="/create" style={{textDecoration: 'none', color: 'inherit'}}>WRITE </Link></li>
                    <li className="topCenterListItem">{user && 'LOGOUT'}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <>
                        <img className="topRightImage" src="https://images.unsplash.com/photo-1462642109801-4ac2971a3a51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80" />
                        <i>
                            <SearchIcon className="searchIcon"/>
                        </i>
                    </>

                ) : (
                        <ul className="topCenterList">
                            <li className="topCenterListItem"><Link to="/login" style={{textDecoration: 'none', color: 'inherit'}}>LOGIN </Link></li>
                            <li className="topCenterListItem"><Link to="/register" style={{textDecoration: 'none', color: 'inherit'}}>REGISTER </Link></li>
                        </ul>
                            
                )}
                
            </div>
        </div>
    )
}

export default Appbar
