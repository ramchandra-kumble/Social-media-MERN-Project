import React from "react";
import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"


function Share() {
  return (
      <div className="share">
          <div className="shareWrap">
              <div className="shareTop">
                  <img src="/assets/person/1.jpeg" alt="" className="shareImg"/>
                  <input placeholder="What's on your mind?" className="shareInput"/>
              </div>
              <hr className="shareHr"/>
              <div className="shareBottom">
                  <div className="shareOptions">
                      <div className="shareOption">
                      <PermMedia htmlColor="tomato" className="shareIcon" />
                          <span className="shareOptionText">Photo or Video</span>
                      </div>
                      <div className="shareOption">
                      <Label htmlColor="blue" className="shareIcon" />
                          <span className="shareOptionText">Tag</span>
                      </div>
                      <div className="shareOption">
                      <Room htmlColor="green" className="shareIcon" />
                          <span className="shareOptionText">Locations</span>
                      </div>
                      <div className="shareOption">
                      <EmojiEmotions htmlColor="gold" className="shareIcon" />
                          <span className="shareOptionText">Feelings</span>
                      </div>
                  </div>
                  <button className="shareButton"> Share</button>
              </div>
          </div>
      </div>
  )
}

export default Share