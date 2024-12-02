import React from "react";
import SignInLayout from "../../Layout/SignInLayout";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
const IdentificationDocuments = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/documents-verifications");
  };

  const handleBack = () => {
    navigate("/login-data");
  };
  return (
    <SignInLayout>
      <div className="w-full p-8 space-y-10 h-full">
        <button
          className="hover:font-extrabold text-white text-lg ease-in-out transition-all duration-300 cursor-pointer my-5"
          onClick={handleBack}
        >
          <ArrowBackIcon />
        </button>
        <div className="ml-10 h-full space-y-7">
          <div className="mb-12">
            <h1 className="text-white text-3xl font-bold ">
              Identification Document
            </h1>
            <p className="text-white opacity-60 text-sm mb-4">
              We are provided some ways to verify your identity
            </p>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="documentIssuingCountry"
              className="font-semibold text-base text-white"
            >
              Document Issuing Country
            </label>
            <select
              id="documentIssuingCountry"
              className="w-5/6 p-3 h-16 text-white bg-[#141414] border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
            >
              <option
                value=""
                disabled
                selected
                className="bg-[#141414] text-white"
              >
                Select Country
              </option>
              <option value="Pakistan" className="bg-[#141414] text-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                  alt="Pakistan"
                  className="inline-block w-6 h-4 mr-2"
                />
                Pakistan
              </option>
              <option value="United States" className="bg-[#141414] text-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                  alt="United States"
                  className="inline-block w-6 h-4 mr-2"
                />
                United States
              </option>
              <option value="Canada" className="bg-[#141414] text-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg"
                  alt="Canada"
                  className="inline-block w-6 h-4 mr-2"
                />
                Canada
              </option>
              <option value="India" className="bg-[#141414] text-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
                  alt="India"
                  className="inline-block w-6 h-4 mr-2"
                />
                India
              </option>
              <option
                value="United Kingdom"
                className="bg-[#141414] text-white"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_Kingdom.svg"
                  alt="United Kingdom"
                  className="inline-block w-6 h-4 mr-2"
                />
                United Kingdom
              </option>
              <option value="Australia" className="bg-[#141414] text-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg"
                  alt="Australia"
                  className="inline-block w-6 h-4 mr-2"
                />
                Australia
              </option>
              {/* Add more countries and their flag URLs as needed */}
            </select>
          </div>

          <div>
            <h1 className="text-white text-xl font-bold mb-4 pt-8">
              Government ID Upload
            </h1>
            <div className="space-y-4 flex flex-col">
              <label className="w-5/6 relative">
                <input
                  type="radio"
                  name="idOption"
                  value="National ID"
                  className="hidden peer"
                />
                <div className="w-full p-3 h-16 cursor-pointer text-white bg-transparent flex items-center border border-gray-500 rounded-xl placeholder-gray-500 outline-none peer-checked:border-[#4675ff] peer-checked:ring-2 peer-checked:ring-[#4675ff]">
                  <span className=" text-gray-500">
                    <AssignmentIndIcon /> National ID (NIC)
                  </span>
                </div>
              </label>

              {/* Passport Option */}
              <label className="w-5/6 relative">
                <input
                  type="radio"
                  name="idOption"
                  value="Passport"
                  className="hidden peer"
                />
                <div className="w-full p-3 h-16 text-white bg-transparent cursor-pointer flex items-center border border-gray-500 rounded-xl placeholder-gray-500 outline-none peer-checked:border-[#4675ff] peer-checked:ring-2 peer-checked:ring-[#4675ff]">
                  <span className="text-gray-500">
                    <AssignmentIndIcon /> Passport
                  </span>
                </div>
              </label>

              {/* Driver's License Option */}
              <label className="w-5/6 relative">
                <input
                  type="radio"
                  name="idOption"
                  value="Driver's License"
                  className="hidden peer"
                />
                <div className="w-full p-3 h-16 flex items-center text-white cursor-pointer bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none peer-checked:border-[#4675ff] peer-checked:ring-2 peer-checked:ring-[#4675ff]">
                  <span className=" text-gray-500">
                    <AssignmentIndIcon /> Driver's License
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <h1 className="text-white text-xl font-bold ">
              Proof of Address Upload
            </h1>
            <div className="flex flex-col">
              <label className="w-5/6 relative">
                <input
                  type="file"
                  accept="image/*"
                  placeholder="Utility Bill"
                  className="hidden peer"
                />
                <div className="w-full p-3 h-16 text-white bg-transparent cursor-pointer flex items-center border border-gray-500 rounded-xl placeholder-gray-500 outline-none peer-checked:border-[#4675ff] peer-checked:ring-2 peer-checked:ring-[#4675ff]">
                  <span className="text-gray-500">
                    <LocalAtmIcon /> Utility Bill
                  </span>
                </div>
              </label>
            </div>

            <div className="space-y-2 flex flex-col">
              <label className="w-5/6 relative">
                <input
                  type="file"
                  accept="image/*"
                  placeholder="Upload Bank Statement"
                  className="hidden peer"
                />
                <div className="w-full p-3 h-16 text-white cursor-pointer flex items-center bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none peer-checked:border-[#4675ff] peer-checked:ring-2 peer-checked:ring-[#4675ff]">
                  <span className="text-gray-500">
                    <AccountBalanceIcon /> Upload Bank Statement
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div className="flex justify-center w-auto h-auto pb-10">
            <button
              className="bg-[#4675ff] text-white text-base font-bold  hover:bg-[#385dcc] w-1/2 h-12 rounded-full items-center ease-in-out transition duration-300"
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

export default IdentificationDocuments;
