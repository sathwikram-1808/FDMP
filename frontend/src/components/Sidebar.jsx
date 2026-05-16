import { Link } from "react-router-dom";

import {
  FaHome,
  FaDonate,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";

function Sidebar() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="
      w-72
      h-screen
      bg-slate-900
      text-white
      p-6
      flex
      flex-col
      gap-6
      shadow-2xl
    ">

      <Link
        to="/dashboard"
        className="
          flex
          items-center
          gap-3
          hover:bg-slate-800
          p-3
          rounded-lg
          transition
        "
      >
        <FaHome />
        Dashboard
      </Link>

      {user?.role === "donor" && (
        <Link
          to="/donor"
          className="
            flex
            items-center
            gap-3
            hover:bg-slate-800
            p-3
            rounded-lg
            transition
          "
        >
          <FaDonate />
          Donor Module
        </Link>
      )}

      {user?.role === "volunteer" && (
        <Link
          to="/volunteer"
          className="
            flex
            items-center
            gap-3
            hover:bg-slate-800
            p-3
            rounded-lg
            transition
          "
        >
          <FaUsers />
          Volunteer Module
        </Link>
      )}

      {user?.role === "admin" && (
        <Link
          to="/admin"
          className="
            flex
            items-center
            gap-3
            hover:bg-slate-800
            p-3
            rounded-lg
            transition
          "
        >
          <FaChartBar />
          Admin Dashboard
        </Link>
      )}

    </div>
  );
}

export default Sidebar;