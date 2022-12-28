import { useState, useEffect } from "react";
import styles from '../styles/Elso.module.scss';
import Bloglist from "./bloglist";
import useFetch from "./usefetch";
const Home = () => {

       const {data : blogs ,isPending, error} = useFetch(' http://localhost:8000/blogs');
        

    return ( 
        <div className="home">
            { error && <div> { error }</div>}
            { isPending && <div>Loading... Please wait</div>}
          {blogs && <Bloglist blogs = {blogs} title = "All Blogs" /> }
         {blogs &&  <Bloglist blogs = {blogs.filter( (blog) => (blog.author === 'mario'))} title = "Mario's Blogs" /> }
        </div>
     );
}
 
export default Home;