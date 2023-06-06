//Styles
import styles from './Navbar.module.css';

const NavBar = ({LougoutHandler}) => {
    return ( <div className={styles.container}>
        <div className={styles.name}>Chat Msgner</div>
        <div className={styles.logout} onClick={LougoutHandler}>Logout</div>
    </div> );
}
 
export default NavBar;