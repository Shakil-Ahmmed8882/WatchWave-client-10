import { useState } from "react";
import Swal from "sweetalert2";

const AddProducts = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleRadioChange = (event) => {
    const { name } = event.target;
    setSelectedBrand(name);
  };

  const handleBrand = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const brandData = {}; // Create an object to hold input values

    formData.forEach((value, key) => {
      brandData[key] = value;
    });

    if (selectedBrand === null) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please select a brand",
      });
      return;
    }

    fetch(
      `https://watch-wave-cqulrt8rl-shakil-ahmmeds-projects.vercel.app/${selectedBrand}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(brandData),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
          <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold  text-gray-900 sm:text-4xl bottom-mark md:w-[500px] md:mx-auto">
            WatchWave Cinema
          </p>
        </div>
    <div className="add-product-cover  top-0 -z-10 flex items-center">
      
      <form
        onSubmit={handleBrand}
        className="p-8 my-auto border mt-16 w-full lg:w-1/2  mx-auto">
        {/* ================================================== */}
        <div className="flex flex-wrap gap-3 mb-9 md:space-x-5">
          <label className="space-x-2">
            <input
              type="radio"
              name="Comedy"
              checked={selectedBrand === "Comedy"}
              onChange={handleRadioChange}
            />
            <span>Comedy</span>
          </label>
          <br />
          <label className="space-x-2">
            <input
              type="radio"
              name="Science Fiction"
              checked={selectedBrand === "Science Fiction"}
              onChange={handleRadioChange}
            />
            <span>Science Fiction</span>
          </label>
          <br />
          <label className="space-x-2">
            <input
              type="radio"
              name="Fantasy"
              checked={selectedBrand === "Fantasy"}
              onChange={handleRadioChange}
            />
            <span>Fantasy</span>
          </label>
          <label className="space-x-2">
            <input
              type="radio"
              name="Horror"
              checked={selectedBrand === "Horror"}
              onChange={handleRadioChange}
            />
            <span>Horror</span>
          </label>
          <label className="space-x-2">
            <input
              type="radio"
              name="Superhero"
              checked={selectedBrand === "Superhero"}
              onChange={handleRadioChange}
            />
            <span>Superhero</span>
          </label>
          <label className="space-x-2">
            <input
              type="radio"
              name="Drama"
              checked={selectedBrand === "Drama"}
              onChange={handleRadioChange}
            />
            <span>Drama</span>
          </label>
          <br />
        </div>
        {/* ================================================== */}
        <div className="lg:flex gap-3">
          <div className="flex-1">
            {/* Image URL */}
            <div className="form-control">
              <label className="label">
                <span className="label text-gray-400">Image URL</span>
              </label>
              <input
                type="text"
                className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full"
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
                className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full"
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
                className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full"
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
                className=" bg-transparent outline-none my-3 bottom-line w-full"
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
                className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full"
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
                className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full"
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
            className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full"
            name="rating"
            required
          />
        </div>
        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  
    </div>
  );
};

export default AddProducts;
