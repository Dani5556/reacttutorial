import { useState } from "react";
import styles from '../styles/Elso.module.scss';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum..', author: 'mario', id: 1},
        {title: 'Welcome party', body: 'lorem ipsum..', author: 'yoshi', id: 2},
        {title: 'Fishing tips', body: 'lorem ipsum..', author: 'mario', id: 3}
    ]);
    return ( 
        <div className="home">
            {blogs.map( (blog) => (
                <div className = {styles.blogprev} key = {blog.id}>
                    <h2> {blog.title} </h2>
                    <p> Written by {blog.author} </p>
                </div>
             ) )}
             
        </div>
     );
}
 
export default Home;