import React from "react";
function Platform(props) {
  return (
    <div style={{width: '50%'}}>
      <div class="main3-section1">
        <h1
          style={{
            color: "#2f9f87",
            fontfamily: "Arial, Helvetica, sans-serif"
          }}
        >
          {props.plat.txt} <br /> <span>{props.plat.txt0} </span>{" "}
        </h1>
        <p style={{ width: "500px", color: "#758181" }}>{props.plat.txt1}</p>
      </div>
      <img class="imagestyling" src={props.plat.source}></img>
    </div>
  );
}
export default Platform;
