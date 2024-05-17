"use client";
import React, { useState, useEffect } from "react";
import { Inter, Lato } from "next/font/google";
const lato = Lato({ weight: "300", subsets: ["latin"] });
import twemoji from "twemoji";
import Loading from "./Loading";

const fetchInstaFeeds = async (accessToken, after = "", limit = 3) => {
  try {
    console.log("after");
    console.log(after);
    const api = `https://graph.instagram.com/v19.0/17841446136341613/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink&access_token=${accessToken}&limit=${limit}&after=${after}`;
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error(`Error fetching Instagram feeds: ${response.statusText}`);
    }

    const posts = await response.json();
    return posts; // Assuming the response object holds the actual posts and pagination information
  } catch (error) {
    console.error("Error fetching Instagram feeds:", error);
    return { data: [], paging: {} }; // Return an empty array and empty paging object in case of errors
  }
};

const Feeds = () => {
  const [accessToken] = useState(
    process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN
  );
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [after, setAfter] = useState(""); // Store the value of the "after" cursor
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [initialPost, setinitialPost] = useState(true);
  const [showFullCaption, setShowFullCaption] = useState(false);
  const [expandedPosts, setExpandedPosts] = useState({});
  const fetchData = async (loadMore = false) => {
     
    setError(null);
    if (loadMore) {
      setIsLoadingMore(true);
    } else {
      setIsInitialLoading(true);
    }
    setError(null);
    try {
      const fetchedPosts = await fetchInstaFeeds(
        accessToken,
        loadMore ? after : "" // If loading more, pass the "after" cursor
      );
      if (loadMore) {
        setPosts((prevPosts) => [...prevPosts, ...fetchedPosts.data]);
      } else {
        setPosts(fetchedPosts.data);
      }
      console.log("fetchedPosts.paging");
      console.log("fetchedPosts.paging");
      console.log(fetchedPosts);
      setAfter(fetchedPosts.paging.cursors.after); // Update the "after" cursor for pagination
    } catch (err) {
      setError(err.message);
    } finally {
      setIsInitialLoading(false);
      setIsLoadingMore(false)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const loadMore = () => {
    // setinitialPost(false);
    fetchData(true);
  };

  // Handle loading and error states
  if (isInitialLoading) {
    return (
      <div className="flex feeds-show flex-row justify-center items-center w-full h-full flex-wrap">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error fetching Instagram feeds: {error}</div>;
  }
  const parseCaption = (caption) => {
    // Regular expressions to match hashtags and mentions
    const hashtagRegex = /#(\w+)/g;
    const mentionRegex = /@(\w+)/g;
    const parsedCaption = twemoji.parse(caption);
    // Replace hashtags with anchor tags
    const captionWithHashtags = parsedCaption.replace(
      hashtagRegex,
      '<a href="https://www.instagram.com/explore/tags/$1" class="post_tags" target="_blank">#$1</a>'
    );

    // Replace mentions with anchor tags
    const captionWithLinks = captionWithHashtags.replace(
      mentionRegex,
      '<a href="https://www.instagram.com/$1" class="post_tags" target="_blank">@$1</a>'
    );

    // Return the parsed caption as HTML
    return (
      <div
        class="contents"
        dangerouslySetInnerHTML={{ __html: captionWithLinks }}
      />
    );
  };

  const toggleCaption = (postId) => {
    setExpandedPosts((prevExpandedPosts) => ({
      ...prevExpandedPosts,
      [postId]: !prevExpandedPosts[postId],
    }));
  };
  // Render the posts
  return (
    <>
      {/* caption
: 
"Should I release it? 🤔🔥\n•\n•\n@boilerroomtv @fredagainagainagainagainagain what do you think? 🫣🫣\n•\n•\n#fredagain #fredagainboilerroom #boilerroom #ukgarage #stutterhouse #house"
id
: 
"18075717604436180"
media_type
: 
"VIDEO"
media_url
: 
"https://scontent.cdninstagram.com/o1/v/t16/f1/m82/604AAE4DADC326A383B1A2C9D60B84BB_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&vs=955560655804206_259559461&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC82MDRBQUU0REFEQzMyNkEzODNCMUEyQzlENjBCODRCQl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dFSUhIaG9kLXIySUFIRURBRFIxWFo5d01CRXRicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJrSnsbXW8JtAFQIoAkMzLBdASFEGJN0vGxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYDJw9HPxFDo0ljmWIA6yQN_yOWq6UIZFsEnpTH6dzW-WQ&oe=66451AAF&_nc_sid=1d576d"
permalink
: 
"https://www.instagram.com/reel/C50rMLrMjdS/"
thumbnail_url
: 
"https://scontent.cdninstagram.com/v/t51.29350-15/438955823_976797427502142_4005678086592333128_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=xM2kfntQUYUQ7kNvgGnA4U9&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYB4bDMfTGVzhZ9_l2Gpp-1OsbUO1U2fWTsMDxr5OnAMWw&oe=6648FA57"
[[Prototype]]
: 
Object */}
      <div className="flex feeds-show flex-row justify-center items-center w-full h-full flex-wrap   ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="feed-card lg:w-[21rem] 2xl:w-[21rem] h-full border-b-2  p-3 pb-5"
          >
            <a
              href="https://www.instagram.com/odyzon"
              target="_blank"
              className="feed-card-img flex   items-center"
            >
              <img
                src={`/images/odyzon_profile.jpeg`}
                alt="odyzon profile"
                fill
                className="object-contain w-9 h-9 rounded-full  "
              />
              <h4 className="ml-2 mr-1 text-sm odyzon_profile_name">Odyzon </h4>
              <img
                src={`/images/verified.png`}
                alt="odyzon verified profile"
                fill
                className="object-contain w-[14px] h-[14px]  relative"
              />
            </a>
            <div className="feed-card-content">
              <div
                className={`feed-card-content-heading   text-[14px] mt-2 ${lato.className}`}
              >
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
                      {expandedPosts[post.id] ? " less" : "... more"}
                    </button>
                  )}
                </span>
              </div>
              <a
                href={post.permalink}
                target="_blank"
                className="feed-card-content-body block mt-2 w-full    lg:h-[19rem] 2xl:h-[19rem]"
              >
                {post.media_type === "VIDEO" ? (
                  <img
                    src={post.thumbnail_url}
                    alt="odyzon hero background"
                    fill
                    className="  w-full h-full object-cover     rounded-md  "
                  />
                ) : (
                  <img
                    src={post.media_url}
                    alt="odyzon hero background"
                    fill
                    className="  w-full h-full rounded-md"
                  />
                )}
              </a>
            </div>
          </div>
        ))}
        {isLoadingMore && <Loading />}
      </div>
      {console.log(posts.length)}
      <div className="mt-5 ">
        {posts.length > 0 && (
          <button
            onClick={loadMore}
            className="px-10 py-3 font-bold border rounded shadow-md"
          >
            View More
          </button>
        )}
      </div>
    </>
  );
};

export default Feeds;
