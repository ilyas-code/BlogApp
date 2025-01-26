import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { authUser } from "../App";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function MainNav() {
  const { signout, isAuthenticated, username } = useContext(AuthContext);

  //navigation links
  const navigation = [
    { name: "Home", href: "/Home", current: false },
    { name: "Dashboard", href: `/main/${username}`, current: false },
  ];

  const navNormal = [
    { name: "Home", href: "/Home", current: false },
    { name: "Login", href: "/login", current: false },
  ];


  // setting  active state of navigation for current page update

  // search bar functionality
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
// eslint-disable-next-line react-hooks/exhaustive-deps
    if (isAuthenticated) {
       navigate(`/main/${username}`);
    }
  }, [isAuthenticated]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // onSearch(query);
    console.log("searched for", query);
  };

  function handleLogout(event) {
    event.preventDefault();
    localStorage.setItem("userName", null);
    signout();
    navigate("/home", { replace: true });
    console.log("signed out");
  }


  return isAuthenticated ? (
    <Disclosure as="nav" className="bg-neutral-900 z-2">
    <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className=" left-0 flex items-center sm:hidden">
          {/* Mobile menu button*/}
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="block size-6 group-data-[open]:hidden"
            />
            <XMarkIcon
              aria-hidden="true"
              className="hidden size-6 group-data-[open]:block"
            />
          </DisclosureButton>
        </div>
        <div className="flex flex-row items-center justify-center sm:items-stretch sm:justify-start">
          <div className=" flex shrink-0 items-center ">
            <div className="min-[320px]:max-lg:hidden text-white font-semibold text-lg " >BlogBox</div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={({ isActive }) =>
                    [
                      isActive
                        ? "bg-gray-600 text-white no-underline hover:no-underline"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline",
                      " rounded-md px-3 py-2 text-sm font-medium no-underline",
                    ].join("")
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        {/* search bar */}
        <form onSubmit={handleSearch} className=" relative flex flex-row items-center w-75  lg:mx-5" >
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            className="w-full text-white p-2 px-4 rounded-full focus:border-none bg-neutral-800"
            placeholder="Search..."
          />
          <button type="submit" className="absolute right-5">
            <MagnifyingGlassIcon className=" size-6 bg-slate inline-block stroke-white" />
          </button>
        </form>
        <div className=" right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 ml-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full object-cover"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700  data-[focus]:bg-gray-100 data-[focus]:outline-none no-underline hover:no-underline"
                  >
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none no-underline hover:no-underline"
                  >
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="Home"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none no-underline hover:no-underline"
                    onClick={handleLogout}
                  >
                    Sign out
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className="no-underline text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  ) : (
    // <nav
    //   className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-sm"
    //   aria-label="Main navigation"
    // >
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="#">
    //       BlogBox
    //     </Link>
    //     <button
    //       className="navbar-toggler p-0 border-0"
    //       type="button"
    //       id="navbarSideCollapse"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div
    //       className="navbar-collapse offcanvas-collapse"
    //       id="navbarsExampleDefault"
    //     >
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/Home">
    //             <i className="bi bi-house px-1"></i>Home
    //           </Link>
    //         </li>

    //         <li className="nav-item dropdown">
    //           <Link
    //             className="nav-link dropdown-toggle"
    //             to="#"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             <i className="bi bi-person px-1"></i>Profile
    //           </Link>
    //           <ul className="dropdown-menu">
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Action
    //               </Link>
    //             </li>
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Another action
    //               </Link>
    //             </li>
    //             <li>
    //               <Link className="dropdown-item" to="/login">
    //                 Signin
    //               </Link>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //       <form className="d-flex" role="search">
    //         <div className="input-group">
    //           <input
    //             className="form-control text-bg-light"
    //             type="search"
    //             placeholder="Search"
    //             aria-label="Search"
    //           />
    //           <button className="btn btn-light" type="submit">
    //             <i className="fa-solid fa-magnifying-glass"></i>
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </nav>

    <Disclosure as="nav" transition className="pt-0 mt-0 top-0 bg-neutral-900 fixed w-100 z-20 transition delay-150 duration-300 ease-in-out  ">
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className=" left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-row items-center justify-center sm:items-stretch sm:justify-start">
            <div className=" flex shrink-0 items-center ">
              <div className=" text-white font-semibold text-lg " >BlogBox</div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navNormal.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={({ isActive }) =>
                      [
                        isActive
                          ? "bg-gray-600 text-white no-underline hover:no-underline"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline",
                        " rounded-md px-3 py-2 text-sm font-medium no-underline",
                      ].join("")
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          {/* search bar */}
          <form onSubmit={handleSearch} className=" relative flex flex-row items-center w-75 min-[320px]:max-lg:hidden" >
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              className="w-full text-white p-2 px-4 rounded-full focus:border-none bg-neutral-800"
              placeholder="Search..."
            />
            <button type="submit" className="absolute right-5">
              <MagnifyingGlassIcon className=" size-6 bg-slate inline-block stroke-white" />
            </button>
          </form>
          <div className=" right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            {/* <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700  data-[focus]:bg-gray-100 data-[focus]:outline-none no-underline hover:no-underline"
                  >
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none no-underline hover:no-underline"
                  >
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="Home"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none no-underline hover:no-underline"
                    onClick={handleLogout}
                  >
                    Sign out
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu> */}
          </div>
        </div>
      </div>

      <DisclosurePanel transition className=" sm:hidden fill-white" >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navNormal.map((item) => (
             <NavLink
             key={item.name}
             to={item.href}
            //  aria-current={item.current ? "page" : undefined}
             className="no-underline text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
           >
             {item.name}
           </NavLink>
          ))}
        </div>
        <form onSubmit={handleSearch} className=" space-y-1 px-2 pb-3 pt-2" >
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              className="w-full text-white p-2 px-4 rounded-full focus:border-none bg-neutral-800"
              placeholder="Search..."
            />
            <button type="submit" className="absolute right-5">
              <MagnifyingGlassIcon className=" size-6 bg-slate inline-block stroke-white" />
            </button>
          </form>
      </DisclosurePanel>
    </Disclosure>
    
  );
}

export default MainNav;
