import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./ImageUpload.styles.css";
import { useResume } from "../../Context";
import Alert from "react-bootstrap/Alert";

function ImageUpload() {
  const { about, setAbout } = useResume();
  const [error, setError] = useState(false);

  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    if (fileRejections.length > 0) {
      setError(true);
      return;
    }

    const file = acceptedFiles[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);

      setAbout({
        ...about,
        picture: previewUrl,
      });
    }
  }, [about, setAbout]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/jpg": [],
    },
    maxSize: 10000000,
    multiple: false,
  });

  return (
    <>
      <div {...getRootProps()} className="files-dropzone">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Upload Image</p>
        )}
      </div>

      {error && (
        <Alert variant="danger">
          Invalid file. Please upload a JPG or PNG under 10MB.
        </Alert>
      )}
    </>
  );
}

export default ImageUpload;
