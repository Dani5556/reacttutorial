import Link from "next/link";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo class</h1>
            <div className="links">
                <a href="/">Home</a>
                <Link href="/create" className="newbloglink">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;