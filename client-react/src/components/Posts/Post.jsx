import React, { useState, useEffect } from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const {user: currentUser} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id,post.likes]);

  
  
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUsers();
  }, [post.userId]);

  function likeHandle() {

    try {
    axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="postWrap">
        <div className="postTop">
          <div className="postLeftTop">
            <Link
              style={{ textDecoration: "none" }}
              to={`profile/${user.username}`}
            >
              <img
                src={user.profilePicture ? PF + user.profilePicture : PF + "person/no_avatar.png"}
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postRightTop">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImages" />
        </div>
        <div className="postBottom">
          <div className="postLeftBottom">
            <img
              src={`${PF}like.png`}
              alt=""
              className="postLike"
              onClick={likeHandle}
            />
            <img
              src={`${PF}heart.png`}
              alt=""
              className="postHeart"
              onClick={likeHandle}
            />
            <span className="likeCounter">{like} people like it</span>
          </div>
          <div className="postRightBottom">
            <span className="postComments">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
