// functional imports
import { Outlet } from "react-router-dom";
import { Announcement } from "../Announcement/Announcement";
import { Navigation } from "../Navbar/Navigation";
import { Tabs } from "../Tabs/Tabs";

export const Layout = () => {
  return (
    <div>
      <Announcement />
      <Navigation />
      <Tabs/>
      <Outlet />
    </div>
  );
};
