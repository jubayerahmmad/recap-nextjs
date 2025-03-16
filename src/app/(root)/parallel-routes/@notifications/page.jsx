import Link from "next/link";

const Notifications = () => {
  return (
    <div className="p-16 rounded-2xl border border-gray-500 text-2xl font-bold text-center">
      Notifications
      <div className="text-lg text-blue-500">
        <Link href="/parallel-routes/archived">Archived</Link>
      </div>
    </div>
  );
};

export default Notifications;
