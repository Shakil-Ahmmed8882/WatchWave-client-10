import { useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const Update = () => {
  const { name } = useParams();
  const [defaultData, setDefaultData] = useState({});


  console.log(defaultData)
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const brandData = {}; // Create an object to hold input values

    formData.forEach((value, key) => {
      brandData[key] = value;
    });

    console.log(name);

    fetch(`https://watch-wave-five.vercel.app/update/${name}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          swal("Product updated successfully");
        }
      })
      .catch((err) => {
        swal(err.toString());
      });
  };

  fetch(`https://watch-wave-five.vercel.app/update/${name}`)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setDefaultData(data);
      }
    })
    .catch((err) => console.error(err));

  const { Image, Name, Type, Price, Rating } = defaultData;

  return (
    <div className="add-product-cover absolute top-0 -z-10 flex">
      <form
        onSubmit={handleUpdate}
        className="p-8 my-auto mt-16 w-full lg:w-1/2 bg-white mx-auto">
        <div className="lg:flex gap-3">
          <div className="flex-1">
            {/* Image URL */}
            <div className="form-control">
              <label className="label">
                <span className="label text-gray-400">Image URL</span>
              </label>
              <input
                defaultValue={Image}
                type="text"
                className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
                name="photo"
              />
            </div>
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label text-gray-400">Name</span>
              </label>
              <input
                defaultValue={Name}
                type="text"
                className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
                name="name"
              />
            </div>
            {/* Brand name */}
            <div className="form-control">
              <label className="label">
                <span className="label text-gray-400">Brand Name</span>
              </label>
              <input
                defaultValue={defaultData["Brand Name"]}
                type="text"
                className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
                name="brand-name"
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
                defaultValue={Type}
                type="text"
                className=" bg-transparent outline-none my-3 bottom-line w-full" // Added w-full class
                name="type"
              />
            </div>
            {/* Price */}
            <div className="form-control">
              <label className="label">
                <span className="label text-gray-400">Price</span>
              </label>
              <input
                defaultValue={Price}
                type="number"
                className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
                name="price"
              />
            </div>
            {/* Short description */}
            <div className="form-control">
              <label className="label">
                <span className="label text-gray-400">Short Description</span>
              </label>
              <input
                defaultValue={Rating}
                type="text"
                className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
                name="description"
              />
            </div>
          </div>
        </div>
        {/* Rating */}
        {/* <div className="form-control">
          <label className="label">
            <span className="label text-gray-400">Rating</span>
          </label>
          <input
            defaultValue={4.4}
            type="number"
            className=" bg-transparent outline-none my-3 bottom-line input-bordered w-full" // Added w-full class
            name="rating"
          />
        </div> */}
        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
