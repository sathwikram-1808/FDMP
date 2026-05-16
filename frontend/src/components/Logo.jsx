import { FaHandHoldingHeart } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <FaHandHoldingHeart
        className="text-4xl text-yellow-400"
      />

      <div>
        <h1 className="text-2xl font-bold text-white">
          FDMP
        </h1>

        <p className="text-sm text-gray-300">
          Food Donation Platform
        </p>
      </div>
    </div>
  );
}

export default Logo;