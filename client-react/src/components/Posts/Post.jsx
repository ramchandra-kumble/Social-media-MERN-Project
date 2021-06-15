import React, {useState} from "react";
import "./post.css";
import {MoreVert} from "@material-ui/icons"
import {Users} from "../../dummyData"

function Post ({post}) {

const [like, setLike] = useState(post.like)
const [isLiked, setIsLiked] = useState(false)

function likeHandle () {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
}

  return(
      <div className="post">
        <div className="postWrap">
            <div className="postTop">
                <div className="postLeftTop">
                    <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt=""  className="postProfileImg"/>
                    <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postRightTop">
                    < MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImages"/>
            </div>
            <div className="postBottom">
                <div className="postLeftBottom">
                    <img src="assets/like.png" alt="" className="postLike"  onClick={likeHandle}/>
                    <img src="assets/heart.png" alt="" className="postHeart" onClick={likeHandle}/>
                    <span className="likeCounter">{like} people like it</span>
                </div>
                <div className="postRightBottom">
                    <span className="postComments">{post.comment} comments</span>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Post