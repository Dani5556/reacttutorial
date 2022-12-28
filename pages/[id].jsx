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
    const res = await fetch('http://localhost:8000/blogs' );
    const data = await res.json();
    return{
        props: {blog : data}
    }
}


const BlogDetails = ({blog}) => {
    return ( 
        <div className="content">
            <h2>Blog Details</h2>
            <p>{blog.title}</p>
            <h2>{blog.body}</h2>
        </div>
     );
}
 
export default BlogDetails;