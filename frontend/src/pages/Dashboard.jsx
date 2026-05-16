import DashboardLayout from "../layouts/DashboardLayout";

import { motion } from "framer-motion";

function Dashboard() {
  return (
    <DashboardLayout>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-8
  "
>

  {/* TOTAL DONATIONS */}

  <div className="
    relative
    overflow-hidden
    rounded-[34px]
    bg-gradient-to-br
    from-cyan-500
    via-blue-600
    to-indigo-700
    shadow-2xl
    h-[230px]
    p-8
    flex
    justify-center
    items-center
    text-center
    hover:scale-[1.02]
    transition
  ">

    <div className="
      absolute
      -top-16
      -right-16
      w-56
      h-56
      bg-white/10
      rounded-full
    "></div>

    <div className="z-10">

      <h2 className="
        text-3xl
        font-bold
        text-white
      ">
        Total Donations
      </h2>

      <p className="
        text-gray-200
        mt-3
        text-lg
      ">
        Overall food donations
      </p>

      <div className="
        text-8xl
        font-extrabold
        text-white
        mt-6
        leading-none
      ">
        120
      </div>

    </div>

  </div>

  {/* VOLUNTEERS */}

  <div className="
    relative
    overflow-hidden
    rounded-[34px]
    bg-gradient-to-br
    from-green-500
    via-emerald-600
    to-teal-700
    shadow-2xl
    h-[230px]
    p-8
    flex
    justify-center
    items-center
    text-center
    hover:scale-[1.02]
    transition
  ">

    <div className="
      absolute
      -top-16
      -right-16
      w-56
      h-56
      bg-white/10
      rounded-full
    "></div>

    <div className="z-10">

      <h2 className="
        text-3xl
        font-bold
        text-white
      ">
        Volunteers
      </h2>

      <p className="
        text-gray-200
        mt-3
        text-lg
      ">
        Active volunteer network
      </p>

      <div className="
        text-8xl
        font-extrabold
        text-white
        mt-6
        leading-none
      ">
        45
      </div>

    </div>

  </div>

  {/* COMPLETED DELIVERIES */}

  <div className="
    relative
    overflow-hidden
    rounded-[34px]
    bg-gradient-to-br
    from-orange-500
    via-red-500
    to-pink-600
    shadow-2xl
    h-[230px]
    p-8
    flex
    justify-center
    items-center
    text-center
    hover:scale-[1.02]
    transition
  ">

    <div className="
      absolute
      -top-16
      -right-16
      w-56
      h-56
      bg-white/10
      rounded-full
    "></div>

    <div className="z-10">

      <h2 className="
        text-3xl
        font-bold
        text-white
      ">
        Completed Deliveries
      </h2>

      <p className="
        text-gray-200
        mt-3
        text-lg
      ">
        Successfully fulfilled
      </p>

      <div className="
        text-8xl
        font-extrabold
        text-white
        mt-6
        leading-none
      ">
        89
      </div>

    </div>

  </div>

</motion.div>
    </DashboardLayout>
  );
}

export default Dashboard;