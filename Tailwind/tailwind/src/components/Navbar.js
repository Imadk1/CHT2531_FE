import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return ( 
      <>
         <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
            <div className="flex self-start items-center flex-shrink-0 text-white mr-6 ">
                <img src={logo} className="fill-current mr-2" width="80" height="80" alt="logo" />
                <Link><span className="font-semibold text-xl tracking-tight">Imad's React App</span></Link>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div 
                className={"w-full block lg:flex lg:items-center lg:w-auto" +
                (navbarOpen ? "" : " hidden")}  
            >
                <div className="lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                        Docs
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                        Examples
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
                        Blog
                    </a>
                </div>
            </div>
        </nav>
      </>
    );
}
