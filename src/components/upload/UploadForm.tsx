import React, { useState } from "react";
import UploadPanel from "./UploadPanel";  // ✅ fixed path
import { uploadPacketFile } from "../../api/packetApi";

const UploadForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setSuccess(false);
  };

  const handleUpload = async (file: File) => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setUploading(true);
    setProgress(0);

    try {
      const response = await uploadPacketFile(file, (p) => setProgress(p));
      console.log("Upload successful:", response);
      setSuccess(true);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <UploadPanel onFileSelect={handleFileSelect} onUpload={handleUpload} />

      {uploading && (
        <div className="mt-4 bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      {success && <p className="text-green-600 mt-3">Upload completed!</p>}
    </div>
  );
};

export default UploadForm;
