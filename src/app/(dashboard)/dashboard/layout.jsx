import Sidebar from "./components/Sidebar";
import "../../globals.css";
const DashboardLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body className={``}>
          <div className="flex">
            <aside className="h-screen">
              <Sidebar />
            </aside>
            <main className="p-2">{children}</main>
          </div>
        </body>
      </html>
    </>
  );
};

export default DashboardLayout;
