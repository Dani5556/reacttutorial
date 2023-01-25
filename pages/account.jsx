import {getSession, signIn, useSession} from 'next-auth/react';


const Account = () => {
    const {data :session, loading} = useSession();
  if(!session){
    signIn();  
  }
    return ( 
        <div>
            <p>{session.user.name}</p> 
        
        </div>
        
     );
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