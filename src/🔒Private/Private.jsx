import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Utils/AuthHelper";
import PropTypes from 'prop-types'; // Correct the import for PropTypes

const Private = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

Private.propTypes = {
  children: PropTypes.node 
}

export default Private;