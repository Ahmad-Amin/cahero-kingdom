import React from "react";
import SignInLayout from "../../Layout/SignInLayout";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../../App.css";
const LoginData = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/identification-documents");
  };

  const handleBack = () => {
    navigate("/");
  };
  return (
    <SignInLayout>
      <div className="w-full p-8 space-y-7">
        <button
          className="hover:font-extrabold text-white text-lg ease-in-out transition-all duration-300 cursor-pointer my-5"
          onClick={handleBack}
        >
          <ArrowBackIcon />
        </button>
        <div className="ml-10 h-full space-y-7">
          <h1 className="text-white text-3xl font-bold mb-16">
            Personal Information
          </h1>

          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="font-semibold text-base text-white"
            >
              Full Name
              <span className="text-sm opacity-60">
                (as it appears in the Official Documents)
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-5/6 p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <label
              htmlFor="dateOfBirth"
              className="font-semibold text-base text-white"
            >
              Date of Birth
            </label>
            <input
              type="date"
              placeholder="Enter Date of Birth"
              className="w-5/6 p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none custom-date-input"
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <label
              htmlFor="Nationality"
              className="font-semibold text-base text-white"
            >
              Nationality
            </label>
            <input
              type="text"
              placeholder="Enter Your Nationality"
              className="w-5/6 p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <label
              htmlFor="registeredAddress"
              className="font-semibold text-base text-white"
            >
              Registered Address
            </label>
            <input
              type="text"
              placeholder="Enter Your Registered Address"
              className="w-5/6 p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
            />
          </div>

          <div className="flex justify-center w-auto h-auto ">
            <button
              className="bg-[#4675ff] text-white text-base font-bold hover:bg-[#385dcc] w-1/2 h-12 rounded-full items-center ease-in-out transition duration-300"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </SignInLayout>
  );
};

export default LoginData;
