import { useState , useEffect} from "react";
import styles from '../styles/Elso.module.scss';

const Bloglist = (props) => {
    const blogs = props.blogs;
    const title = props.title;
        // const [blogs, setBlogs] = useState([
        //     {title: 'My new website', body: 'lorem ipsum..', author: 'mario', id: 1},
        //     {title: 'Welcome party', body: 'lorem ipsum..', author: 'yoshi', id: 2},
        //     {title: 'Fishing tips', body: 'lorem ipsum..', author: 'mario', id: 3}
        // ]);     
        //                                    lehet igy is te props-al csinalta
      
      
      useEffect
        return ( 
            <div className="bloglist">
                <h2>{title}</h2>
                {blogs.map( (blog) => (
                    <div className = {styles.blogprev} key = {blog.id}>
                        <h2> {blog.title} </h2>
                        <p> Written by {blog.author} </p>
                        <button onClick = { () => props.handleDelete(blog.id)}>Delete Blog</button>
                    </div>
                 ) )}
                 
            </div>
         );
     
}
 
export default Bloglist;