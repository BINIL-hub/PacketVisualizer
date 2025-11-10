import React, { useState } from "react";
import UploadPanel from "./UploadPanel";
import { uploadPacketFile } from "../../api/packetApi";

const UploadForm: React.FC = () => {
  // ✅ State
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // ✅ When user picks a file
  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setSuccess(false);
    setError(null);
  };

  // ✅ When user clicks "Upload"
  const handleUpload = async (file: File) => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setUploading(true);
    setProgress(0);
    setError(null);

    try {
      // ✅ type the progress callback properly
      const response = await uploadPacketFile(file, (p: number) => setProgress(p));
      console.log("✅ Upload successful:", response);
      setSuccess(true);
    } catch (err) {
      console.error("❌ Upload failed:", err);
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <UploadPanel onFileSelect={handleFileSelect} onUpload={handleUpload} />

      {/* ✅ Force TypeScript to see selectedFile is used */}
      {selectedFile ? (
        <p className="mt-3 text-gray-700 text-sm text-center">
          Selected file: <strong>{selectedFile.name}</strong>
        </p>
      ) : (
        <p className="mt-3 text-gray-400 text-sm text-center">No file selected</p>
      )}

      {/* ✅ Progress Bar */}
      {uploading && (
        <div className="mt-4 bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
          <p className="text-sm text-gray-600 mt-1 text-center">{progress}%</p>
        </div>
      )}

      {/* ✅ Messages */}
      {success && <p className="text-green-600 mt-3 text-center">✅ Upload completed successfully!</p>}
      {error && <p className="text-red-600 mt-3 text-center">{error}</p>}
    </div>
  );
};

export default UploadForm;
