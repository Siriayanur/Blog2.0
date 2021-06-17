import React, { useEffect, useState } from 'react'
import { useLocation ,Link} from 'react-router-dom';
import './Sidebar.css'

import axios from 'axios';

function Sidebar()
{
    const [categ, setCateg] = useState([]);
    const [users, setUsers] = useState([]);
    const PF = 'http://localhost:5000/images/'
    
    const { search } = useLocation()
    useEffect(() =>
    {
        const getCategories = async () =>
        {
            const result = await axios.get('http://localhost:5000/api/categories')
            setCateg(result.data);
        }
        getCategories();
        
    }, [])
    useEffect(() => {
        const getUsers = async () => {
            const result2 = await axios.get('http://localhost:5000/api/users')
            setUsers(result2.data);
        }
        getUsers();
    },[])

    
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    USERS
                </span>
                <div className="sidebarUserDetails">
                        {users?.map(user =>
                            (
                            <Link to={`/?user=${user.username}`} style={{textDecoration : 'none', color:'inherit'}}>
                                <div className="sidebarUserDetailsItem">
                                        <img className="userProfilePicture" src={user.profilePicture ? PF + user.profilePicture : PF+'noDp.png'} alt=""/>
                                        <span>{user.username}</span>
                                </div>
                            </Link>
                            )
                            )}
                </div>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FILTER BY</span>
                <ul className="sidebarList">
                    {categ.map((c,i) => <Link  key={i} style={{textDecoration:'none', color:'inherit'}} to={`/?cat=${c.name}`}><li className="sidebarListItem">{ c.name}</li></Link>)}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">PING ME</span>
                
            </div>
        </div>
    )
}

export default Sidebar

/**
 * 
 * 
 * <div className="sidebarUserDetailsItem">
                                
                            </div>
 */