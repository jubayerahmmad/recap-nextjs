import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="p-4 bg-gray-800">
      <ul className="flex items-center gap-6">
        <li>
          <Link prefetch href="/">
            Home
          </Link>
        </li>
        <li>
          <Link prefetch href="/about">
            About
          </Link>
        </li>
        <li>
          <Link prefetch href="/products">
            Products
          </Link>
        </li>
        <li>
          <Link prefetch href="/blogs">
            Blogs
          </Link>
        </li>
        <li>
          <Link prefetch href="/parallel-routes">
            Parallel Route
          </Link>
        </li>
        <li>
          <Link prefetch href="/dashboard/profile">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
