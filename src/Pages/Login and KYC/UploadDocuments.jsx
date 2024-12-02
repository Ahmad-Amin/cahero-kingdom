import React from "react";
import SignInLayout from "../../Layout/SignInLayout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const UploadDocuments = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/review-details");
  };

  const handleBack = () => {
    navigate("/documents-verifications");
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
          <h1 className="text-white text-3xl font-bold mb-7">
            Upload Your ID Documents
          </h1>
        </div>
        <div className="w-full h-1/4">
          <h1 className="font-normal text-base text-white mb-2">
            Upload Front Side of ID Card
          </h1>
          <div className="w-5/6 h-full bg-[#1d1c1c] flex items-center justify-center rounded-xl">
            <label
              htmlFor="file-upload"
              className="bg-[#4675ff] text-white py-3 px-6 rounded-lg flex items-center space-x-2 cursor-pointer hover:bg-[#385dcc] transition duration-300"
            >
              <span className="material-icons text-white">upload</span>
            </label>
            <input id="file-upload" type="file" className="hidden" />
          </div>
        </div>
        <div className="w-full h-1/4 mt-20">
          <h1 className="font-normal text-base text-white mb-2">
            Upload Back Side of ID Card
          </h1>
          <div className="w-5/6 h-full bg-[#1d1c1c] flex items-center justify-center rounded-xl">
            <label
              htmlFor="file-upload"
              className="bg-[#4675ff] text-white py-3 px-6 rounded-lg flex items-center space-x-2 cursor-pointer hover:bg-[#385dcc] transition duration-300"
            >
              <span className="material-icons text-white">upload</span>
            </label>
            <input id="file-upload" type="file" className="hidden" />
          </div>
        </div>
        <div className="flex justify-start w-auto h-auto pb-10 mt-16">
          <button
            className="bg-[#4675ff] text-white text-base font-bold  hover:bg-[#385dcc] w-1/4 h-12 rounded-full items-center ease-in-out transition duration-300"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </SignInLayout>
  );
};

export default UploadDocuments;
