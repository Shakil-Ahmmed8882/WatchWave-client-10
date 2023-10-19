import  { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import the Link component
import useAuth from "../../Utils/AuthHelper";
import { toast } from "react-hot-toast";

function SignIn() {

  const { login,googleSignIn } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

const handleLogin = (e) => {
      e.preventDefault()
      login(email,password)
      .then(() => {
            console.log('logged in')
            toast.success("Successfully Signed in");
            navigate(location.state ? location.state : "/");
          })
          .catch((err) =>toast.error(err.toString()));
}

// Handle login through google github
const handleMedia = media =>{
  media()
  .then(()=>{
    toast.success('Signed in with google')
    navigate(location.state ? location.state : "/");
  })
  .catch(err => toast.error(err.toString()))
}

  return (
    <div className="py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
          }}></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Logo
          </h2>
          <p className="text-xl text-gray-600 text-center">
            Welcome back to Watch-wave
          </p>
      
            {" "}
            {/* Replace href with to */}
            <button onClick={()=>handleMedia(googleSignIn)} className="flex items-center bg-indigo-100 w-full gap-5 justify-center mt-4 py-2 rounded-lg shadow-md hover:bg-indigo-200 transition-all cursor-pointer">
              <div className="bg-white p-2 rounded-full">
                <svg  className="w-4" viewBox="0 0 533.5 544.3">
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
              </div>
                Sign in with Google
            </button>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <Link
              to="/login-email"
              className="text-xs text-center text-gray-500 uppercase">
              {" "}
              {/* Replace href with to */}
              or login with email
            </Link>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              onChange={handleEmailChange}
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <Link to="/forgot-password" className="text-xs text-gray-500">
                {" "}
                {/* Replace href with to */}
                Forget Password?
              </Link>
            </div>
            <input
              onChange={handlePasswordChange}
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="mt-8">
            <button onClick={handleLogin} className="bg-indigo-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-indigo-700 transition-all">
              Login
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to="/sign-up" className="text-xs text-gray-500 uppercase">
              {" "}
              {/* Replace href with to */}
              or sign up
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
