import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  //sign up with email and password
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out
  const logOut = () => {
    return signOut(auth);
  };

  //update profile
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //sign In With Popup
  const gitHubProvider = new GithubAuthProvider();
  const signInWithGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  //sign In With GitHub
  const updatePro = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //user data change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // loading data
  useEffect(() => {
    fetch("https://math-server-side-rakibul2580.vercel.app")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const authInfo = {
    user,
    items,
    loading,
    signUp,
    signIn,
    logOut,
    updatePro,
    signInWithGoogle,
    signInWithGitHub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
