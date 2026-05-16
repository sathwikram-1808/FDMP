import {
  useEffect,
  useState,
} from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import DashboardLayout from "../layouts/DashboardLayout";

import API from "../services/api";

function Admin() {

  const [donations, setDonations] =
    useState([]);

  const fetchDonations = async () => {
    try {

      const response =
        await API.get("/donations");

      setDonations(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const pendingCount =
    donations.filter(
      (d) => d.status === "Pending"
    ).length;

  const acceptedCount =
    donations.filter(
      (d) => d.status === "Accepted"
    ).length;

  const completedCount =
    donations.filter(
      (d) => d.status === "Completed"
    ).length;

  const chartData = [
    {
      name: "Pending",
      value: pendingCount,
    },

    {
      name: "Accepted",
      value: acceptedCount,
    },

    {
      name: "Completed",
      value: completedCount,
    },
  ];

  const COLORS = [
    "#facc15",
    "#3b82f6",
    "#22c55e",
  ];

  return (
    <DashboardLayout>

      <div className="p-8">

        {/* HEADER */}

        <div className="mb-12">

          <h1 className="
            text-6xl
            font-extrabold
            bg-gradient-to-r
            from-cyan-400
            via-purple-500
            to-pink-500
            bg-clip-text
            text-transparent
          ">
            Admin Dashboard
          </h1>

          <p className="
            text-gray-300
            mt-3
            text-lg
          ">
            Track all donations,
            volunteers and deliveries
          </p>

        </div>{/* STATS */}

<div className="
  grid
  grid-cols-1
  md:grid-cols-2
  xl:grid-cols-3
  gap-8
  mb-12
">

  {/* TOTAL REQUESTS */}

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
        Total Requests
      </h2>

      <p className="
        text-gray-200
        mt-3
        text-lg
      ">
        Overall donation requests
      </p>

      <div className="
        text-8xl
        font-extrabold
        text-white
        mt-6
        leading-none
      ">
        {donations.length}
      </div>

    </div>

  </div>

  {/* PENDING */}

  <div className="
    relative
    overflow-hidden
    rounded-[34px]
    bg-gradient-to-br
    from-pink-500
    via-fuchsia-600
    to-purple-700
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
        Pending Requests
      </h2>

      <p className="
        text-gray-200
        mt-3
        text-lg
      ">
        Waiting for volunteers
      </p>

      <div className="
        text-8xl
        font-extrabold
        text-white
        mt-6
        leading-none
      ">
        {pendingCount}
      </div>

    </div>

  </div>

  {/* COMPLETED */}

  <div className="
    relative
    overflow-hidden
    rounded-[34px]
    bg-gradient-to-br
    from-emerald-500
    via-green-600
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
        Completed Jobs
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
        {completedCount}
      </div>

    </div>

  </div>

</div>

        {/* ANALYTICS + TABLE */}

        <div className="
          grid
          grid-cols-1
          xl:grid-cols-12
          gap-8
          items-start
        ">

          {/* CHART */}

          <div className="
            xl:col-span-4
            glass
            p-8
            h-[620px]
            flex
            flex-col
          ">

            <h2 className="
              text-3xl
              font-bold
              text-white
              mb-6
            ">
              Request Analytics
            </h2>

            <div className="
              flex-1
              flex
              justify-center
              items-center
            ">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={chartData}
                    dataKey="value"
                    outerRadius={150}
                    innerRadius={90}
                    paddingAngle={5}
                    label
                  >

                    {chartData.map(
                      (entry, index) => (

                        <Cell
                          key={index}
                          fill={COLORS[index]}
                        />

                      )
                    )}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* TABLE */}

          <div className="
            xl:col-span-8
            glass
            p-8
            min-h-[620px]
            overflow-x-auto
          ">

            <div className="
              flex
              justify-between
              items-center
              mb-8
            ">

              <h2 className="
                text-3xl
                font-bold
                text-white
              ">
                All Requests
              </h2>

              <div className="
                text-sm
                text-gray-300
              ">
                Live Request Tracking
              </div>

            </div>

            <table className="
              w-full
              text-white
            ">

              <thead>

                <tr className="
                  border-b
                  border-white/10
                ">

                  <th className="p-5 text-left">
                    Food
                  </th>

                  <th className="p-5 text-left">
                    Quantity
                  </th>

                  <th className="p-5 text-left">
                    Donor
                  </th>

                  <th className="p-5 text-left">
                    Volunteer
                  </th>

                  <th className="p-5 text-left">
                    Priority
                  </th>

                  <th className="p-5 text-left">
                    Status
                  </th>

                  <th className="p-5 text-left">
                    Completion
                  </th>

                </tr>

              </thead>

              <tbody>

                {donations.map((item) => (

                  <tr
                    key={item._id}
                    className="
                      border-b
                      border-white/5
                      hover:bg-white/5
                      transition
                    "
                  >

                    <td className="p-5">
                      {item.foodType}
                    </td>

                    <td className="p-5">
                      {item.quantity}
                    </td>

                    <td className="
                      p-5
                      text-cyan-400
                      font-bold
                    ">
                      {item.donorName}
                    </td>

                    <td className="
                      p-5
                      text-green-400
                      font-bold
                    ">
                      {item.volunteer}
                    </td>

                    <td className="p-5">

                      <span className={`
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-bold

                        ${
                          item.priority ===
                          "High"
                            ? "bg-red-500"
                            : item.priority ===
                              "Medium"
                            ? "bg-yellow-500 text-black"
                            : "bg-blue-500"
                        }
                      `}>

                        {item.priority}

                      </span>

                    </td>

                    <td className="p-5">

                      <span className={`
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-bold

                        ${
                          item.status ===
                          "Pending"
                            ? "bg-yellow-500 text-black"
                            : item.status ===
                              "Accepted"
                            ? "bg-blue-600"
                            : "bg-green-600"
                        }
                      `}>

                        {item.status}

                      </span>

                    </td>

                    <td className="p-5">

                      {
                        item.status ===
                        "Completed"
                        ? (

                          <span className="
                            text-green-400
                            font-bold
                          ">
                            Job Done
                          </span>

                        ) : (

                          <span className="
                            text-yellow-400
                            font-bold
                          ">
                            In Progress
                          </span>

                        )
                      }

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Admin;