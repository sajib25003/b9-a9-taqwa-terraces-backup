import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import defaultUserImage from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut,loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
    if (loading) {
        return (
          <div className=" flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg  text-warning"></span>
          </div>
        );
      }
  const navLinks = (
    <>
      <li className="font-bold text-green-700 ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold text-green-700 ">
        <NavLink to="/updateProfile">Update Profile</NavLink>
      </li>
      {!user && (
        <li className="font-bold text-green-700 ">
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
      <li className="font-bold text-green-700 ">
        <NavLink to="/faq">FAQs</NavLink>
      </li>
      <li className="font-bold text-green-700 ">
        <NavLink to="/map">Location</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-blue-200 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a
          href="/"
          className="btn btn-ghost text-lg md:text-xl lg:text-3xl font-extrabold text-blue-700"
        >
          Taqwa Terraces
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* user profile */}
      <div className="navbar-end gap-3 mr-4">
        {user ? (
          <div className="dropdown dropdown-end dropdown-bottom md:dropdown-left  relative flex gap-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar w-10"
            >
              <div
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                data-tooltip-place="left"
                className="w-10 rounded-full"
              >
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.photoURL || defaultUserImage}
                />
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-lime-100 rounded-box w-60"
              >
                <li>
                  <a href="/updateProfile" className="justify-between font-bold">
                    {user.displayName}
                  </a>
                </li>
                <li className=" font-medium" onClick={handleLogOut}>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex">
              <Link
                to="/login"
                onClick={handleLogOut}
                className="lg:mr-4 btn text-white bg-gray-700 font-bold border-none"
              >
                Log Out
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <Link
              className="mr-4 btn bg-gray-700 text-white font-bold border-none"
              to="/login"
            >
              Login
            </Link>
          </div>
        )}

        {/* toggle login & logout button */}
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
