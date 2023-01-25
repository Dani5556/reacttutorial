import {getSession, useSession} from 'next-auth/react';

const Account = ({data}) => {
    const {data :session, loading} = useSession();
    return ( 
        <div>
            {session ? <p>{session.user.name}</p> : <p>Please Log In</p>}
        <div> hi{data}</div>
        </div>
        
     );
}
 
export default Account;

export async function getServerSideProps(context){
    const session = await getSession(context);
    return{
        props: {
            data: session ?  'List of 100 blogs' : 'List',
        }
    }
}