import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user,setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    
    const handleGoogleSignIn = () => {
        signInWithPopup(auth,googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            console.log('ERROR',error);
            setUser(null);
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth,githubProvider)
        .then(res => {
            console.log(res.user);
            setUser(res.user)
        })
        .catch(error => console.log('Error',error))
    }

    const handleTwitterSignIn = () => {
        signInWithPopup(auth,twitterProvider)
        .then(res => {
            console.log(res.user);
            setUser(res.user);
        })
        .catch(error => {
            console.log('Error:',error);
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('sign out done');
            setUser(null);
        })
        .catch(error => console.log(error))
    }

    //if user exists ? sign out : sign in

    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {
                user? 
                <button onClick={handleSignOut}>Sign Out</button>
                :
                <div>
                    <button onClick={handleGoogleSignIn}>Login with Google</button>
                    <br />
                    <button onClick={handleGithubSignIn}>Login with Github</button>
                    <br />
                    <button onClick={handleTwitterSignIn}>Login with Twitter</button>
                </div>
            }
            {
               user && <div>
                   <h4>{user.displayName}</h4>
                   <p>email: {user.email}</p>
                   <img src={user.photoURL} alt="" />
               </div>
            }
        </div>
    );
};

export default Login;