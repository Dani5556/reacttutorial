import Link from "next/link";
import {signIn,signOut, useSession} from 'next-auth/react'
const Navbar = () => {
    const {data : session, loading} = useSession();
    console.log(session, loading);
    return ( 
        <nav className="navi">
        
        <div className={`navbar ${!session && loading ? 'loading' : 'loaded'}`}>
            <h1>The Dojo class</h1>
            <div className="links">
                <Link href="/" className="homebutton">Home</Link>
                <Link href="/create" className="newbloglink">New Blog</Link>

                { !loading && !session && (<Link className = "in"href='/api/auth/signin'
                     onClick={e=> {
                    e.preventDefault();
                    signIn();
                }}>Sign In
                </Link>)}

               { session &&( <Link className="out" href="/api/auth/singout"
                    onClick={e=> {
                    e.preventDefault();
                    signOut();
                }}>Sign Out
                </Link>)}
            </div>  
                <Link className="acc" href='../account'>Account</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;