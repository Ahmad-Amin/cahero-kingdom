import React from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
const DocumentVerify = ({ setActiveFile }) => {
  return (
    <div className="h-full py-8 w-full">
      
      <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-white text-3xl font-bold mb-1">
          Document Verifications
        </h1>
        <p className="text-white opacity-60 text-sm mb-7 ">
          Please select the ways to upload pictures
        </p>
      </div>
      <button
        className="bg-red-700 px-12 py-3 rounded-md hover:bg-red-800 ease-in-out transition duration-300"
        onClick={() => setActiveFile("fileOne")}
      >
        Cancel
      </button>
      </div>
      <div className="space-y-4 flex flex-col">
        <label className="w-2/3 relative">
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
        <label className="w-2/3 relative ">
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
      <div className="flex justify-center w-2/3">
        <p className="font-medium text-base text-white opacity-60 text-center mb-10">
          Your Id document will be scanned for Personal data extraction.
        </p>
      </div>
      <div className="flex justify-center w-2/3 h-auto pb-10">
        <button
          className="bg-[#4675ff] px-12 py-3 rounded-md hover:bg-[#385dcc] ease-in-out transition duration-300"
          onClick={() => setActiveFile("fileFour")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DocumentVerify;
