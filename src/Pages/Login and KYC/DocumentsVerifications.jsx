import React from "react";
import SignInLayout from "../../Layout/SignInLayout";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const DocumentsVerifications = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/documents-verifications/upload");
  };

  const handleBack = () => {
    navigate("/identification-documents");
  };
  return (
    <SignInLayout>
      <div className="h-full p-8 w-full">
        <button
          className="hover:font-extrabold text-white text-lg ease-in-out transition-all duration-300 cursor-pointer my-5"
          onClick={handleBack}
        >
          <ArrowBackIcon />
        </button>
        <div className="flex flex-col pl-10">
          <h1 className="text-white text-3xl font-bold mb-1">
            Document Verifications
          </h1>
          <p className="text-white opacity-60 text-sm mb-7 ">
            Please select the ways to upload pictures
          </p>
        </div>
        <div className="space-y-4 flex flex-col  pl-10">
          <label className="w-5/6 relative">
            <input
              type="radio"
              name="idOption"
              value="Take Photo"
              className="hidden peer"
            />
            <div className="w-full p-3 h-16 cursor-pointer text-white bg-transparent flex items-center border border-gray-500 rounded-xl placeholder-gray-500 outline-none peer-checked:border-[#4675ff] peer-checked:ring-2 peer-checked:ring-[#4675ff]">
              <span className=" text-gray-500">
                <CameraAltOutlinedIcon /> Take Photo
              </span>
            </div>
          </label>

          {/* Driver's License Option */}
          <label className="w-5/6 relative ">
            <input
              type="radio"
              name="idOption"
              value="Upload Photo"
              className="hidden peer"
            />
            <div className="w-full p-3 h-16 mb-10 flex items-center text-white cursor-pointer bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none peer-checked:border-[#4675ff] peer-checked:ring-2 peer-checked:ring-[#4675ff]">
              <span className=" text-gray-500">
                <FileUploadOutlinedIcon /> Upload Photo
              </span>
            </div>
          </label>
        </div>
        <div className="flex justify-center">
          <p className="font-medium text-base text-white opacity-60 text-center w-1/2 mb-10">
            Your Id document will be scanned for Personal data extraction.
          </p>
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
    </SignInLayout>
  );
};

export default DocumentsVerifications;
