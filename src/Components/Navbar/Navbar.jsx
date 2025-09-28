import React, { useState } from "react";
import {Link, LinkMd} from "./Link";
import { Menu, X } from "lucide-react";
const urls = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
    const links = urls.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))
    const links2 = urls.map((route) => (
          <LinkMd
           key={route.id} route={route}></LinkMd>
        ))
    const [open , setOpen] = useState(true)
  return (
    <nav className="flex my-3 justify-between  text-black">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? <Menu className="md:hidden"></Menu> : <X className="font-bold"></X>}
        <ul className={`md:hidden absolute duration-1000 ${open ?'-top-50 ': 'top-23 '}`}>
            {links2}
        </ul>
        <h3 className="ml-3 lg:ml-0">Navbar</h3>
      </span>
      <ul className="md:flex hidden ">
        {links}
      </ul>
      {/* <ul className='flex '>
                {
                    urls.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}
      {/* <ul className='flex'>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
                <li className='mr-10'><a href="/">Home</a></li>
            </ul> */}
      <button>Sing In</button>
    </nav>
  );
};

export default Navbar;
