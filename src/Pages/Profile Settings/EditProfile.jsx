import React, { useState } from "react";
import SidebarLayout from "../../Layout/SidebarLayout";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    address: "123 Main Street",
    city: "Lahore",
    state: "Pakistan",
    phoneNumber: "12345678999",
    password: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated user data:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <SidebarLayout>
      <div>
        <h1 className="font-semibold text-white text-4xl mb-10">Edit Profile</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border text-sm rounded-lg block w-full p-2.5 bg-[#0e0e0e] border-[#333333] placeholder-[#858585] text-white outline-none h-12"
              placeholder="John"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border text-sm rounded-lg block w-full p-2.5 bg-[#0e0e0e] border-[#333333] placeholder-[#858585] text-white outline-none h-12"
              placeholder="Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border text-sm rounded-lg block w-full p-2.5 bg-[#0e0e0e] border-[#333333] placeholder-[#858585] text-white outline-none h-12"
              placeholder="john.doe@example.com"
              disabled
              readOnly
            />
          </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <div>
            <label
              htmlFor="state"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <input
              type="text"
              id="state"
              value={formData.state}
              onChange={handleInputChange}
              className="border text-sm rounded-lg block w-full p-2.5 bg-[#0e0e0e] border-[#333333] placeholder-[#858585] text-white outline-none h-12"
              placeholder="Pakistan"
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              className="border text-sm rounded-lg block w-full p-2.5 bg-[#0e0e0e] border-[#333333] placeholder-[#858585] text-white outline-none h-12"
              placeholder="Lahore"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="border text-sm rounded-lg block w-full p-2.5 bg-[#0e0e0e] border-[#333333] placeholder-[#858585] text-white outline-none h-12"
              placeholder="12345678999"
            />
          </div>
        </div>

        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="text-white bg-[#6a55ea] hover:bg-[#5242b6] ease-in-out transition duration-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Update
          </button>
        </div>
      </form>
    </SidebarLayout>
  );
};

export default EditProfile;
