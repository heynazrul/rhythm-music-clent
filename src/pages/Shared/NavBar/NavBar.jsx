import { Link, NavLink } from 'react-router-dom';

import ThemeChanger from '../../../components/theme-changer/ThemeChanger';

import logoLight from '../../../assets/logo/logo-light.svg';
import logoDark from '../../../assets/logo/logo-dark.svg';
import { useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const NavBar = ({ setCurrentTheme, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef();
  // const navigate = useNavigate()

  const { user, logOut, setLoading } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Logged Out!');
        setLoading(false);
        // navigate('/', {replace: true})
      })
      .catch((error) => console.log(error));
  };

  const handleMenuOpen = () => {
    dropdown.current.classList.toggle('dropdown-open');
    document.activeElement.blur();
    setIsOpen(!isOpen);
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to={'/'}
          className={({ isActive }) => isActive && 'bg-secondary font-semibold'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/instructors'}
          className={({ isActive }) => isActive && 'bg-secondary font-semibold'}>
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/classes'}
          className={({ isActive }) => isActive && 'bg-secondary font-semibold'}>
          Classes
        </NavLink>
      </li>
    </>
  );

  const userNavItem = (
    <>
      {user && (
        <Link
          to={'/dashboard'}
          className="btn btn-neutral btn-sm ">
          Dashboard
        </Link>
      )}

      {/* Conditional Login button */}
      {user ? (
        <>
          <Link
            onClick={handleLogOut}
            className="btn btn-primary btn-sm">
            Logout
          </Link>
        </>
      ) : (
        <Link
          to={'/login'}
          className="btn btn-primary btn-sm ml-2">
          Login
        </Link>
      )}
    </>
  );
  return (
    <div className="bg-base-100 sticky top-0 z-50 border-b bg-opacity-95">
      <div className="navbar  h-24 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div>
            <Link
              to={'/'}
              className="">
              <img
                src={currentTheme === 'dark' || currentTheme === 'dracula' ? logoDark : logoLight}
                alt=""
                className="w-[90px] sm:w-[120px] object-cover"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end items-center space-x-3">
          <div className="hidden lg:block">
            <ThemeChanger setCurrentTheme={setCurrentTheme}></ThemeChanger>
          </div>
          {user && (
            <Link
              to={'/dashboard'}
              className="btn btn-neutral btn-sm hidden lg:inline-flex">
              Dashboard
            </Link>
          )}

          {/* Conditional User Profile */}
          {user && (
            <Link
              to={'/'}
              className="inline-block">
              <div
                className="avatar tooltip  tooltip-bottom"
                data-tip={`${user?.displayName ? user.displayName : ''}`}>
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <FaUserCircle size={32}></FaUserCircle>
                  )}
                </div>
              </div>
            </Link>
          )}
          {/* Conditional Login button */}
          {user ? (
            <>
              <Link
                onClick={handleLogOut}
                className="btn btn-primary btn-sm ml-2 hidden lg:inline-flex">
                Logout
              </Link>
            </>
          ) : (
            <Link
              to={'/login'}
              className="btn btn-primary btn-sm ml-2">
              Login
            </Link>
          )}

          {/* Mobile Menu */}
          <div
            className="dropdown dropdown-end ml-2 "
            ref={dropdown}>
            <label
              tabIndex={0}
              className="swap swap-rotate lg:hidden">
              <input
                onChange={handleMenuOpen}
                type="checkbox"
                checked={isOpen ? true : false}
              />
              {/* hamburger icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* <!-- close icon --> */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            {/* <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label> */}
            <ul
              tabIndex={0}
              className="menu menu-sm space-y-2 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden ">
              {navItems}
              <ThemeChanger setCurrentTheme={setCurrentTheme}></ThemeChanger>
              {userNavItem}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
