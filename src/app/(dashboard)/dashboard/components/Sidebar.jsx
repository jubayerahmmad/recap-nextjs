import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="p-6 bg-gray-700 h-screen">
      <ul className="space-y-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link href="/dashboard/manage-users">Manage Users</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
