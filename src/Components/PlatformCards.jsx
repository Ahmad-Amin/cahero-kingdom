import React, { useState } from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const kyc = "pending"; // Change to "approved" to test behavior for approved KYC

const PlatformCards = () => {
  const [showModal, setShowModal] = useState(false);

  const platforms = [
    {
      id: 1,
      image: "/Images/Cahero Source.png",
      title: "Cahero Source",
      description:
        "We offer exclusive private investment opportunities to support high-potential projects and drive growth.",
      link: "/homepage",
    },
    {
      id: 2,
      image: "/Images/Cahero Evolution.png",
      title: "Cahero Evolution",
      description:
        "We provide tools and guidance for individuals seeking personal and spiritual growth.",
      link: "/homepage",
    },
    {
      id: 3,
      image: "/Images/Cahero Catalyst.png",
      title: "Cahero Catalyst",
      description:
        "We facilitate social impact investments that drive positive change and sustainable development.",
      link: "/homepage",
    },
    {
      id: 4,
      image: "/Images/Cahero Legacy.png",
      title: "Cahero Legacy",
      description:
        "We deliver strategies and solutions aimed at maximizing financial growth and prosperity.",
      link: "/homepage",
    },
    {
      id: 5,
      image: "/Images/Cahero Ascension.png",
      title: "Cahero Acsension",
      description:
        "We cultivate ambassador programs that build strong brand advocates and expand your reach.",
      link: "/homepage",
    },
    {
      id: 6,
      image: "/Images/Cahero Unity.png",
      title: "Cahero Unity",
      description:
        "We host mastermind networking events that connect visionary leaders for collaboration and growth.",
      link: "/homepage",
    },
  ];

  const handleCardClick = (platformLink) => {
    if (kyc === "approved") {
      window.location.href = platformLink;
    } else {
      setShowModal(true);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setShowModal(false);
    }
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4 mx-10">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className="bg-[#0e0e0e] w-full h-52 p-4 rounded-xl"
          >
            <div className="flex flex-row justify-between items-center">
              <div>
                <img
                  src={platform.image}
                  alt={platform.title}
                  className="w-auto h-32 object-cover"
                />
              </div>
              <div className="flex-1 ml-4">
                <h1 className="text-white text-2xl font-semibold">
                  {platform.title}
                </h1>
                <p className="text-white text-sm opacity-60 font-normal">
                  {platform.description}
                </p>
              </div>
            </div>
            <div className="w-full justify-items-end">
              <button
                className="bg-transparent text-[#4675ff] text-base flex items-center justify-end w-auto"
                onClick={() => handleCardClick(platform.link)}
              >
                Visit Platform <ArrowCircleRightOutlinedIcon className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" id="modal-overlay" onClick={handleOverlayClick}>
          <div className="bg-[#141414] p-6 rounded-lg w-1/3">
            <div className="w-full justify-items-end">
              <button
                className=" bg-transaprent text-white rounded-lg flex justify-end  "
                onClick={() => setShowModal(false)}
              >
                <CloseOutlinedIcon />
              </button>
            </div>
            <div className="w-full text-center justify-center ">
              <h2 className="text-3xl font-semibold text-white mb-2">
                Access Denied
              </h2>
              <p className="text-white opacity-60">
                You are unable to access this Platform until KYC Verification.
              </p>
              <div className="w-full justify-items-center">
                <img
                  src="/Images/Access Denied.png"
                  alt=""
                  className="flex justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatformCards;
