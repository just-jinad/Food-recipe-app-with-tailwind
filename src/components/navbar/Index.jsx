import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GLobalContext } from "../../contexts";
const Navbar = () => {
  const {searchParam, setSearchParam, handleSubmit} = useContext( GLobalContext)
  console.log(searchParam);
  return (
    <>
      <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h3 className="text-2xl font-semibold"> <Link to={'/'}>Food Recipe</Link></h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(e)=> setSearchParam(e.target.value)}
            placeholder="Enter item"
            className="bg-white/75 p-3 px-8 rounded-full outline-none 
            lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 "
          />
        </form>
        <ul className="flex gap-5">
            <li>
                <Link to={'/'} className="text-black hover:text-gray-700 duration-300">Home</Link>
            </li>
      

            <li>
                <Link to={'/favorites'} className="text-black hover:text-gray-700 duration-300 ">Favorites</Link>
            </li>
            </ul>
      
      </nav>
    </>
  );
};

export default Navbar;
