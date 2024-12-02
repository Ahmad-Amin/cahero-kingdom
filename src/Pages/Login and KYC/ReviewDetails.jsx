import React from "react";
import SignInLayout from "../../Layout/SignInLayout";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const ReviewDetails = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/review-details/success");
  };

  const handleBack = () => {
    navigate("/documents-verifications/upload");
  };
  return (
    <SignInLayout>
      <div className="h-full mt-20 w-full px-10">
        <button
          className="hover:font-extrabold text-white text-lg ease-in-out transition-all duration-300 cursor-pointer my-5"
          onClick={handleBack}
        >
          <ArrowBackIcon />
        </button>
        <div className="flex flex-col">
          <h1 className="text-white text-3xl font-bold mb-1">
            Document Verifications
          </h1>
          <p className="text-white opacity-60 text-sm mb-7 ">
            Please select the ways to upload pictures
          </p>
        </div>
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <label
                htmlFor="FirstName"
                className="font-semibold text-base text-white"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="Ahmad"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="font-semibold text-base text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Amin"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="font-semibold text-base text-white"
            >
              Document Number
            </label>
            <input
              type="number"
              placeholder="12344567886"
              className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
              readOnly
            />
          </div>

          <h1 className="font-semibold text-lg text-white pt-7">BirthDate</h1>
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-white"
              >
                Month
              </label>
              <input
                type="text"
                placeholder="11"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-white"
              >
                Day
              </label>
              <input
                type="number"
                placeholder="12"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-white"
              >
                Year
              </label>
              <input
                type="number"
                placeholder="2001"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
          </div>

          <h1 className="font-semibold text-lg text-white pt-7">Expiration Date</h1>
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-white"
              >
                Month
              </label>
              <input
                type="text"
                placeholder="May"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-white"
              >
                Day
              </label>
              <input
                type="number"
                placeholder="10"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-white"
              >
                Year
              </label>
              <input
                type="2025"
                placeholder="Enter Full Name"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-auto h-auto pb-7 mt-16">
          <button
            className="bg-[#4675ff] text-white text-base font-bold  hover:bg-[#385dcc] w-1/3 h-12 rounded-full items-center ease-in-out transition duration-300"
            onClick={handleContinue}
          >
            Agree & Continue
          </button>
        </div>

        <div className="flex justify-center w-auto h-auto pb-10">
          <button
            className="bg-[#283b72] text-white text-base font-bold  hover:bg-[#16203f] w-1/3 h-12 rounded-full items-center ease-in-out transition duration-300"
            onClick={handleBack}
          >
            Retake Photo
          </button>
        </div>
      </div>
    </SignInLayout>
  );
};

export default ReviewDetails;
