import React, { useEffect,useState } from 'react'
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    useEffect(() =>
    {
        const fetchPosts = async () =>
        {
            const result = await axios.get('http://localhost:5000/api/posts/' + search);
            setPosts(result.data);
        }
        fetchPosts();
    },[search])
    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar />
            </div>
        </>
    )
}

export default Home
