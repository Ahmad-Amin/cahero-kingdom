import React from "react";

const Upload = ({setActiveFile}) => {
  return (
    <div className="h-full py-8 w-full">
      
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-white text-3xl font-bold mb-7">
          Upload Your ID Documents
        </h1>
        <button
        className="bg-red-700 px-12 py-3 rounded-md hover:bg-red-800 ease-in-out transition duration-300"
        onClick={() => setActiveFile("fileOne")}
      >
        Cancel
      </button>
      </div>
      <div className="w-2/3 h-48">
        <h1 className="font-normal text-base text-white mb-2">
          Upload Front Side of ID Card
        </h1>
        <div className="w-full h-full bg-[#1d1c1c] flex items-center justify-center rounded-xl">
          <label
            htmlFor="file-upload"
            className="bg-[#4675ff] text-white py-3 px-6 rounded-lg flex items-center space-x-2 cursor-pointer hover:bg-[#385dcc] transition duration-300"
          >
            <span className="material-icons text-white">upload</span>
          </label>
          <input id="file-upload" type="file" className="hidden" />
        </div>
      </div>
      <div className="w-2/3 h-48 mt-20">
        <h1 className="font-normal text-base text-white mb-2">
          Upload Back Side of ID Card
        </h1>
        <div className="w-full h-full bg-[#1d1c1c] flex items-center justify-center rounded-xl">
          <label
            htmlFor="file-upload"
            className="bg-[#4675ff] text-white py-3 px-6 rounded-lg flex items-center space-x-2 cursor-pointer hover:bg-[#385dcc] transition duration-300"
          >
            <span className="material-icons text-white">upload</span>
          </label>
          <input id="file-upload" type="file" className="hidden" />
        </div>
      </div>
      <div className="flex justify-center w-2/3 h-auto pb-10 mt-16">
        <button
          className="bg-[#4675ff] px-12 py-3 rounded-md hover:bg-[#385dcc] ease-in-out transition duration-300"
          onClick={() => setActiveFile("fileFive")}
          >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Upload;
