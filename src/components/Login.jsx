//Icons
import googleIcon from "../assets/google.svg";

//Styles
import styles from "./Login.module.css";

//Auth
import firebase from "firebase/app";
import { auth } from "../firebase.js";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome to Msgner!</h2>
        <div
          className={styles.button}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <img src={googleIcon} alt="Google icon" /> Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
