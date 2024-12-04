import React, { useState, useEffect, useRef } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbsUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import Trash2Icon from "@mui/icons-material/Delete"; // For trash icon (you may need to adjust based on your actual need)
import Navbar from "../../Components/Navbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CreatePostModal from "./CreatePostModal";

const users = [
  {
    id: 1,
    firstName: "Ali",
    lastName: "Amin",
    email: "ali.qwerty32a0@gmail.com",
  },
];
const communityPosts = [
  {
    id: 1,
    createdBy: {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      id: 1,
    },
    content:
      "Habitant morbi tristique senectus et netus. Suspendisse sed felis ac risus sed venenatis. Dolor morbi non risus quis urna.",
    hashtags: "#AmazingProject #Meditation #Mindfulness #MentalHealth",
    type: "image",
    assetUrl: "https://via.placeholder.com/600x400",
    likes: 12,
    comments: [
      {
        id: 1,
        comment: "Great post!",
        user: {
          firstName: "Alice",
          lastName: "Smith",
          email: "alice@example.com",
          profileImageUrl: "https://via.placeholder.com/50",
        },
      },
    ],
    shares: 187,
    likedBy: [1],
  },
  {
    id: 2,
    createdBy: {
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@example.com",
      id: 2,
    },
    content:
      "Habitant morbi tristique senectus et netus. Suspendisse sed felis ac risus sed venenatis.",
    hashtags: "#Yoga #Wellness",
    type: "video",
    assetUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 20,
    comments: [],
    shares: 100,
    likedBy: [2],
  },
];

