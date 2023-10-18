const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const brandData = {}; // Create an object to hold input values

    formData.forEach((value, key) => {
      brandData[key] = value;
    });
  };

  return (
    <div className="add-product-cover absolute top-0 -z-10 flex">
      <form
        onSubmit={handleLogin}
        className="p-8 my-auto mt-16 w-full lg:w-1/2 bg-[#000000cb] mx-auto">
        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="label text-gray-400">email</span>
          </label>
          <input
            type="email"
            className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
            name="name"
            required
          />
        </div>

        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label text-gray-400">Password</span>
          </label>
          <input
            type="password"
            className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
            name="password"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
