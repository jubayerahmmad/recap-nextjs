import Link from "next/link";

const ArchivedNotifications = () => {
  return (
    <div className="p-16 rounded-2xl border border-gray-500 text-2xl font-bold text-center">
      Archived Notifications
      <div className="text-lg text-blue-500">
        <Link href="/parallel-routes">Default</Link>
      </div>
    </div>
  );
};

export default ArchivedNotifications;
