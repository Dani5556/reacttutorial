import Link from "next/link";
import { useState , useEffect} from "react";
import styles from '../styles/Elso.module.scss';

const Bloglist = (props) => {
    const blogs = props.blogs;
    const title = props.title;
       
        
      
      
        return ( 
            <div className="bloglist">
                <h2>{title}</h2>
                {blogs.map( (blog) => (
                    <div className = {styles.blogprev} key = {blog.id}>
                        <Link href = {'/' + blog.id} className = {styles.alink}>
                        <h2> {blog.title} </h2>
                        <p> Written by {blog.author} </p>
                        </Link>
                    </div>
                 ) )}
                 
            </div>
         );
     
}
 
export default Bloglist;