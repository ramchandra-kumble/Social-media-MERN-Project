import React, { useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../Posts/Post";
import axios from "axios";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/60c8e5d33720f24398b7b7c4");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrap">
        <Share />
        {posts.map((p) => {
          return <Post key={p._id} post={p} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
