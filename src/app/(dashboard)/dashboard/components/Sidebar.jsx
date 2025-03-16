"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/dashboard/profile" },
    { name: "Manage Users", href: "/dashboard/manage-users" },
    { name: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className=" bg-gray-700 h-screen">
      <ul className="">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={index}
              className={`px-4 py-2 cursor-pointer hover:text-blue-300 hover:bg-blue-950 ${
                isActive ? "text-blue-300 bg-blue-950" : ""
              }`}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
