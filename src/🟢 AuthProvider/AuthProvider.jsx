import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // Fetching brand data
  const [brands, setBrands] = useState([]);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    fetch("http://localhost:1000/")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setBrands(data);
          setLoading(false)
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const fantasy = brands[0];
  const comedy = brands[1];
  const scienceFiction = brands[2];
  const horror = brands[3];
  const supperHero = brands[4];
  const drama = brands[5];


  const categories = {fantasy,comedy,scienceFiction,horror,supperHero,drama}


  const allInOne = {
    categories,
    brands,
    loading
  }
  return (
    <div>
      <AuthContext.Provider value={allInOne
      }>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
