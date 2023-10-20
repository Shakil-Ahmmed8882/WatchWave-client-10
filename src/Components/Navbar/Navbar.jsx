import { useEffect, useState } from "react";
import useAuth from "../../Utils/AuthHelper";
import "./navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { user, LogOut,authLoading } = useAuth();
  const [isLogout, setIsLogOut] = useState(!user);

  const location = useLocation();
  const path = location.pathname;


  console.log(path)
  const textColor = path == "/addProducts" ? "text-white" : "";
  console.log(textColor)


  useEffect(() => {
    if (!user) {
      setIsLogOut(true);
    } else {
      setIsLogOut(false);
    }
  }, [user]);
  // handling logout here
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        setIsLogOut(true);
      })
      .catch((err) => console.error(err));
  };



  const privateNavLinks = (
    <>
      <li>
        <NavLink to="/subscription">Pro plan</NavLink>
      </li>
    </>
  );

  const navLinks = (
    <>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/series">Series</NavLink>
      </li>
      <li>
        <NavLink to="/addProducts">Add Products</NavLink>
      </li>
      <li>
        <NavLink to="/cart">My-cart</NavLink>
      </li>
      {
        user && !isLogout?privateNavLinks:''
      }
    </>
  );
  

  
  return (
    <div>
      <div className={`navbar bg-transparent ${textColor}`} >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">WatchWave</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {
 <div className="navbar-end">
          {user && !isLogout ? (
            <>
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="m-1">
                  <div className="avatar">
                    <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user.photoURL} alt="User Avatar" />
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogOut} to="/">
                      Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (

            <Link
              to="/login"
              className="hidden bg-indigo-500 hover:bg-indigo-700 text-white md:flex py-[8px] rounded px-5">
              Login
            </Link>
          )}
        </div>
        }
   
      </div>
    </div>
  );
};

export default Navbar;
