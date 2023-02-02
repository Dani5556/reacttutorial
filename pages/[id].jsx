//import useFetch from "../components/usefetch";
import { getSession, useSession } from "next-auth/react";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
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
    const {data :session, loading} = useSession();

    const handleClick = () =>{
      fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE'
        }).then( () => {
             router.push('/');
    });
}
    
    
    return ( 
        
        <div className="blog-details">
            {!session && <h1>Loading...</h1>}
            {session && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <div className=""> { blog.body}</div>
                        {session.user.name === blog.author && <button onClick={handleClick}> Delete </button>}
                    </article>
            )}
        </div>
     );
}
export default BlogDetails;

/*export async function sessionGet() {
    const {data: session, loading}= await useSession();
    return{
        session
    }
}*/