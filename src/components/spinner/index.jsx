import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin-top: 40vmin;
  margin-left: 30vmin;
  border-color: red;
`;

class AwesomeComponent extends React.Component {

    render() {
        return (
            <div className="sweet-loading">
                <ClipLoader
                    css={override}
                    size={150}
                    color={"#123abc"}
                    loading={ true }
                />
            </div>
        );
    }
}

export default React.memo(AwesomeComponent);