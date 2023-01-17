//import useFetch from "../components/usefetch";
import { useRouter } from "next/router";


export const getStaticPaths = async () => {
    const respons = await fetch('http://localhost:8000/blogs');
    const data = await respons.json();
    const paths = data.map(blog => {
        return{
            params: {id: blog.id.toString()}
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:8000/blogs/' + id);
    const data = await res.json();
    return{
        props: {blog : data}
    }
}

const BlogDetails = ({blog}) => {
    const router = useRouter();
    const handleClick = () =>{
      fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE'
        }).then( () => {
             router.push('/');
    });
}

    return ( 
        <div className="blog-details">
           <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div className=""> { blog.body}</div>
            <button onClick={handleClick}> Delete </button>
           </article>
            
        </div>
     );
}
 
export default BlogDetails;