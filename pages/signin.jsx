import { GetServerSideProps } from 'next';
import {signIn, getSession, getCsrfToken, getProviders} from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import styles from '../styles/signin.module.scss';

function ProviderButton({ provider }) {
    switch (provider.name) {
      case 'Google':
        return (
          <img
            src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png"
            alt="Sign in with Google"
          />
        );
      case 'Facebook':
        return (
          <img
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt="Sign in with Facebook"
          />
        );
      default:
        return <div>Sign in with {provider.name}</div>;
    }
  }


const inSign = ({providers}) => {
    
    return ( 
    <div className={styles.cont}>
      <div className={styles.doboz}>
      
        <h2 className={styles.text}>Sign In With: </h2>
            {Object.values(providers).map((provider) => {
                return(
                    <div key={provider.name}>
                        <button onClick={()=> signIn(provider.id)}>
                        <ProviderButton key={provider.name} provider={provider} />
                        </button>
                        
                    </div>
                );
            })}
        </div>
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