import React from "react";
import PortraitIcon from '@mui/icons-material/Portrait';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
const Documents = ({ setActiveFile }) => {
  return (
    <div className="py-8">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-3xl">Documents</h1>
        <button
          onClick={() => setActiveFile("fileTwo")}
          className="bg-[#4675ff] px-8 py-3 rounded-md hover:bg-[#385dcc] ease-in-out transition duration-300"
        >
          Edit Document
        </button>
      </div>

      <div className="space-y-2 flex flex-col mt-5">
        <label
          htmlFor="documentIssuingCountry"
          className="font-semibold text-base text-white"
        >
          Document Issuing Country
        </label>
        <input
          type="text"
          placeholder="Pakistan"
          className="w-2/3 p-3 h-16 text-white bg-transparent border border-gray-500 rounded-xl placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      <div className="space-y-2 flex flex-col mt-5">
        <label
          htmlFor="uploadedGovernmentID"
          className="font-semibold text-base text-white"
        >
          Uploaded Government ID
        </label>

        <div className="flex items-center w-2/3 border border-gray-500 rounded-xl bg-transparent">
          <div className="p-3">
            <PortraitIcon className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="National ID(NIC).png"
            className="flex-grow p-3 h-16 text-white bg-transparent placeholder-gray-500 outline-none"
            readOnly
          />
        </div>
      </div>

      <div className="space-y-2 flex flex-col mt-5">
        <label
          htmlFor="proofOfAddress"
          className="font-semibold text-base text-white"
        >
          Proof Of Address
        </label>
        <div className="flex items-center w-2/3 border border-gray-500 rounded-xl bg-transparent">
          <div className="p-3">
            <LocalAtmIcon className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="utility bill.pdf"
            className="flex-grow p-3 h-16 text-white bg-transparent placeholder-gray-500 outline-none"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Documents;
