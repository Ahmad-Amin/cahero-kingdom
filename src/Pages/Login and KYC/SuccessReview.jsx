import React from "react";
import SignInLayout from "../../Layout/SignInLayout";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const SuccessReview = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/homepage");
  };

  const handleBack = () => {
    navigate("/review-details");
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
        <div className="flex flex-col pl-10">
          <h1 className="text-white text-3xl font-bold mb-1">
            Verification Success
          </h1>
          <p className="text-white opacity-60 text-sm mb-7 ">
            Congratulations! you have Successfully Verified your Account
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={`/Images/Success.png`}
            alt="Success"
            className="h-4/5 w-auto flex items-center justify-center"
          />
        </div>
        <div className="flex justify-center w-auto h-auto pb-7 mt-16">
          <button
            className="bg-[#4675ff] text-white text-base font-bold  hover:bg-[#385dcc] w-1/3 h-12 rounded-full items-center ease-in-out transition duration-300"
            onClick={handleContinue}
          >
            Agree & Continue
          </button>
        </div>
      </div>
    </SignInLayout>
  );
};

export default SuccessReview;
