import {
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    GithubAuthProvider, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,} from "firebase/auth";
import { useEffect, useState } from "react";

import firebaseInitialize from "../firebase/firebase.init";

firebaseInitialize();




const useFirebase = () => {
       
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading ] = useState(true);
    const [error, setError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

//google
    const signInWithGoogle = (location, navigate) => {
       setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // saveUser(user.email, user.displayName, 'PUT');
                setError('');
                const destination = location?.state?.from || '/';
                navigate(destination);

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
           
  // Github
    const signInWithGithub = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                // saveUser(user.email, user.displayName, 'PUT');
                setError('');
                const destination = location?.state?.from || '/';
                navigate(destination);

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



    // new user

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user to the database
                // saveUser(email, name, 'POST');



                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {

                    }).catch((error) => {

                    });

                history.replace('/');

            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false));

    }
  

// login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



//Observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])        
        
    
    //log-out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })

            .finally(() => setIsLoading(false));

    }           
           
          
     
    return {
        user,
        isLoading,
        error,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        registerUser,


    }
};

export default useFirebase;