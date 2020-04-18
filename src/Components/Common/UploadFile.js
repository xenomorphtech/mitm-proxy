import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import { SESSION_UPLOAD_NODE_ID } from "./../../Constants/Misc";

const UploadFile = (props) => {
  const {
    showLoading,
    hideLoading,
    setStore
  } = props;

  const handleFileChange = ({ target: { files } }) => {
    showLoading();
    if (!isEmpty(files)) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = (event) => {
        if (event.target.readyState == FileReader.DONE) { // DONE == 2
          setStore(JSON.parse(event.target.result));
          hideLoading();
        }
      };

      const blob = file.slice(0, file.size);
      reader.readAsBinaryString(blob);
    } else {
      hideLoading();
    }
  }

  return (
    <input
      type="file"
      id={SESSION_UPLOAD_NODE_ID}
      style={{ display: "none" }}
      multiple="false"
      onChange={handleFileChange}
    />
  );
};

UploadFile.propTypes = {
  setStore: PropTypes.func.isRequired,
  showLoading: PropTypes.func.isRequired,
  hideLoading: PropTypes.func.isRequired
};

export default UploadFile;