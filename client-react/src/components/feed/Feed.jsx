import React, { useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../Posts/Post";
import axios from "axios";
import {AuthContext } from "../../context/AuthContext"
import { useContext } from "react";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id );
      setPosts(res.data);
    };
    fetchPosts();
  }, [username,user._id]);

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
