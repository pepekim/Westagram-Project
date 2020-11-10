import React, { Component } from "react";
import "./CommentComponent.scss";

class CommentComponent extends Component {
  constructor() {
    super();
    this.state = {
      heart_on: false,
    };
  }

  heart_event = () => {
    const { heart_on } = this.state;
    this.setState({
      heart_on: !heart_on,
    });
  };

  render() {
    const { heart_on } = this.state;
    const { heart_event } = this;

    const { el, idx, delete_comment } = this.props;

    return (
      <div className="CommentComponent">
        <div key={idx} className="new_comment">
          <p>
            b2ng_9
            <span>{el.comment}</span>
            <more>더 보기</more>
            <delete id={el.id} onClick={delete_comment}>
              댓글 삭제
            </delete>
          </p>
          <div className="heart_container">
            <img
              className="heart_img"
              id={el.id}
              onClick={heart_event}
              src={
                heart_on
                  ? "/images/filled_heart.png"
                  : "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" // heart_on이 거짓일때 보이는 빈하트(기본값)
              }
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CommentComponent;
