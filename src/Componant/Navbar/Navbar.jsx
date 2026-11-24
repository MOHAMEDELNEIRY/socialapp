
import { text } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope ,faBell} from "@fortawesome/free-regular-svg-icons";
import { faShareNodes, faUsers , faCompass, faHouse, faMagnifyingGlass, faPlus, faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router";
export default function Navbar() {
  return (
    <nav className="bg-white shadow p-3 text-lg">
      <div className="container max-w-7xl m-auto flex justify-between items-center">
        <div className="left-side flex gap-4 items-center">
          <h1 className="text-2xl ">
            <Link to={`/`} className="space-x-2">
              <FontAwesomeIcon icon={faShareNodes} className="text-blue-500" />
              <span className=" font-bold">SocialHub</span>
            </Link>
          </h1>
          <ul className="hidden md:flex gap-4 items-center"> 
            <li>
              <NavLink to={`/`} className={({isActive})=>`${isActive && 'text-blue-500' } space-x-2 hover:text-blue-500 transition-colors duration-300`}>
                <FontAwesomeIcon icon={faHouse} />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/explore`} className={({isActive})=>`${isActive && 'text-blue-500' } space-x-2 hover:text-blue-500 transition-colors duration-300`}>
                <FontAwesomeIcon icon={faCompass} />
                <span>Explore</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/communities`} className={({isActive})=>`${isActive && 'text-blue-500' } space-x-2 hover:text-blue-500 transition-colors duration-300`}>
                <FontAwesomeIcon icon={faUsers} />
                <span>communities</span>
              </NavLink>
            </li>
          </ul>
        </div>




        <div className="hidden md:flex right-side  gap-5 items-center ">
             <div className="search-input relative hidden xl:block">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input type="search" placeholder="search , posts ,people , topics, ....."
                className="border-2 border-transparent focus:outline-none bg-gray-100 focus:border-blue-400 py-2 px-4 rounded-full pl-11 min-w-72"
                />
             </div>
             <div className="icons space-x-2 text-xl">
                <button className="notification-btn relative cursor-pointer before:w-2 before:h-2 before:bg-red-500 before:rounded-circle before:absolute before:top-0 before:right-0 before:translate-x-1/4 before:-translate-y-1/2">
                    <FontAwesomeIcon icon={faBell} />
                </button>
                <button className="messages-btn relative cursor-pointer before:w-2 before:h-2 before:bg-red-500 before:rounded-circle before:absolute before:top-0 before:right-0 before:translate-x-1/4 before:-translate-y-1/2">
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
             </div>
             <button className="px-4 py-1.5 bg-blue-500 text-white rounded-full cursor-pointer space-x-2 hover:bg-blue-600  transition-color duration-200 ">
                <span>Create post</span>
                <FontAwesomeIcon icon={faPlus} />
             </button>
        </div>
        <button className="text-2xl cursor-pointer md:hidden">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}