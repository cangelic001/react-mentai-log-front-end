import { useContext } from 'react';
import { Link } from 'react-router';

import { UserContext } from '../../contexts/UserContext';

import sushi from '../../assets/sushi.svg';
import userpng from '../../assets/user.png';

const NavBarT = () => {
  const { user, setUser } = useContext(UserContext);

  setUser(undefined);
  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };


  return (
    <nav className="bg-yellow-400 dark:bg-yellow-400 fixed w-full z-20 top-0 start-0 border-0 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={sushi} className="h-8" alt="Mentai-Log Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mentai-log</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            
            {/* User profile button */}
            <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={userpng} alt="user photo" />
            </button> 

            {/* Dropdown menu */}
            {user ? (
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                    <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@gmail.com</span>
                </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><Link to='/'>Home</Link></li>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><Link to='#'>Create a New Log</Link></li>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><Link to='#'>My Emotions Dashboard</Link></li>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><Link to='#'>My Logs</Link></li>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><Link to='/' onClick={handleSignOut}>Sign Out</Link></li>
                    </ul>
                </div>
            ) : (
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><Link to='/'>Home</Link></li>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><Link to='/sign-up'>Sign Up</Link></li>
                    </ul>
                </div>
            )};

            {/* Mobile menu button */}
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            </div>
        </div>
    </nav>
  );
};

export default NavBarT;