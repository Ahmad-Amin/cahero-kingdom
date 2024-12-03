import React from 'react'

const Success = ({setActiveFile}) => {
  return (
    <div className="h-full py-8 w-2/3">
        <div className="flex flex-col">
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
            className="bg-[#4675ff] px-12 py-3 rounded-md hover:bg-[#385dcc] ease-in-out transition duration-300"
            onClick={() => setActiveFile("fileOne")}
            >
            Back to My Profile
          </button>
        </div>
      </div>
  )
}

export default Success