import Logo from "./Logo";

function Navbar() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <div className="
      flex
      justify-between
      items-center
      px-8
      py-4
      bg-white/10
      backdrop-blur-lg
      border-b
      border-white/10
    ">
      <Logo />

      <div className="flex items-center gap-6">

        <div className="text-right">
          <h3 className="text-white font-bold">
            {user?.name}
          </h3>

          <p className="text-gray-300 text-sm">
            {user?.role}
          </p>
        </div>

        <button
          onClick={logout}
          className="
            bg-red-500
            hover:bg-red-600
            text-white
            px-4
            py-2
            rounded-lg
            transition
          "
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Navbar;