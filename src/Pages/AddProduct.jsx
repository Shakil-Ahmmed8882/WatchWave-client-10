const AddProducts = () => {
  const handleBrand = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const photo = formData.get("photo");
    const newBrand = { name, photo };
  };
  return (
    <form onSubmit={handleBrand} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Brand Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          name="name"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          name="photo"
          required
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default AddProducts;
