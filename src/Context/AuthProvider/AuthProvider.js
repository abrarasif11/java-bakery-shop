import React, { createContext, useEffect, useState } from 'react';
import  {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // signIn
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
      };

      //google sign in //
      const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
      };
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser);
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          return unsubscribe();
        };
      }, []);
    
    const authInfo = { user, loading, createUser, signIn, logOut, googleSignIn}
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;