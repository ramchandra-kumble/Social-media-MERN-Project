import React from "react"
import "./feed.css"
import Share from "../share/Share"
import Post from "../Posts/Post"
import { Posts } from "../../dummyData"

function Feed(){
 return(
     <div className="feed">
         <div className="feedWrap">
             <Share />
         { Posts.map((p) => {
              return  <Post key={p.id} post={p}/>
            })}
             
         
         </div>
     </div>
 )
}

export default Feed