import React from "react";

const SignInLayout = ({ children }) => {
  return (
    <div>
      <div className="absolute flex items-center m-8">
        <img src="/Images/Cahero.png" alt="" className="h-16 w-auto" />
      </div>
      <div className="flex flex-row h-screen max-h-full">
      {/* Left Section */}
        <div className="w-1/2 h-full text-white flex items-center justify-center relative">

          {/* Images Section */}
          <div className="flex flex-col h-screen pt-24 z-50">
            <img
              src={`/Images/Card-1.png`}
              alt=""
              className="h-2/5 w-auto -translate-x-40 z-20"
            />
            <img
              src={`/Images/Card-2.png`}
              alt=""
              className="h-2/5 w-auto -translate-y-44 z-10"
            />
            <img
              src={`/Images/Card-3.png`}
              alt=""
              className="h-2/5 w-auto -translate-y-[22rem] translate-x-32"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-12 w-2/3">
            {/* Text Section */}
            <h1 className="text-4xl font-thin mb-4">
              Unlock growth and alignment with <br/>
              <span className="text-[#4675ff] font-bold"> Cahero Kingdom</span>
            </h1>
            <p className="text-white opacity-60">
              Cahero Kingdom supports personal and professional growth through
              curated segments that drive success and impact.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 max-h-full h-screen bg-[#141414] text-black  overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SignInLayout;
