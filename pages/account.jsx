import {getSession, signIn, useSession} from 'next-auth/react';
import Bloglist from '../components/bloglist';
import useFetch from '../components/usefetch';
import styles from '../styles/account.module.scss'

const Account = () => {
    const {data :session, loading} = useSession();
    const {data : blogs ,isPending, error} = useFetch('http://localhost:8000/blogs');

  if(!session){
    signIn();  
  }
  else{
    return ( 
        <div>
        <div className={styles.doboz}>
            <img className={styles.kep} src = {session.user.image} />
            </div>
            <h2 className={styles.name}>{session.user.name}</h2> 
            <p>{session.user.email}</p>
            <div className={styles.blogdoboz}>
             {blogs &&  <Bloglist blogs = {blogs.filter( (blog) => (blog.author === session.user.name))} title = "Your Blogs" /> }
            </div>
        </div>
        
     );
    }
}
 
export default Account;

/*export async function getServerSideProps(context){
    const session = await getSession(context);
    return{
        props: {
            session,
        }
    }
}*/