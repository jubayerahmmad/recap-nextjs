import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="p-4 bg-gray-800">
      <ul className="flex items-center gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/_blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/dashboard/profile">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
