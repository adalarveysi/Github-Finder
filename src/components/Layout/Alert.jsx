import React, { useContext } from "react";
import AlertContext from "../../context/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        <span className="flex-1 text-base font-semibold leading-7 text-white">
          {alert.msg}
        </span>
      </div>
    )
  );
};

export default Alert;
