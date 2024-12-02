import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignIn from "./Pages/SignIn";
import LogIn from "./Pages/Login and KYC/LogIn";
import LoginData from "./Pages/Login and KYC/LoginData";
import IdentificationDocuments from "./Pages/Login and KYC/IdentificationDocuments";
import DocumentsVerifications from "./Pages/Login and KYC/DocumentsVerifications";
import UploadDocuments from "./Pages/Login and KYC/UploadDocuments";
import ReviewDetails from "./Pages/Login and KYC/ReviewDetails";
import SuccessReview from "./Pages/Login and KYC/SuccessReview";
import HomePage from "./Pages/Home Page/HomePage";
import ProfileSetting from "./Pages/Profile Settings/ProfileSetting";
import { Provider } from "react-redux";
import { store } from "./store";
import EditProfile from "./Pages/Profile Settings/EditProfile"
import EditPassword from "./Pages/Profile Settings/EditPassword"
import EditEmail from "./Pages/Profile Settings/EditEmail"
import Notifications from "./Pages/Profile Settings/Notifications"
import Verifications from "./Pages/Profile Settings/Verification/Verifications"
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/login-data" element={<LoginData />} />
          <Route
            path="/identification-documents"
            element={<IdentificationDocuments />}
          />
          <Route
            path="/documents-verifications"
            element={<DocumentsVerifications />}
          />
          <Route
            path="/documents-verifications/upload"
            element={<UploadDocuments />}
          />
          <Route path="/review-details" element={<ReviewDetails />} />
          <Route path="/review-details/success" element={<SuccessReview />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/profile-settings" element={<ProfileSetting />} />
          <Route path="/profile-settings/edit-profile" element={<EditProfile />} />
          <Route path="/profile-settings/edit-password" element={<EditPassword />} />
          <Route path="/profile-settings/edit-email" element={<EditEmail />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/verification" element={<Verifications />} />

          
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
