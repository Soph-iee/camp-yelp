import { useState } from "react";
import data from "./data";
import Carousel from './carousel'

export default function App() {
  return (
    <>
      <Hero />
      <CampgroundList />
      <AddNewCampground />
      <Carousel/>
    </>
  );
}
function Hero() {
  return (
    <div className=" h-screen  grid grid-cols-[1fr_1fr] gap-16">
      <div className=" w-full px-16 justify-self-center">
        <div className="my-12 mx-6">
          <img className="" src={"/Assets/logo.svg"} alt="logo" />
        </div>
        <div className="text-base">
          <header className="font-bold text-5xl">
            Explore the best camps on earth
          </header>
          <p className="text-slate-900 my-5 ">
            YelpCamp is a curated list of the best camping spots on earth.
            Unfiltered and unbiased reviews
          </p>
          <ul className=" text-slate-900 flex flex-col gap-5">
            <li className="flex gap-3">
              <span className="">
                <img src={"/Assets/Checkmark.svg"} alt="checkmark" />
              </span>
              Add your own camp suggestions
            </li>
            <li className="flex gap-3">
              <span>
                <img src={"/Assets/Checkmark.svg"} alt="checkmark" />
              </span>
              Leave reviews and experiences
            </li>
            <li className="flex gap-3">
              <span>
                <img src={"/Assets/Checkmark.svg"} alt="checkmark" />
              </span>
              See locations for all camps
            </li>
          </ul>
          <button className="button font-semibold bg-black text-slate-300 p-4 inline-block m-4 rounded-lg">
            View Campgrounds
          </button>
          <p className=" text-slate-900"> Partnered with:</p>
          <div className="flex gap-3">
            <img src={"/Assets/Airbnb.svg"} alt="airbnb" />
            <img src={"/Assets/Booking.svg"} alt="booking" />
            <img src={"/Assets/Plum Guide.svg"} alt="plumguide" />
          </div>
        </div>
      </div>
      <div>
        <img
          className="object-contain w-full h-screen"
          alt="hero"
          src={"/Assets/Hero Image.jpg"}
        />
      </div>
    </div>
  );
}
function CampgroundList() {
  return (
    <div className="my-40 mx-10">
      {data && data.length > 0 ? (
        <div className="  grid grid-cols-3 gap-10">
          {data.map((campground) => (
            <div
              className="rounded-lg gap-2 flex flex-col justify-between p-4 border border-slate-500"
              key={campground.id}
            >
              <div className="font-bold uppercase"> {campground.name}</div>
              <img
                className="hover:scale-"
                src={campground.image}
                alt={campground.name}
              />
              <p className="mx-8 mt-4">{campground.description}</p>
              <button
                className="rounded-lg  font-bold p-4 capitalize self-center
               bg-black text-white  hover:bg-slate-200 hover:text-black"
              >
                view campground
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
function AddNewCampground() {
  const [campgroundName, setCampgroundName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setimage] = useState("");
  const [campDescription, setCampDescription] = useState("");
  const handlelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    // "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
    <form className=" flex flex-col align-middle capitalize mx-10 bg-gray-100 shadow-md gap-2">
      <div className="font-bold text-3xl pb-4 capitalize">
        add new campground
      </div>
      <div className="campgroundName">
        <label className="block text-gray-700  font-bold mb-2" 
        htmlFor="campgroundName">
          Campground Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="campgroundName"
          type="text"
          placeholder="Campground Name"
        />
      </div>{" "}
      <div>
        <label className="block text-gray-700  font-bold mb-2" 
        htmlFor="price">
          Price
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price"
          type="number"
          placeholder="$ 145"
        />
      </div>
      <div>
        <label className="block text-gray-700  font-bold mb-2" 
        htmlFor="image">
          Camp Image
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="image"
          type="url"
          placeholder="Camp Image"
        />
      </div>
      <div>
        <label className="block text-gray-700  font-bold mb-2" 
        htmlFor="description">
          Description
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          placeholder="Description"
        />
      </div>
      <button className="button font-semibold bg-black text-slate-300 p-4 inline-block m-4 rounded-lg">
        Add Campground
      </button>
    </form>
  );
}
