import {
  useEffect,
  useState,
} from "react";

import DashboardLayout
from "../layouts/DashboardLayout";

import API from "../services/api";

import {
  FaMapMarkerAlt,
  FaBoxOpen,
  FaCheckCircle,
} from "react-icons/fa";

function Volunteer() {

  const [donations, setDonations] =
    useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const fetchDonations = async () => {
    try {

      const response = await API.get(
        "/donations"
      );

      setDonations(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const acceptRequest = async (id) => {
    try {

      const response = await API.put(
        `/donations/accept/${id}`,
        {
          volunteer: user.name,
        }
      );

      alert(response.data.message);

      fetchDonations();

    } catch (error) {
      console.log(error);
    }
  };

  const completeRequest = async (id) => {
    try {

      const response = await API.put(
        `/donations/complete/${id}`
      );

      alert(response.data.message);

      fetchDonations();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>

      <div>

        <h1 className="
          text-4xl
          text-white
          font-bold
          mb-10
        ">
          Volunteer Requests
        </h1>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          {donations.map((item) => (

            <div
              key={item._id}
              className="
                bg-slate-900
                text-white
                rounded-3xl
                p-6
                shadow-2xl
                hover:scale-105
                transition
              "
            >

              <div className="
                flex
                justify-between
                items-center
              ">

                <h2 className="
                  text-2xl
                  font-bold
                ">
                  {item.foodType}
                </h2>

                <span className="
                  bg-yellow-500
                  text-black
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  font-bold
                ">
                  {item.status}
                </span>

              </div>

              <div className="mt-5 space-y-3">

                <p className="
                  flex
                  items-center
                  gap-2
                ">
                  <FaBoxOpen />

                  Quantity:
                  {" "}
                  {item.quantity}
                </p>

                <p className="
                  flex
                  items-center
                  gap-2
                ">
                  <FaMapMarkerAlt />

                  {item.location}
                </p>

                <p>
                  Donor:
                  {" "}
                  <span className="
                    font-bold
                    text-cyan-400
                  ">
                    {item.donorName}
                  </span>
                </p>

                <p>
                  Volunteer:
                  {" "}
                  <span className="
                    font-bold
                    text-green-400
                  ">
                    {item.volunteer}
                  </span>
                </p>

              </div>

              {item.status ===
                "Pending" && (

                <button
                  onClick={() =>
                    acceptRequest(item._id)
                  }
                  className="
                    mt-6
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    py-3
                    rounded-xl
                    font-bold
                    transition
                  "
                >
                  Accept Request
                </button>

              )}

              {item.status ===
                "Accepted" && (

                <button
                  onClick={() =>
                    completeRequest(
                      item._id
                    )
                  }
                  className="
                    mt-6
                    w-full
                    bg-green-600
                    hover:bg-green-700
                    py-3
                    rounded-xl
                    font-bold
                    flex
                    justify-center
                    items-center
                    gap-2
                    transition
                  "
                >
                  <FaCheckCircle />

                  Mark Completed
                </button>

              )}

              {item.status ===
                "Completed" && (

                <div className="
                  mt-6
                  text-center
                  bg-green-700
                  py-3
                  rounded-xl
                  font-bold
                ">
                  Delivery Completed
                </div>

              )}
              <p className="
  mt-3
  font-bold
  text-red-400
">
  Priority:
  {" "}
  {item.priority}
</p>

            </div>

          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Volunteer;