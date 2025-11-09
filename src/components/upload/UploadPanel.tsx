import React, { useState } from "react";

interface UploadPanelProps {
  onFileSelect: (file: File) => void;
  onUpload: (file: File) => void;
}

const UploadPanel: React.FC<UploadPanelProps> = ({ onFileSelect, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <input type="file" onChange={handleChange} className="mb-3" />
      <button
        onClick={() => onUpload(selectedFile!)}
        disabled={!selectedFile}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadPanel;
