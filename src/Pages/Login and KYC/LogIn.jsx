import React, { useState } from "react";
import SignInLayout from "../../Layout/SignInLayout";
import WelcomeModal from "../../Components/Modals/WelcomeModal";

const LogIn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SignInLayout>
      <div className="w-full pt-32">
        {/* Heading */}
        <h1 className="font-normal text-4xl text-white flex items-center justify-center">
          Login to Your Account
        </h1>

        {/* Subtext */}
        <div className="flex justify-center">
          <h2 className="text-white text-lg opacity-60 font-light pt-12 flex content-center w-1/2 text-center">
            Please enter the one-time password below to login in to your CAHERO
            banking and enjoy unlimited features.
          </h2>
        </div>

        {/* Input Field */}
        <div className="flex justify-center mt-8">
          <input
            type="text"
            placeholder="Enter Pin"
            className="w-5/6 p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center w-auto h-auto mt-10">
          <button
            className="bg-[#4675ff] text-white text-lg font-bold hover:bg-[#385dcc] w-1/2 h-14 rounded-full items-center ease-in-out transition duration-300"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        {/* Welcome Modal */}
        {isModalOpen && <WelcomeModal onClose={handleCloseModal} />}
      </div>
    </SignInLayout>
  );
};

export default LogIn;
