import React from "react";

const YourPersonalInfo = () => {
  return (
    <div>
      <div className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <label
            htmlFor="FullName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full name
          </label>
          <input
            type="text"
            id="fullName"
            className="border text-sm rounded-lg block w-full p-2.5 bg-[#0e0e0e] border-[#333333] placeholder-[#858585] text-white outline-none h-12"
            placeholder="Ahmad"
            readOnly
          />
        </div>

        <div>
          <label
            htmlFor="DateofBirth"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date of Birth
          </label>
          <input
            type="text"
            id="DateofBirth"
            className="border text-sm rounded-lg block w-full p-2.5 bg-[#0e0e0e] border-[#333333] placeholder-[#858585] text-white outline-none h-12"
            placeholder="12/11/2001"
            readOnly
          />
        </div>

        <div>
          <label
            htmlFor="nationality"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            className="border text-sm rounded-lg block w-full p-2.5 bg-[#0e0e0e] border-[#333333] placeholder-[#858585] text-white outline-none h-12"
            placeholder="Pakistan"
            readOnly
          />
        </div>
      </div>

      <h1 className="text-white font-semibold text-xl mt-12 mb-5">
        Registered Address
      </h1>

      <div className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <label
            htmlFor="Country"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Country
          </label>
          <input
            type="text"
            id="Country"
            className="border text-sm rounded-lg block w-full p-2.5 bg-[#0e0e0e] border-[#333333] placeholder-[#858585] text-white outline-none h-12"
            placeholder="Pakistan"
            readOnly
          />
        </div>

        <div>
          <label
            htmlFor="City"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <input
            type="text"
            id="City"
            className="border text-sm rounded-lg block w-full p-2.5 bg-[#0e0e0e] border-[#333333] placeholder-[#858585] text-white outline-none h-12"
            placeholder="Lahore"
            readOnly
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="border text-sm rounded-lg block w-full p-2.5 bg-[#0e0e0e] border-[#333333] placeholder-[#858585] text-white outline-none h-12"
            placeholder="123 calony xyz house"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default YourPersonalInfo;
