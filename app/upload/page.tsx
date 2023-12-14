"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

interface Cloudinary {
  publicId: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="A something image"
        />
      )}
      <CldUploadWidget
      options={{ sources:['local'], multiple:false, maxFiles:5 }}
        uploadPreset="pjoqv9uc"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;

          const info = result.info as Cloudinary;

          setPublicId(info.publicId);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
