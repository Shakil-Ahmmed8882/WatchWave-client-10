import { createContext } from "react";
import PropTypes from 'prop-types'
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
      const userr = {
            name:'sakil'
      }
  return (
      
      
    <div>
      <AuthContext.Provider value={userr}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
      children:PropTypes.node
}

export default AuthProvider;
