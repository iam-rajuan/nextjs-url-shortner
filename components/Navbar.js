"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Shorten", href: "/shorten" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white fixed w-full top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          Bit<span className="text-yellow-300">Links</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-yellow-300 transition-all duration-200 ${
                  pathname === item.href ? "text-yellow-300 font-semibold" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-md px-4 py-1 font-semibold shadow-md transition-all">
                Try Now
              </button>
            </Link>
            <Link
              href="https://github.com/iam-rajuan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-yellow-400 hover:bg-yellow-400 hover:text-black rounded-md px-4 py-1 font-semibold shadow-md transition-all">
                GitHub
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-purple-800 text-white flex flex-col gap-4 py-4 px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`${
                pathname === item.href ? "text-yellow-300 font-semibold" : ""
              } hover:text-yellow-300 transition-all`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            <Link href="/shorten" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black rounded-md px-4 py-2 font-semibold shadow-md transition-all">
                Try Now
              </button>
            </Link>
            <Link
              href="https://github.com/iam-rajuan"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <button className="w-full border border-yellow-400 hover:bg-yellow-400 hover:text-black rounded-md px-4 py-2 font-semibold shadow-md transition-all">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;












// import React from 'react'
// import Link from 'next/link'

// const Navbar = () => {
//   return (
//     <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white '>
//       <div className="logo font-bold text-2xl"> 
//         <Link href="/">BitLinks</Link>
//       </div>
//       <ul className='flex justify-center gap-4 items-center'>
//         <Link href="/"><li>Home</li></Link>
//         <Link href="/about"><li>About</li></Link>
//         <Link href="/shorten"><li>Shorten</li></Link>
//         <Link href="/contact"><li>Contact Us</li></Link>
//         <li className='flex gap-3'>
//           <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
//           <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>GitHub</button></Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar