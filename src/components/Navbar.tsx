import OpenMenu from "../assets/open-menu.png";
import CloseMenu from "../assets/close-menu.png";
import { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        openNav || scrollPosition > 128 ? "bg-zinc-900 p-4" : "p-8"
      }  text-gray-200`}
    >
      <div className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-between">
        <div id="logo" className="tracking-widest">
          INTERIA
        </div>
        <button>
          <img
            src={openNav ? CloseMenu : OpenMenu}
            alt="navigation menu toggle"
            className="w-6 md:hidden"
            onClick={() => setOpenNav(!openNav)}
          />
        </button>
        <div
          className={`${
            !openNav && "hidden"
          } w-full transition-all md:block md:w-auto`}
        >
          <div className="mt-5 flex flex-col items-center space-y-5 md:mt-0 md:flex-row md:space-x-12 md:space-y-0">
            <nav className="flex flex-col space-y-5 text-center md:flex-row md:space-x-12 md:space-y-0">
              <a href="" className="hover:text-white">
                home
              </a>
              <a href="" className="hover:text-white">
                pages
              </a>
              <a href="" className="hover:text-white">
                services
              </a>
              <a href="" className="hover:text-white">
                team
              </a>
              <a href="" className="hover:text-white">
                blog
              </a>
            </nav>
            <button className="rounded-3xl border px-7 py-1 tracking-widest hover:bg-gray-200 hover:text-black">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
