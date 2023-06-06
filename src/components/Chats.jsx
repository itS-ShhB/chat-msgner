import { auth } from "../firebase.js";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

//Styles
import styles from "./Chats.module.css";

//Context
import { AuthContext } from "../context/AuthContextProvider";

//Components
import NavBar from "./NavBar";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "08eb70e7-c274-402d-a6cc-1ca7838c13c4",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "fd5ffa92-0906-44f0-84dd-05f2f9906eaf",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image.jpeg" });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  if (!user || loading) return "Loading ...";

  return (
    <div className={styles.container}>
      <NavBar LougoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="08eb70e7-c274-402d-a6cc-1ca7838c13c4"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
