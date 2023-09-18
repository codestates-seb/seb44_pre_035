import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineAppstore,
  AiOutlineGithub,
} from 'react-icons/ai';
import { SiNotion } from 'react-icons/si';

export default function Navbar() {
  return (
    <nav className="flex flex-col justify-between bg-[#141414] text-white w-56 h-full fixed">
      <div className="nav-top w-full">
        <div className="nav-profile w-full h-48 flex flex-col justify-evenly items-center">
          <AiOutlineUser
            size="70"
            className="rounded-full border-4 border-white"
          />
          <div className="w-full flex justify-evenly">
            <AiOutlineHeart size="40" />
            <AiOutlineBell size="40" />
          </div>
        </div>
        <div className="nav-menu w-full h-60 my-5 flex flex-col justify-between">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blueWhite' : 'text-white'
            }
          >
            <div className="flex ml-7 items-center">
              <AiOutlineHome size="50" />
              <span className="text-3xl mx-2">Home</span>
            </div>
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? 'text-blueWhite' : 'text-white'
            }
          >
            <div className="flex ml-7 items-center">
              <AiOutlineSearch size="50" />
              <span className="text-3xl mx-2">Search</span>
            </div>
          </NavLink>
          <NavLink
            to="/category"
            className={({ isActive }) =>
              isActive ? 'text-blueWhite' : 'text-white'
            }
          >
            <div className="flex ml-7 items-center">
              <AiOutlineAppstore size="50" />
              <span className="text-3xl mx-2">Category</span>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="nav-bottom w-full h-20 flex justify-evenly items-center">
        <a
          href="https://boiled-november-915.notion.site/5c611de12858456da96816d36c9aa8b7"
          target="_blank"
          rel="noreferrer"
        >
          <SiNotion size="50" />
        </a>
        <a
          href="https://github.com/FE-Sprint-Study/Movie-Wiki"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub size="50" />
        </a>
      </div>
    </nav>
  );
}
