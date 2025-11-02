import React from "react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaGlobe } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    {
      id: 1,
      icon: <IoLogoGithub size={20} />,
      label: "GitHub",
      url: "https://github.com/iam-rajuan",
    },
    {
      id: 2,
      icon: <FaLinkedinIn size={20} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/iam-rajuan/",
    },
    {
      id: 3,
      icon: <FaGlobe size={20} />,
      label: "Portfolio",
      url: "https://iam-rajuan-portfolio.vercel.app/",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide">
            Bit<span className="text-yellow-300">Links</span>
          </h2>
          <p className="text-sm text-purple-200">
            Simple, fast, and secure URL shortener.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-5">
          {socialIcons.map((icon) => (
            <Link
              key={icon.id}
              href={icon.url}
              target="_blank"
              aria-label={icon.label}
              className="hover:text-yellow-300 transition-all"
            >
              {icon.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm text-purple-200">
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://iam-rajuan-portfolio.vercel.app/"
            className="hover:text-yellow-300 font-semibold transition-all"
            target="_blank"
          >
            iam-rajuan
          </Link>{" "}
          — Developed with ❤️ using Next.js & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
