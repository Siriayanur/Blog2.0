import React, { useContext } from 'react'
import './Appbar.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
function Appbar()
{
    const { user, dispatch } = useContext(Context);
    const PF = 'http://localhost:5000/images/'

    const handleLogout = () =>
    {
        dispatch({type : 'LOGOUT'})
    }
    return (
        <div className="top">
            <div className="topLeft">
                <b>Blog 2.0</b>
            </div>
            <div className="topCenter">
                <ul className="topCenterList">
                    <li className="topCenterListItem"><Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>HOME</Link></li>
                    <li className="topCenterListItem"><Link to="/settings" style={{textDecoration: 'none', color: 'inherit'}}>ABOUT</Link></li>
                     <li className="topCenterListItem"><Link to="" style={{textDecoration: 'none', color: 'inherit'}}>CONTACT</Link></li>
                    <li className="topCenterListItem"><Link to="/create" style={{textDecoration: 'none', color: 'inherit'}}>WRITE </Link></li>
                    <li className="topCenterListItem" onClick={handleLogout}>{user && 'LOGOUT'}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <>
                        <Link to="/settings"><img className="topRightImage" src={user.profilePicture ? PF + user.profilePicture : PF+'noDp.png'} /></Link>
                        <i>
                            <SearchIcon className="searchIcon"/>
                        </i>
                    </>

                ) : (
                        <ul className="topCenterList">
                            <li className="topCenterListItem"><Link to="/login" style={{textDecoration: 'none', color: 'inherit',marginRight : '70px'}}>LOGIN </Link></li>
                            <li className="topCenterListItem"><Link to="/register" style={{textDecoration: 'none', color: 'inherit'}}>REGISTER </Link></li>
                        </ul>
                            
                )}
                
            </div>
        </div>
    )
}

export default Appbar
