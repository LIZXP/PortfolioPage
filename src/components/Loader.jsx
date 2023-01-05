import React from "react";

function Loader() {
  return (
    <div className="h-screen w-screen bg-[#042313]">
      <div className="flex items-center justify-center h-full w-full m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[33rem] animate-pulse"
          version="1.0"
          viewBox="0 0 2363 2363"
        >
          <g fill="#f87171">
            <path d="M1104.5 526.6c-28 1.6-64.5 6.2-90.9 11.5-35.7 7.2-80.1 20.7-113.1 34.3-35.1 14.5-76.6 36.9-109 58.6-125 83.8-215.7 208.9-255.9 353-34.3 123-28.5 259 16.3 378.9 41.9 112 114.1 208.8 209.4 280.7 141.1 106.5 318.4 147.1 493.7 113.3 147.7-28.6 283.8-113.9 375.1-235.1 19.2-25.5 38.4-55.2 49.7-76.8 5-9.6 5.4-10.8 4.9-15.3-.8-6.4-4-11.8-9-15.1-3.8-2.5-4.9-2.7-11.3-2.4-10.1.5-12.1 2.3-22.5 20.4-52.3 91.9-128.7 163.8-224.9 211.8-34.8 17.3-64.2 28.8-100 39.1-58.3 16.7-115.9 24.5-180.2 24.5-68.6 0-129.7-9.4-192.3-29.7-97.6-31.6-184.7-87.5-251.1-161.2-10.2-11.3-10.3-11.4-8.8-14.2 1.2-2.4 1.4-38.1 1.4-262.1V981.4l2.3-4.4c4-7.9 4.5-8 41.4-8 34.2 0 39.3.5 47.8 4.7 10.4 5.2 17.1 12.7 21.7 24.2l2.3 5.6.5 147c.7 163 .1 150.9 7.3 157.2 3.3 2.9 9 5.3 12.7 5.3 7 0 16.2-6.6 18.1-12.9.8-2.6 1-45.5.7-151.6-.5-147.6-.5-148-2.6-156-7.9-29.4-30-51.8-58.8-59.7-7.2-2-11.1-2.2-45.9-2.7-41.7-.7-41.1-.6-45.2-6.8-1.7-2.5-1.8-7.7-2.3-66.3-.4-48.1-.8-64-1.7-65.7-1.2-2-.5-3 8.4-13 83.5-92.7 197.6-156.3 323.8-180.7 117.5-22.6 249-10.2 357.9 33.9 54.3 22 101 49.6 146.1 86.4 16.5 13.4 55 51.7 68.5 68.1 25.1 30.3 45.5 61.1 63 94.8 6 11.4 9.8 15.5 16.2 17.3 12.6 3.3 24.8-6.5 24.8-20 0-6.5-23.9-49.5-43.8-78.6-39.5-57.9-85.8-106.6-141.4-148.5-31.7-24-61.8-42.5-98.3-60.6-28.7-14.1-48.8-22.5-77-31.9-48.3-16.2-91.1-25.2-142.5-30-15.8-1.5-70.4-2.7-85.5-1.9zM647.8 887.5c-.3 36.7-.3 36.4-7.1 40.5-2.9 1.8-5.1 2-23.9 2h-20.7l2.2-5.3c7.9-19.1 27.7-55.9 41.9-77.9l7.3-11.3.3 9.5c.2 5.2.2 24.4 0 42.5zm-7.9 83.2c4 2 6.8 6.3 7.6 11.8.3 2.2.4 110.4.3 240.5l-.3 236.5-7.3-11.3c-61.4-95-92-208.4-87.1-322.9 2.1-51.2 8.7-91.3 23-139.8l5-17 27.7.3c22.8.3 28.3.6 31.1 1.9z" />
            <path d="M896.8 934.4c-9.8 2.7-18.8 9.7-24.2 18.8-5.9 10-5.6 2.5-5.6 167 0 108.3.3 152.2 1.1 156 3.4 15.5 14.6 28.5 29.4 34 5.9 2.2 7.1 2.2 55.5 2.6 33.3.2 51.6-.1 56-.8 17-2.9 30.4-14.4 35.9-30.8 2-5.9 2.1-8.1 2.1-57.9 0-50.6 0-51.8-2.1-56.1-2.9-6-8.4-9.5-15.8-10-9.9-.7-17.8 5.1-20 14.8-.6 2.7-1.1 22.8-1.1 51.2 0 45.4-.1 46.9-2 48.8-1.9 1.9-3.3 2-48.4 2-45.4 0-46.4 0-49-2.1l-2.6-2V972h104v130.9l-39.2.3c-38.6.3-39.4.3-43.5 2.5-4.5 2.4-8.6 8.3-9.8 14-1.5 7.5 3.8 17.2 11.1 20.5 4.2 1.8 6.7 1.9 47.2 1.6l42.8-.3 7.6-3.7c9.1-4.5 14.7-10.3 19.1-19.6l3.2-6.7V963.4l-3.7-7.6c-4.5-9.1-10.3-14.7-19.6-19.1l-6.7-3.2-58.5-.2c-44.8-.2-59.6.1-63.2 1.1zM1067.2 939.1c-6.2 3.1-9.5 8.5-10 16.3-.3 5.4 0 6.6 2.7 10.8 5.2 8.2 8.2 9.1 31.6 9.7 17.2.5 20.5.9 22.9 2.4 5.9 3.9 5.6-5.3 5.6 164v155.3l2.3 4.4c1.3 2.6 4 5.7 6.5 7.5 8.8 6 21.5 3 27-6.5l2.7-4.5.5-157.5c.4-125.4.8-158 1.8-159.7 2.5-4.4 5.6-5.1 25.2-5.5 17.3-.3 18.8-.5 22.7-2.7 2.4-1.4 5.5-4.2 7-6.4 2.4-3.4 2.8-5 2.8-10.7 0-5.7-.4-7.3-2.9-10.8-1.6-2.3-4.6-5-7-6.2-4.1-1.9-5.9-2-70.7-2-65.9 0-66.4 0-70.7 2.1zM1702.5 940.9c-8.6 2.1-14.5 8.6-15.3 16.9-.3 3.6.5 7.7 3.6 17.7 34.4 109.8 34.7 228.5 1 340.7l-4.2 14-3.5-.6c-2-.3-15.4-.6-29.8-.6H1628l-3.2-2.9-3.3-2.9-.5-182.4-.5-182.3-2.1-4c-2.9-5.6-9-9.7-15.3-10.3-6.6-.6-14.5 3.1-18.1 8.4l-2.5 3.8-.3 183.5c-.2 135.7 0 185 .8 189.1 3.8 17.9 18.2 32.7 36.5 37.5 7.2 1.8 61.2 2.2 66.3.4 2.4-.8 3.7-.7 6.2.6 1.7.9 5.2 1.8 7.8 2.1 3.8.5 5.7 0 10.2-2.3 6.8-3.5 8.5-6.3 14.4-24.3 33.1-100.6 40.2-205.3 21-310-5.5-30.1-18.3-77.1-23-84.2-3.8-5.9-13-9.5-19.9-7.9zM1262.1 942.6c-12.8 3.4-24.9 12.9-30.9 24.2-6.6 12.3-6.2 3.3-6.2 159.4 0 99.6.3 143.3 1.1 147 3.9 18.8 19.6 34.3 38.8 38.4 8 1.7 99.3 2.1 105 .4 17.7-5 20-28.7 3.6-36.1-3.7-1.7-7.6-1.9-52.5-1.9-46.2 0-48.6-.1-51.7-2-1.7-1-3.7-2.8-4.3-4-.8-1.4-1-17.9-.8-55.8.3-52.5.4-53.8 2.6-60.3 1.2-3.6 3.1-7.8 4.3-9.3l2-2.6h46.5c44.7 0 46.6-.1 50.5-2 11.2-5.7 13.9-20.2 5.6-29.7-5.6-6.4-4.8-6.3-55.7-6.3-49.4 0-50.9-.1-54.4-5.1-1.4-2.1-1.6-8-1.6-56.2v-53.9l3.4-3.4 3.4-3.4h120.7c81.2 0 121.3.3 122.6 1 1.8 1 1.9 2.7 1.9 58.4 0 52.1-.2 57.5-1.7 58.7-1.3 1.1-9.7 1.5-41.3 1.9l-39.6.5-7.5 3.7c-13.9 6.9-23.6 20-25.9 35.3-.7 4.6-1 32.6-.8 83 .3 84.6-.2 78.8 7.2 85.3 3.3 2.8 8.9 5.2 12.6 5.2 6.5 0 13.8-4.8 17-11.1 1.9-3.7 2-6.4 2-80.8v-77l2.4-2.8c2.3-2.7 2.9-2.8 12.7-3.1 11.6-.4 17.2.8 19.4 4.2.8 1.2 11.4 50 23.4 108.5 24.3 117.7 22.4 110.6 31.7 115.1 12 5.9 26.2-2.1 27.1-15.3.3-3.9-4.7-30.5-19.6-105.2-11.1-55-20.1-101-20.1-102.2 0-2.3 4.3-6.3 6.9-6.3 2.9 0 13.5-5.7 18-9.6 6-5.2 11.5-14 13.5-21.6 1.5-5.6 1.7-12.9 1.4-68.8-.3-62.1-.3-62.5-2.5-68-4.6-11.1-14.2-20.7-25.3-25.3l-5.5-2.2-127-.2c-108.6-.2-127.8 0-132.4 1.3z" />
            <path d="M743.6 1332.5c-8 2.8-12.6 9.6-12.6 18.5 0 8.3 4 14.4 11.3 17.5 3.2 1.3 42.6 1.5 370.4 1.5h366.7l4.4-2.1c12.8-6.3 13.6-24.9 1.4-33.4l-4.4-3-366.6-.2c-309.7-.2-367.3 0-370.6 1.2z" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Loader;