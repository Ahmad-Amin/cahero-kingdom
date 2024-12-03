import React from 'react'

const ReviewDetails = ({setActiveFile}) => {
  return (
    <div className="h-full py-8 w-full ">
        
        <div className='flex flex-row justify-between items-center'>
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
        <div className="space-y-5 w-2/3">
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <label
                htmlFor="FirstName"
                className="font-semibold text-base text-white"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="Ahmad"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="font-semibold text-base text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Amin"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="font-semibold text-base text-white"
            >
              Document Number
            </label>
            <input
              type="number"
              placeholder="12344567886"
              className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
              readOnly
            />
          </div>

          <h1 className="font-semibold text-lg text-white pt-7">BirthDate</h1>
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-white"
              >
                Month
              </label>
              <input
                type="text"
                placeholder="11"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-white"
              >
                Day
              </label>
              <input
                type="number"
                placeholder="12"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-white"
              >
                Year
              </label>
              <input
                type="number"
                placeholder="2001"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
          </div>

          <h1 className="font-semibold text-lg text-white pt-7">Expiration Date</h1>
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-white"
              >
                Month
              </label>
              <input
                type="text"
                placeholder="May"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-white"
              >
                Day
              </label>
              <input
                type="number"
                placeholder="10"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-white"
              >
                Year
              </label>
              <input
                type="2025"
                placeholder="Enter Full Name"
                className="w-full p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-2/3 h-auto pb-7 mt-16">
          <button
            className="bg-[#4675ff] px-16 py-3 rounded-md hover:bg-[#385dcc] ease-in-out transition duration-300"
            onClick={() => setActiveFile("fileSix")}
          >
            Agree & Continue
          </button>
        </div>

        <div className="flex justify-center w-2/3 h-auto pb-10">
          <button
            className="bg-[#283b72] px-20 py-3 rounded-md hover:bg-[#16203f] ease-in-out transition duration-300"
            onClick={() => setActiveFile("fileFour")}
            >
            Retake Photo
          </button>
        </div>
      </div>
  )
}

export default ReviewDetails