import React from 'react'

const Discussion = ({discussion}) => {
  return (
    <div>
      <li className="discussion__container">
        <div className="discussion__avatar--wrapper">
          <img className="discussion__avatar--image"
            src={discussion.avatarUrl}
            alt="avatar of kimploo"/>
        </div>
        <div className="discussion__content">
          <h2 className="discussion__title"><a href={discussion.url}>{discussion.title}</a></h2>
          <div className="discussion__information">{discussion.author} / {discussion.createdAt}</div>
        </div>
        <div className="discussion__answered"><p><i className="fa-light fa-badge-check"></i></p></div>
      </li>
    </div>
  )
}

export default Discussion