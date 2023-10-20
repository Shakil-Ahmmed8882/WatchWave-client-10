import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Utils/AuthHelper";
import PropTypes from 'prop-types'; // Correct the import for PropTypes

const Private = ({ children }) => {
  const { user, authLoading } = useAuth()
  const location = useLocation();

  if (authLoading) {
    return <div className="w-full h-screen flex justify-center items-center"><span className="loading loading-lg"></span></div>
  }
  if(!user){
    return <Navigate state={location.pathname} to="/login"></Navigate>;
    
  }
  
  if (user) {
    return children;
  }
};

Private.propTypes = {
  children: PropTypes.node 
}

export default Private;