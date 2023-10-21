import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';
import ThemeToggle from "../Components/Theme/DarkTheme";

const Root = () => {
  return <div>
      <Navbar></Navbar>
      <ThemeToggle></ThemeToggle>
      <Outlet></Outlet>
      <Toaster />
  </div>;
};

export default Root;
