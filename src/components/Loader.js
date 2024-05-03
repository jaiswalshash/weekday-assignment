import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 flex justify-center items-center z-20 bg-black opacity-20">
      <div className="loader "></div>
    </div>
  );
}

export default Loader;
