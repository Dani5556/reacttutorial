import { GetServerSideProps } from 'next';
import {signIn, getSession, getCsrfToken, getProviders} from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';

const inSign = ({providers}) => {
    
    return ( 
      <div>
      

            {Object.values(providers).map((provider) => {
                return(
                    <div key={provider.name}>
                        <button onClick={()=> signIn(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                );
            })}
        </div>
     );
}
 
export default inSign;

export async function getServerSideProps(context) {
    const session = await getSession({req : context.req});
    if(session){
        return{
        redirect:{
            destination:'/',
            permanent: false,
        },
    };
    }
    const providers = await getProviders();
    const csrfToken = await getCsrfToken(context);
    return{
        props: {
            providers, csrfToken,
        },
    };
}