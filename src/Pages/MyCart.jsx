import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Utils/AuthHelper";
import toast from "react-hot-toast";

const MyCart = () => {
  const { loading } = useAuth();
  const loadedMovies = useLoaderData();
  const [movies, setMovies] = useState(loadedMovies || {});

  if (loading) {
    return (
      <div className="text-5xl font-bold flex w-full h-screen justify-center items-center">
        <p>Loading..</p>
      </div>
    );
  }

  //   Random Director
  const directorNames = [
    "Steven Spielberg",
    "Quentin Tarantino",
    "Christopher Nolan",
    "Martin Scorsese",
    "James Cameron",
    "David Fincher",
    "Alfred Hitchcock",
    "Stanley Kubrick",
    "Tim Burton",
    "Ridley Scott",
    "Spike Lee",
    "Francis Ford Coppola",
    "Coen Brothers",
    "Paul Thomas Anderson",
    "Wes Anderson",
    "Robert Zemeckis",
    "Ron Howard",
    "Clint Eastwood",
    "Darren Aronofsky",
    "M. Night Shyamalan",
  ];

  const handleRemove = (e, _id) => {
    e.preventDefault();
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://watch-wave-five.vercel.app/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingMovies = loadedMovies.filter(
                (movie) => movie._id !== _id
              );
              setMovies(remainingMovies);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((err) => toast.error(err.toString()));
      }
    });
  };

  return (
    <div className="bg-gray-100 h-screen overflow-auto py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">
          Shopping Cart{movies.length}
        </h1>
        {movies.length && (
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md  mb-4">
                <table className="w-full">
                  <thead className="bg-indigo-500 h-20 text-white sticky w-0 -top-8">
                    <tr>
                      <th className="text-left pl-3 font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Release year</th>
                      <th className="text-left font-semibold">Genre</th>
                      <th className="text-left font-semibold">Director</th>
                      <th className="text-left font-semibold">Remove</th>
                    </tr>
                  </thead>
                  {movies?.map((movie, idx) => (
                    <tbody className="" key={idx}>
                      <tr>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src="https://via.placeholder.com/150"
                              alt="Product image"
                            />
                            <span className="font-semibold">{movie.Name}</span>
                          </div>
                        </td>
                        <td className="py-4">$19.99</td>
                        <td className="text-left">
                          {Math.floor(Math.random() * (2023 - 2020 + 1)) + 2018}
                        </td>
                        <td>{movie.Name}</td>
                        <td>
                          {
                            directorNames[
                              Math.floor(Math.random() * directorNames.length)
                            ]
                          }
                        </td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              onClick={(e) => handleRemove(e, movie._id)}
                              className="border rounded-md py-2 bg-red-300 text-white font-bold px-4 mr-2">
                              -
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* More product rows */}
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
            <div className="md:w-1/4 sticky top-0">
              <div className="bg-white rounded-lg sticky top-0 shadow-md p-6">
                <h1 className="text-lg font-semibold mb-4">Summary</h1>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$19.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">$21.98</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
