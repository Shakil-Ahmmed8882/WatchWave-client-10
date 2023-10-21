// import React, { useState, useEffect } from "react";
// import "./Toggle.css";
// const theme = document.querySelector("html");

// const Toggle = () => {
//   const navBar = document.querySelector("#navbar"); 
//   const banner = document.querySelector("#banner"); 
//   const location = document.querySelector("#location"); 
//   const active = document.querySelector(".active"); 
//   const description50k = document.querySelector("#description50k"); 
//   const Caption50k = document.querySelector("#Caption50k");  
//   const bannerCaption = document.querySelector("#bannerCaption");  
//   const bannerDescription = document.querySelector("#bannerCaption");  
//   const collectionText = document.querySelector("#collectionText"); 


//   const toggleTheme = () => {
//     const currentTheme = theme.getAttribute("data-theme");
//     const newTheme = currentTheme === "light" ? "dark" : "light";

//     theme.setAttribute("data-theme", newTheme);
    
//     console.log(description50k)
//     // Check if navBar is defined before manipulating its classList
//     // sorry to duplicate alot code that should be applied in reusable funciton|| 
//     if (navBar || banner) {
//       if (newTheme === "dark") {
//         document.body.style.color = "white";
//         document.body.classList.remove('caption-color-light')
//         document.body.classList.add('caption-color')
//         banner.classList.remove("BG-cover");
//         location.classList.add("location");
//         location.classList.remove("bg-black");
//         navBar.classList.add("bg-transparent");
//         banner.classList.add("bg-transparent");
//         description50k.classList.add('description50kDark')
//         collectionText.classList.add('description50kDark')
//         Caption50k.classList.add('caption50k')
//         description50k.classList.remove('text-sm-light-text')
//       } else {
//         description50k.classList.remove('description50kDark')
//         description50k.collectionText.remove('description50kDark')
//         Caption50k.classList.remove('caption50k')
//         Caption50k.classList.add('text-black')
//         description50k.classList.add('text-sm-light-text')
//         active.classList.add('text-black')
//         banner.classList.remove("bg-transparent");
//         location.classList.remove("bg-black");
//         document.body.classList.remove('caption-color')
//         document.body.classList.add('caption-color-light')

//         banner.classList.add("BG-cover");
//       }
//     }
//   };

//   useEffect(() => {
//     const currentTheme = localStorage.getItem("theme") || "dark";
//     theme.setAttribute("data-theme", currentTheme);

//     // Set the initial navigation bar class based on the theme
//     if (navBar) {
//       if (currentTheme === "dark") {
//         navBar.classList.add("dark-nav-bar");
//       } else {
//         navBar.classList.add("light-nav-bar");
//       }
//     }
//   }, []);

//   return (
//     <div className="toggle-container">
//       <input onChange={toggleTheme} type="checkbox" />
//       <label htmlFor="check" className="button"></label>
//     </div>
//   );
// };

// export default Toggle;
