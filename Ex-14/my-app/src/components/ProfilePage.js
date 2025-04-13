import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const ProfilePage = () => {
  const user = {
    imageUrl: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software developer with a passion for web technologies.",
    posts: [
      "Exploring React Hooks",
      "Building a Full-Stack Application",
      "Understanding JavaScript Closures",
    ],
  };

  return (
    <div className="profile-page">
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;