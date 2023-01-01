import React from "react";

function Bubble() {
  return (
    <div className="bubble bg-blue-500 rounded-full h-16 w-16 absolute bottom-0 left-50 transform translate-x-1/2">
      <style>
        {`
          .bubble {
            animation: riseUp 1s ease-in-out infinite;
          }

          @keyframes riseUp {
            0% {
              transform: translateX(-50%) translateY(0%);
            }
            100% {
              transform: translateX(-50%) translateY(-100%);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Bubble;
