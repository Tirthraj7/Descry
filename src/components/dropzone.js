import React from "react";
import { useDropzone } from "react-dropzone";

function Basic(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="image-wrapper-block text-center">
          <img
            src={require("../assets/images/input-file.svg")}
            className="img-fluid"
            alt="input image"
          />
        </div>
        <h4 className="text-center f-bold des-tx-secondary pt-3">
          + Add images
        </h4>
      </div>
      <aside>
        {/* <div className="view-image">
          <img
            src={require("../assets/images/subscription-side.svg")}
            className="img-fluid"
            alt=""
          />
        </div> */}
      </aside>
    </section>
  );
}

export default Basic;
