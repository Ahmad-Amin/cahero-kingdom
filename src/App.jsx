import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignIn from "./Pages/SignIn";
import LogIn from "./Pages/Login and KYC/LogIn";
import LoginData from "./Pages/Login and KYC/LoginData";
import IdentificationDocuments from "./Pages/Login and KYC/IdentificationDocuments";
import DocumentsVerifications from "./Pages/Login and KYC/DocumentsVerifications"
import UploadDocuments from "./Pages/Login and KYC/UploadDocuments";
import ReviewDetails from "./Pages/Login and KYC/ReviewDetails"
import SuccessReview from "./Pages/Login and KYC/SuccessReview"
function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login-data" element={<LoginData />} />
        <Route path="/identification-documents" element={<IdentificationDocuments />} />
        <Route path="/documents-verifications" element={<DocumentsVerifications />} />
        <Route path="/documents-verifications/upload" element={<UploadDocuments />} />
        <Route path="/review-details" element={<ReviewDetails />} />
        <Route path="/review-details/success" element={<SuccessReview />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
