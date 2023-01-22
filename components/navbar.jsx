import Link from "next/link";
import {signIn,signOut, useSession} from 'next-auth/react'
const Navbar = () => {
    const {data : session, loading} = useSession();
    return ( 
        <nav className="navbar">
            <h1>The Dojo class</h1>
            <div className="links">
                <a href="/">Home</a>
                <Link href="/create" className="newbloglink">New Blog</Link>

                { !loading && !session && (<Link href='/api/auth/signin'>
                    <p onClick={e=> {
                    e.preventDefault();
                    signIn();
                }}>Sign In</p>
                </Link>)}

               { session &&( <Link href="/api/auth/singout">
                    <p onClick={e=> {
                    e.preventDefault();
                    signOut();
                }}>Sign Out</p>
                </Link>)}
            </div>
        </nav>
     );
}
 
export default Navbar;