const Community = () => {
  const [openComments, setOpenComments] = useState({});
  const [commentText, setCommentText] = useState({});
  const [replyText, setReplyText] = useState({});
  const [openReply, setOpenReply] = useState({});
  const [isMembersVisible, setIsMembersVisible] = useState(false);
  const dropdownRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMembersDropdown = () => {
    setIsMembersVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMembersVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMembersVisible]);
  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const currentUser = {
    id: 1,
    firstName: "John",
    email: "johndoe@example.com",
  }; // Static current user for demo purposes

  const handleDeletePost = (postId) => {
    // Handle post deletion
    console.log(`Post with id ${postId} deleted.`);
  };

  const likeThePost = (postId) => {
    // Handle post like functionality
    console.log(`Liked post with id ${postId}`);
  };

  const toggleComments = (postId) => {
    setOpenComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const addCommentToPost = (postId) => {
    // Add comment to post
    console.log(
      `Added comment to post with id ${postId}: ${commentText[postId]}`
    );
  };

  const toggleReply = (commentId) => {
    setOpenReply((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const addReplyToComment = (postId, commentId) => {
    // Add reply to comment
    console.log(
      `Added reply to comment with id ${commentId} on post ${postId}: ${replyText[commentId]}`
    );
  };

  return (
    <div className="mt-24">
      <Navbar />
      <div className="mx-12 my-5 flex flex-row justify-between w-full">
        <h1 className="text-white font-semibold text-2xl">Community</h1>
        <div className="mr-14">
          <button
            className="bg-[#1b1a1a] hover:bg-[#413e3e] transition duration-300 w-auto pr-1 pl-3 h-9 text-white font-semibold mr-5 rounded-lg"
            onClick={toggleMembersDropdown}
          >
            {isMembersVisible ? (
              <>
                Members <ExpandLessIcon />
              </>
            ) : (
              <>
                Members <ExpandMoreIcon />
              </>
            )}
          </button>
          <button
            className="bg-[#3b82f6] hover:bg-[#2e67c3] transition duration-300 w-auto px-5 h-9 text-white font-semibold mr-20 rounded-lg "
            onClick={handleCreateClick}
          >
            Create
          </button>
        </div>
      </div>
      <div className="flex flex-col mx-5 space-y-5 w-11/12 z-10">
        {communityPosts.map((post) => (
          <div
            key={post.id}
            className="bg-[#101011] w-full mx-8 rounded-lg border-2 border-[#404041]"
          >
            <div>
              <div className="flex flex-row items-center bg-transparent w-full h-16 mt-2 border-b-2 border-[#232323]">
                <div className="w-10 h-10 rounded-full overflow-hidden mx-5">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-row flex-1 items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-[#b1b1b1] font-semibold">
                      {post.createdBy.firstName + " " + post.createdBy.lastName}
                    </h2>
                    <p className="text-xs text-[#b1b1b1]">
                      {post.createdBy.email}
                    </p>
                  </div>
                  {post.createdBy.id === currentUser.id && (
                    <div className="pr-3">
                      <Trash2Icon
                        onClick={() => handleDeletePost(post.id)}
                        className="cursor-pointer text-red-700"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="border-b-2 border-[#232323]">
                <p className="text-white m-8 font-light">
                  {post.content} {post.hashtags}
                </p>
                {post.type === "image" && post.assetUrl && (
                  <div className="w-full h-[500px] overflow-hidden px-8 my-8">
                    <img
                      src={post.assetUrl}
                      alt=""
                      className="w-full h-full rounded-lg object-contain"
                    />
                  </div>
                )}
                {post.type === "video" && post.assetUrl && (
                  <div className="w-full h-[500px] overflow-hidden px-8 my-8">
                    <video
                      controls
                      src={post.assetUrl}
                      className="w-full h-full rounded-lg object-center"
                    />
                  </div>
                )}
                <div className="flex flex-row my-8">
                  <div
                    className="flex flex-row cursor-pointer"
                    onClick={() => likeThePost(post.id)}
                  >
                    {post.likedBy.includes(currentUser.id) ? (
                      <ThumbUpAltIcon className="text-white ml-8 mr-3" />
                    ) : (
                      <ThumbsUpIcon className="text-white ml-8 mr-3" />
                    )}
                    <p className="text-white">{post.likes} Likes</p>
                  </div>
                  <div
                    className="flex flex-row cursor-pointer"
                    onClick={() => toggleComments(post.id)}
                  >
                    <CommentIcon className="text-white ml-8 mr-3" />
                    <p className="text-white">
                      {post.comments.length} Comments
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <ShareIcon className="text-white ml-8 mr-3" />
                    <p className="text-white">{post.shares} Shares</p>
                  </div>
                </div>
              </div>
              {openComments[post.id] && (
                <>
                  <div className="flex flex-row">
                    <div className="flex-1">
                      <div className="flex items-center m-5">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                          <img
                            src="https://via.placeholder.com/150"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <textarea
                          value={commentText[post.id] || ""}
                          onChange={(e) =>
                            setCommentText({
                              ...commentText,
                              [post.id]: e.target.value,
                            })
                          }
                          type="text"
                          className="bg-black h-9 text-white rounded-full w-full border border-[#b1b1b1] resize-none outline-none pt-1 pl-3"
                          placeholder="Write your Comment.."
                        />
                      </div>
                    </div>
                    <div className="flex flex-row m-5 space-x-3">
                      <div
                        onClick={() => addCommentToPost(post.id)}
                        className="w-10 h-10 rounded-full border border-[#6a55ea] flex items-center justify-center cursor-pointer"
                      >
                        <SendIcon className="text-[#6a55ea]" />
                      </div>
                    </div>
                  </div>
                  <div className="px-8 flex flex-col gap-5 my-5">
                    {post.comments.map((comment) => (
                      <div key={comment.id}>
                        <div className="flex flex-row gap-3 items-center">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img
                              src={comment.user.profileImageUrl}
                              alt="Profile"
                              className="w-full h-full object-center"
                            />
                          </div>
                          <div className="flex flex-row justify-between items-center flex-1">
                            <div className="text-white text-xs">
                              <p className="text-sm">
                                {comment.user.firstName +
                                  " " +
                                  comment.user.lastName}
                              </p>
                              <p className="text-slate-300">
                                {comment.user.email}
                              </p>
                            </div>
                            {comment.user.email === currentUser.email && (
                              <div className="text-red-700">
                                <DeleteOutlineIcon className="text-[#e53939] hover:text-[#b22c2c] cursor-pointer" />
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-white mt-4">{comment.comment}</p>
                        <div className="flex items-center space-x-3 mt-2">
                          <ThumbsUpIcon className="text-white" />
                          <p className="text-white">Like</p>
                          <button
                            onClick={() => toggleReply(comment.id)}
                            className="text-white"
                          >
                            Reply
                          </button>
                        </div>
                        {openReply[comment.id] && (
                          <div className="mt-5">
                            <div className="flex gap-3 items-center">
                              <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img
                                  src="https://via.placeholder.com/150"
                                  alt="User"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <textarea
                                value={replyText[comment.id] || ""}
                                onChange={(e) =>
                                  setReplyText({
                                    ...replyText,
                                    [comment.id]: e.target.value,
                                  })
                                }
                                className="bg-black h-9 text-white rounded-full w-full border border-[#b1b1b1] resize-none outline-none pt-1 pl-3"
                                placeholder="Write your reply.."
                              />
                            </div>
                            <div className="flex flex-row m-5 space-x-3">
                              <div
                                onClick={() =>
                                  addReplyToComment(post.id, comment.id)
                                }
                                className="w-10 h-10 rounded-full border border-[#6a55ea] flex items-center justify-center cursor-pointer"
                              >
                                <SendIcon className="text-[#6a55ea]" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
        {isMembersVisible && (
          <div
            ref={dropdownRef}
            className="members-dropdown bg-black p-4 rounded-lg shadow-lg w-1/4 absolute top-[150] right-[10px] z-50"
            style={{
              maxHeight: "500px", // Limits the height of the dropdown
              overflowY: "auto", // Enables scrolling for overflowing content
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1 className="text-white text-lg font-semibold mb-2">Members</h1>
            {users.map((member) => (
              <div
                key={member.id}
                className="flex flex-row items-center border-b border-[#232323] py-2"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden mx-3">
                  {member.profileImageUrl ? (
                    <img
                      src={
                        member.profileImageUrl
                          ? member.profileImageUrl
                          : `${process.env.PUBLIC_URL}/images/Rectangle.png`
                      }
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">
                        {member?.firstName?.[0].toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-[#b1b1b1] font-semibold">
                    {member.firstName + " " + member.lastName}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={() => {
          handleCloseModal();
        }}
        // onPost={handlePostUpload}
        itemType="post"
      />
    </div>
  );
};

export default Community;
