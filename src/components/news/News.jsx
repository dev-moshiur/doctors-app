
import './news.scss'
import React from 'react'

import doctorimg from '../../doctors-icon/doctor.png';
import likeimg from '../../doctors-icon/like.png'
import commentimg from '../../doctors-icon/comment.png'

export default function News({image,name,like,caption,text,comment}) {
  return (
    <div className='news'>

      <div className="imgContainer">
        <img src={image} alt="" />

      </div>
      <div className="reactions">
        <div className="name">
          <img src={doctorimg} alt="" />

          <span>{name}</span>

        </div>
        <div className="comment">
          <img src={commentimg} alt="" />

          <span>{comment}</span>


        </div>
        <div className="like">
          <img src={likeimg} alt="" />
          <span>{like}</span>
        </div>
      </div>
      <div className="heading">
        {caption}
      </div>
      <div className="text">
        {text}
      </div>
      <a href="#">Learn More</a>

    </div>
  )
}
