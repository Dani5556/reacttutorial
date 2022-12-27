import { useState } from "react";
import styles from '../styles/Elso.module.scss';
import Bloglist from "./bloglist";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum..', author: 'mario', id: 1},
        {title: 'Welcome party', body: 'lorem ipsum..', author: 'yoshi', id: 2},
        {title: 'Fishing tips', body: 'lorem ipsum..', author: 'mario', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( (blog) => (blog.id !== id));
        setBlogs(newBlogs);
        console.log("asd");
    }

    return ( 
        <div className="home">
           <Bloglist blogs = {blogs} title = "All Blogs" handleDelete = {handleDelete}/>
           <Bloglist blogs = {blogs.filter( (blog) => (blog.author === 'mario'))} title = "Mario's Blogs" handleDelete = {handleDelete}/>
        </div>
     );
}
 
export default Home;