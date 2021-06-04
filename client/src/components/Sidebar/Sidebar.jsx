import React, { useEffect, useState } from 'react'
import { useLocation ,Link} from 'react-router-dom';
import './Sidebar.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import axios from 'axios';

function Sidebar()
{
    const [categ, setCateg] = useState([]);
    const {search} = useLocation()
    useEffect(() =>
    {
        const getCategories = async () =>
        {
            const result = await axios.get('http://localhost:5000/api/categories')
            setCateg(result.data);
        }
        getCategories();
        
    },[])
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
                    {categ.map((c,i) => <Link  key={i} style={{textDecoration:'none', color:'inherit'}} to={`/?cat=${c.name}`}><li className="sidebarListItem">{ c.name}</li></Link>)}
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
