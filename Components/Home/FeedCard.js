import React, { useState, useEffect } from 'react';

const FeedCard = ({ post }) => (
  <div
    key={post.id}
    className="feed-card lg:w-[21rem] 2xl:w-[21rem] h-full border-b-2 p-3 pb-5"
  >
    <a
      href="https://www.instagram.com/odyzon"
      target="_blank"
      className="feed-card-img flex items-center"
    >
      <img
        src={`/images/odyzon_profile.jpeg`}
        alt="odyzon profile"
        fill
        className="object-contain w-9 h-9 rounded-full"
      />
      <h4 className="ml-2 mr-1 text-sm odyzon_profile_name">Odyzon </h4>
      <img
        src={`/images/verified.png`}
        alt="odyzon verified profile"
        fill
        className="object-contain w-[14px] h-[14px] relative"
      />
    </a>
    <div className="feed-card-content">
      <div className="feed-card-content-heading text-[14px] mt-2">
        <span>
          {expandedPosts[post.id]
            ? parseCaption(post.caption)
            : parseCaption(post.caption.slice(0, 180))}
          {post.caption.length > 180 && (
            <button
              onClick={() => toggleCaption(post.id)}
              className="text-gray-500"
              style={{ marginLeft: "5px" }}
            >
              {expandedPosts[post.id] ? ' less' : '... more'}
            </button>
          )}
        </span>
      </div>
      <a
        href={post.permalink}
        target="_blank"
        className="feed-card-content-body block mt-2 w-full lg:h-[19rem] 2xl:h-[19rem]"
      >
        {post.media_type === 'VIDEO' ? (
          <img
            src={post.thumbnail_url}
            alt="odyzon hero background"
            fill
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <img
            src={post.media_url}
            alt="odyzon hero background"
            fill
            className="w-full h-full rounded-md"
          />
        )}
      </a>
    </div>
  </div>
);

 export default FeedCard
