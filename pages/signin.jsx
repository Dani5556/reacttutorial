import { privateDecrypt } from 'crypto';
import {signIn, getSession, getCsrfToken, getProviders} from 'next-auth/react';

const inSign = ({providers, csrfToken}) => {
    return ( 
        <div>
            <form method='post' action='/api/auth/signin/email'>
                <input name = "csrfTokem" type="hidden" defaultValue={csrfToken}/>
                <label>Email address
                <input type='email' id='email' name='email'/>
                </label>
                <button type="submit">Sign in with Email</button>
            </form>
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
    const providers = await getProviders();
    const csrfToken = await getCsrfToken(context);
    return{
        props: {
            providers, csrfToken,
        },
    };
}