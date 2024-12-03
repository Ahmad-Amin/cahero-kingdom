import React, { useState } from "react";
import Documents from "./Documents/Documents";
import Identification from "./Documents/Identification";
import DocumentVerify from "./Documents/DocumentVerify";
import Upload from "./Documents/Upload";
import ReviewDetails from "./Documents/ReviewDetails";
import Success from "./Documents/Success"
const UploadedDocument = () => {
  const [activeFile, setActiveFile] = useState("fileOne");

  const renderContent = () => {
    switch (activeFile) {
      case "fileOne":
        return <Documents setActiveFile={setActiveFile} />;
      case "fileTwo":
        return <Identification setActiveFile={setActiveFile} />;
      case "fileThree":
        return <DocumentVerify setActiveFile={setActiveFile} />;
      case "fileFour":
        return <Upload setActiveFile={setActiveFile} />;
      case "fileFive":
        return <ReviewDetails setActiveFile={setActiveFile} />;
      case "fileSix":
        return <Success setActiveFile={setActiveFile} />;
      default:
        return <Documents setActiveFile={setActiveFile} />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default UploadedDocument;
