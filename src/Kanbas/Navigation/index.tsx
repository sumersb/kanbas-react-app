import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { IoStorefront } from "react-icons/io5";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox }];
  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0">
      <a id="wd-account-link" target="_blank" href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0">
        <img src="/images/NEU.png" width="75px" /></a>
      <Link key="/Kanbas/Account" to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </Link>
      ))}
      <a href="https://github.com/sumersb/kanbas-react-app" target="_blank" className={`list-group-item bg-black text-center border-0 text-white
              ${pathname.includes("Frontend Repository") ? "text-danger bg-white" : "bg-black"}`}>
        <IoStorefront className="fs-1 text-danger" />
        <br />
        Frontend
      </a>
      <a href="https://github.com/sumersb/kanbas-node-server-app" target="_blank" className={`list-group-item bg-black text-center border-0 text-white
              ${pathname.includes("Backend Repository") ? "text-danger bg-white" : "bg-black"}`}>
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Backend
      </a>
    </div>
  );
}
