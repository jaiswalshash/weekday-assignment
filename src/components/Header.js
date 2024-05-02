import React from "react";

function Header() {
  return (
    <div className="w-full flex bg-white rounded-md justify-between px-10 py-3 shadow-md items-center">
      <div className="text-xl font-bold"> <span>👋&nbsp;</span>Shashank</div>
      <div>
        <button
          className="rounded-full"
          style={{
            background: "rgb(85, 239, 196)",
            padding: "1rem",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 250 250"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M240.808 240.808H122.123C56.6994 240.808 3.45695 187.562 3.45695 122.122C3.45695 56.7031 56.6994 3.45697 122.124 3.45697C187.566 3.45697 240.808 56.7031 240.808 122.122V240.808Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
