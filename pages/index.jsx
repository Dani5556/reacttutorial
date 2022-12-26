import styles from '../styles/Elso.module.scss'
import Home from '../components/Home';
const Amain = () => {
    const title = "Welcome to DaBlog";
    return ( 
        <div className="App">
            <div className='content'>
                <Home/>
            </div>
        </div>
     );
}
 
export default Amain;