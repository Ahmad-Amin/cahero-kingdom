import React, { useState } from 'react'; // Import useState
import SidebarLayout from "../../../Layout/SidebarLayout";

const Verifications = () => {
  const [activeTab, setActiveTab] = useState("personalInfo");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return ( // Fix the return statement indentation
    <SidebarLayout>
      <div className="bg-black text-white p-6">
        <h1 className="text-3xl font-semibold mb-6">Verification</h1>
        
        <div className="flex gap-8 mb-4">
          <div
            onClick={() => handleTabChange("personalInfo")}
            className={`cursor-pointer text-lg font-medium ${
              activeTab === "personalInfo" ? "text-white border-b-2 border-blue-500" : "text-white opacity-50"
            }`}
          >
            Your Personal Info
          </div>
          <div
            onClick={() => handleTabChange("uploadedDocuments")}
            className={`cursor-pointer text-lg font-medium ${
              activeTab === "uploadedDocuments" ? "text-white border-b-2 border-blue-500 " : "text-white opacity-50"
            }`}
          >
            Uploaded Documents
          </div>
        </div>

        {/* Content Based on Active Tab */}
        <div className="mt-6">
          {activeTab === "personalInfo" && <div>Your Personal Info Content</div>}
          {activeTab === "uploadedDocuments" && <div>Uploaded Documents Content</div>}
        </div>
      </div>
    </SidebarLayout>
  );
}

export default Verifications;
