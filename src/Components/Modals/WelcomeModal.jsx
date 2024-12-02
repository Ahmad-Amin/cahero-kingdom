import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  const handleContinue = () => {
    navigate("/login-data"); 
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#141414] rounded-lg w-auto p-8">
        <h2 className="text-2xl font-bold text-white text-center">
          Welcome to <span className="text-[#4675ff]">Cahero</span> Kingdom
        </h2>
        <div className="w-full h-auto flex flex-row mt-6">
          <div>
            <h1 className="font-semibold text-white text-base mb-3">
              KYC (Know Your Customer) Process
            </h1>
            <p className="text-white text-sm opacity-60 mb-8">
              Let’s verify your identity.
            </p>

            <h1 className="font-semibold text-white text-base mb-5">
              Why KYC is important?
            </h1>
            <h2 className="font-semibold text-white text-sm mb-2">
              Verify your identity:{" "}
              <span className="text-white text-sm opacity-60 font-normal">
                KYC helps confirm who you are for secure access.
              </span>
            </h2>
            <h4 className="font-semibold text-white text-sm mb-2">
              Ensure compliance:{" "}
              <span className="text-white text-sm opacity-60 font-normal">
                We follow legal regulations to protect your account.
              </span>
            </h4>
            <h3 className="font-semibold text-white text-sm mb-2">
              Prevent fraud:{" "}
              <span className="text-white text-sm opacity-60 font-normal">
                KYC helps keep your information safe and secure.
              </span>
            </h3>
          </div>
          <div>
            <img src={`Images/Plant.png`} alt="KYC" />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleContinue}
            className="mt-6 bg-[#4675ff] w-1/3 text-white px-6 py-3 rounded-full hover:bg-[#385dcc] transition duration-300 font-bold"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
