import React from "react";

const Loading = () => {
  return (
    <>
      <div
        key="loading"
        className="feed-card lg:w-[21rem] 2xl:w-[21rem] h-full border-b-2 p-3 pb-5"
      >
        <div className="feed-card-img flex items-center">
          <div className="skeleton rounded-full w-9 h-9"></div>
          <div className="ml-2 mr-1 skeleton h-5 w-20"></div>
          <div className="skeleton w-[14px] h-[14px] rounded-full"></div>
        </div>
        <div className="feed-card-content">
          <div className="feed-card-content-heading text-[14px] mt-2">
            <div className="skeleton h-4 w-full mb-1"></div>
            <div className="skeleton h-4 w-[80%] mb-1"></div>
            <div className="skeleton h-4 w-[90%]"></div>
          </div>
          <div className="feed-card-content-body block mt-2 w-full lg:h-[19rem] 2xl:h-[19rem]">
            <div className="skeleton w-full h-full rounded-md"></div>
          </div>
        </div>
      </div>{" "}
      <div
        key="loading"
        className="feed-card lg:w-[21rem] 2xl:w-[21rem] h-full border-b-2 p-3 pb-5"
      >
        <div className="feed-card-img flex items-center">
          <div className="skeleton rounded-full w-9 h-9"></div>
          <div className="ml-2 mr-1 skeleton h-5 w-20"></div>
          <div className="skeleton w-[14px] h-[14px] rounded-full"></div>
        </div>
        <div className="feed-card-content">
          <div className="feed-card-content-heading text-[14px] mt-2">
            <div className="skeleton h-4 w-full mb-1"></div>
            <div className="skeleton h-4 w-[80%] mb-1"></div>
            <div className="skeleton h-4 w-[90%]"></div>
          </div>
          <div className="feed-card-content-body block mt-2 w-full lg:h-[19rem] 2xl:h-[19rem]">
            <div className="skeleton w-full h-full rounded-md"></div>
          </div>
        </div>
      </div>{" "}
      <div
        key="loading"
        className="feed-card lg:w-[21rem] 2xl:w-[21rem] h-full border-b-2 p-3 pb-5"
      >
        <div className="feed-card-img flex items-center">
          <div className="skeleton rounded-full w-9 h-9"></div>
          <div className="ml-2 mr-1 skeleton h-5 w-20"></div>
          <div className="skeleton w-[14px] h-[14px] rounded-full"></div>
        </div>
        <div className="feed-card-content">
          <div className="feed-card-content-heading text-[14px] mt-2">
            <div className="skeleton h-4 w-full mb-1"></div>
            <div className="skeleton h-4 w-[80%] mb-1"></div>
            <div className="skeleton h-4 w-[90%]"></div>
          </div>
          <div className="feed-card-content-body block mt-2 w-full lg:h-[19rem] 2xl:h-[19rem]">
            <div className="skeleton w-full h-full rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
