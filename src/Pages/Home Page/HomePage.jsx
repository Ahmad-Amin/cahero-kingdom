import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import LineChart from "../../Components/Chart";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlatformCards from '../../Components/PlatformCards';
const HomePage = () => {
  const [isVerificationPending, setIsVerificationPending] = useState(false);

  
  useEffect(() => {
    let timeout;
    if (isVerificationPending) {
      timeout = setTimeout(() => {
        setIsVerificationPending(false); 
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [isVerificationPending]);

  const handleButtonClick = () => {
    setIsVerificationPending(true); 
  };

  const handleCloseButton = (event) => {
    event.stopPropagation(); 
    setIsVerificationPending(false);
  };

  return (
    <div className='bg-black h-screen overflow-y-auto'>
      <div className='z-50'>
      <Navbar />
      </div>
      <div className="pt-28 w-full h-auto">
        <div className="w-full flex justify-between">
          <h1 className="ml-10 text-white font-semibold text-2xl mb-5">Platforms Growth</h1>
          <button
            className={`mr-10 mb-5 font-bold text-white text-lg p-3 rounded-lg transition duration-300 ${
              isVerificationPending
                ? 'bg-[#352a75] w-auto flex items-center justify-between'
                : 'bg-[#4675ff] hover:bg-[#385dcc]' 
            }`}
            onClick={handleButtonClick}
          >
            {isVerificationPending ? (
              <>
                <span className='font-light'><InfoOutlinedIcon/> Your Request is pending for account verification.</span>
                <button
                  className="ml-4 text-white"
                  onClick={handleCloseButton} 
                >
                  <CloseOutlinedIcon/>
                </button>
              </>
            ) : (
              'Verification Pending'
            )}
          </button>
        </div>
        <LineChart />
      </div>
      <div className='mb-10'>
      <h1 className="ml-10 text-white font-semibold text-2xl mb-5 mt-10">Categories and Investing Platform</h1>

      <PlatformCards/>
      </div>
    </div>
  );
};

export default HomePage;
