import React from "react";
import UploadForm from "../components/upload/UploadForm";

const UploadPage: React.FC = () => (
  <div className="p-8 max-w-2xl mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Upload NO File</h2>
    <UploadForm />
  </div>
);

export default UploadPage;
