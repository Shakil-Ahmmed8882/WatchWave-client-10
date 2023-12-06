import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../🔥 Firebase/Firebase.config";

//||PROVIDERS
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // Fetching brand data
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://watch-wave-five.vercel.app")
      .then((res) => res.json())
      .then((data) => {
          setBrands(data);
          console.log(data)
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, []);

  console.log(brands);
  // console.log(brands[0]?.brand?.projects[0].products)

  const fantasy = brands[0];
  const comedy = brands[1];
  const scienceFiction = brands[2];
  const horror = brands[3];
  const supperHero = brands[4];
  const drama = brands[5];

  const categories = {
    fantasy,
    comedy,
    scienceFiction,
    horror,
    supperHero,
    drama,
  };

  const [authLoading, setAuthLoading] = useState(true);
  //|| AUTHENTICATION
  const createUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //|| SIGN IN
  const login = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //|| SIGN IN WITH GOOGLE
  const googleSignIn = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //|| SIGN OUT
  const LogOut = () => {
    setAuthLoading(true);
    return signOut(auth);
  };

  // || OBSERVER
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // console.log(currentUser);
      }
      setAuthLoading(false);
    });

    return () => unsubcribe();
  }, []);

  const allInOne = {
    categories,
    brands,
    loading,
    createUser,
    login,
    googleSignIn,
    LogOut,
    user,
    authLoading,
  };
  return (
    <div>
      <AuthContext.Provider value={allInOne}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
