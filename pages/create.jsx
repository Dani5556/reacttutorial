import { useState } from "react";
import { useRouter } from 'next/router'
import useFetch from "../components/usefetch";
const Create = () => {
    const  [title, setTitle] = useState('');
    const  [body, setBody] = useState('');
    const  [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const {data : blogs, pending, error} = useFetch('http://localhost:8000/blogs');
    var blogid =blogs  &&  blogs[blogs.length-1].id +1;
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title,body,author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            router.push('/' + blogid);
            
        })
    }
    return ( 
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title} 
                onChange = {(e) => setTitle(e.target.value)}/> 
                <label>Blog Body:</label>
                <textarea  required value = {body} onChange = {(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <input type="text" required onChange={(e) => setAuthor(e.target.value)}/>
            { !isPending && <button>Add Blog</button>} 
            { isPending && <button disabled>Adding Blog...</button>} 
            </form>
            
            </div>

     );
}
 
export default Create;