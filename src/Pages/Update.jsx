
const Update = () => {
      const handleUpdate = (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const brandData = {}; // Create an object to hold input values
        
            formData.forEach((value, key) => {
                  brandData[key] = value;
            });
      };


          
      return (
            <div className="add-product-cover absolute top-0 -z-10 flex">
            <form onSubmit={handleUpdate} className="p-8 my-auto mt-16 w-full lg:w-1/2 bg-[#000000cb] mx-auto">
              <div className="lg:flex gap-3">
                <div className="flex-1">
                  {/* Image URL */}
                  <div className="form-control">
                    <label className="label">
                        <span className="label text-gray-400">Image URL</span>
                    </label>
                    <input
                      type="text"
                      className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
                      name="photo"
                      required
                    />
                  </div>
                  {/* Name */}
                  <div className="form-control">
                    <label className="label">
                        <span className="label text-gray-400">Name</span>
                    </label>
                    <input
                      type="text"
                      className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
                      name="name"
                      required
                    />
                  </div>
                  {/* Brand name */}
                  <div className="form-control">
                    <label className="label">
                        <span className="label text-gray-400">Brand Name</span>
                    </label>
                    <input
                      type="text"
                      className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
                      name="brand-name"
                      required
                    />
                  </div>
                </div>
                <div className="flex-1">
                  {/* Type */}
                  <div className="form-control">
                    <label className="label">
                        <span className="label text-gray-400">Type</span>
                    </label>
                    <input
                      type="text"
                      className=" bg-transparent outline-none my-3 bottom-line w-full" // Added w-full class
                      name="type"
                      required
                    />
                  </div>
                  {/* Price */}
                  <div className="form-control">
                    <label className="label">
                        <span className="label text-gray-400">Price</span>
                    </label>
                    <input
                      type="number"
                      className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
                      name="price"
                      required
                    />
                  </div>
                  {/* Short description */}
                  <div className="form-control">
                    <label className="label">
                        <span className="label text-gray-400">Short Description</span>
                    </label>
                    <input
                      type="text"
                      className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
                      name="description"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Rating */}
              <div className="form-control">
                <label className="label">
                    <span className="label text-gray-400">Rating</span>
                </label>
                <input
                  type="number"
                  className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
                  name="rating"
                  required
                />
              </div>
              {/* Submit Button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
            </div>
          );
};

export default Update;