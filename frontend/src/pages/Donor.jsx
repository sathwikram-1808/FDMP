import { useState } from "react";

import DashboardLayout
from "../layouts/DashboardLayout";

import API from "../services/api";

function Donor() {

  const [food, setFood] = useState({
    foodType: "",
    quantity: "",
    location: "",
    expiry: "",
  });

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const response = await API.post(
        "/donations",
        {
          ...food,
          donorName: user.name,
        }
      );

      alert(response.data.message);

      setFood({
        foodType: "",
        quantity: "",
        location: "",
        expiry: "",
      });

    } catch (error) {
      console.log(error);

      alert("Failed");
    }
  };

  return (
    <DashboardLayout>

      <div className="
        flex
        justify-center
        items-center
        mt-10
      ">

        <div className="
          bg-slate-900
          p-10
          rounded-3xl
          shadow-2xl
          w-[500px]
        ">

          <h1 className="
            text-4xl
            text-white
            font-bold
            mb-8
            text-center
          ">
            Donor Module
          </h1>

          <div className="space-y-5">

            <input
              type="text"
              name="foodType"
              placeholder="Food Type"
              value={food.foodType}
              onChange={handleChange}
              className="
                w-full
                p-4
                rounded-xl
                bg-slate-800
                text-white
                outline-none
              "
            />

            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              value={food.quantity}
              onChange={handleChange}
              className="
                w-full
                p-4
                rounded-xl
                bg-slate-800
                text-white
                outline-none
              "
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={food.location}
              onChange={handleChange}
              className="
                w-full
                p-4
                rounded-xl
                bg-slate-800
                text-white
                outline-none
              "
            />

            <input
              type="datetime-local"
              name="expiry"
              value={food.expiry}
              onChange={handleChange}
              className="
                w-full
                p-4
                rounded-xl
                bg-slate-800
                text-white
                outline-none
              "
            />

            <button
              onClick={handleSubmit}
              className="
                w-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                hover:scale-105
                transition
                text-white
                py-4
                rounded-xl
                font-bold
                text-lg
              "
            >
              Submit Donation
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Donor;