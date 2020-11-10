import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CommentComponent from "./CommentComponent";
import "./FeedComponent.scss";

let time = new Date();

class FeedComponent extends Component {
  constructor() {
    super();
    this.state = {
      comment_str: "",
      comment_arr: [],
      time_check: false,
      passed_time: 0,
    };
  }
  goToLogin = () => {
    alert("Logout ...");
    this.props.history.push("/Login");
  };

  handle_comment = (e) => {
    const { comment_str } = this.state;
    this.setState({
      comment_str: e.target.value,
    });
  };

  enter_add_comment = (e) => {
    e.preventDefault();
    const { comment_str, comment_arr, passed_time, time_check } = this.state;
    if (e.keyCode === 13) {
      const obj = {
        id: Date.now(),
        comment: comment_str,
      };

      let write_time = new Date();
      let tictok = Math.floor(parseInt(time - write_time) / 1000);

      this.setState({
        comment_arr: [...comment_arr, obj],
        time_check: true,
        passed_time: tictok,
      });
      time = new Date();
    }

    console.log(comment_arr);
  };

  click_add_comment = (e) => {
    e.preventDefault();
    const { comment_str, comment_arr, passed_time, time_check } = this.state;

    const obj = {
      id: Date.now(),
      comment: comment_str,
    };

    let write_time = new Date();
    let tictok = Math.floor(parseInt(time - write_time) / 1000);
    this.setState({
      comment_arr: [...comment_arr, obj],
      time_check: true,
      passed_time: tictok,
    });
    time = new Date();
  };

  delete_comment = (e) => {
    const { comment_arr } = this.state;
    const deleted_comment = comment_arr.filter((item) => {
      return item.id !== Number(e.target.id);
    });
    this.setState({
      comment_arr: deleted_comment,
    });
    console.log("댓글삭제");
  };

  render() {
    const { comment_arr, time_check, passed_time } = this.state;
    const {
      handle_comment,
      enter_add_comment,
      click_add_comment,
      delete_comment,
    } = this;

    return (
      <div className="FeedComponent">
        <div className="feeds">
          <article>
            <div className="article_profile">
              <div className="profile_container">
                <div className="profile">
                  <img
                    className="article_profile_image"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/28158260_1453597001433631_7553486819434692608_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=9ILpfnz6lsAAX-MgtoG&oh=99fa835e29a6a1270850e7e3d05fb56a&oe=5FBEA659"
                    alt="프로필이미지"
                  />
                  <p className="article_profile_id">b2ng_9</p>
                  <span className="logout" onClick={this.goToLogin}>
                    로그아웃
                  </span>
                </div>
                <img
                  className="threeDots"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                  alt="닷이미지"
                />
              </div>
            </div>
            <img
              className="feedImage"
              src="/images/chorong2.png"
              alt="피드이미지"
            />
            <div className="article_bottom">
              <div className="article_icon_container">
                <div className="article_left_icons">
                  <img
                    className="red_heart_icon"
                    src="/images/filled_heart.png"
                    alt="하트아이콘"
                  />
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                    alt="말풍선아이콘"
                  />
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                    alt="업로드아이콘"
                  />
                </div>
                <img
                  className="right_icon"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                  alt="북마크아이콘"
                />
              </div>
              <div className="article_likes">
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118504351_3145176638941753_2838070089524687224_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=x7WKpv26mLoAX997-tB&oh=61ccb3e5c3a1a6715d594cb491682a44&oe=5FBF9E5F"
                  alt="좋아요아이콘"
                />
                <p>
                  <span>fengsuave</span>님 <span>외 10명</span>이 좋아합니다
                </p>
              </div>

              <div className="comment_container">
                <div className="new_comment_container">
                  <div className="fixed_comment">
                    <p>
                      b2ng_9<span>초롱이 짱짱</span>
                      <more>더 보기</more>
                      <delete onClick={delete_comment}>댓글 삭제</delete>
                    </p>
                    <div className="heart_container">
                      <img
                        className="heart"
                        src="/images/filled_heart.png"
                        alt=""
                      />
                    </div>
                  </div>
                  {comment_arr.map((el, idx) => {
                    return (
                      <CommentComponent
                        delete_comment={delete_comment}
                        key={idx}
                        el={el}
                        idx={idx}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="time">
                {time_check ? passed_time + "초전" : "42분전"}
              </div>
              <div className="input_box">
                <input
                  onChange={handle_comment}
                  onKeyUp={enter_add_comment}
                  className="input_comment"
                  placeholder="댓글 달기..."
                />
                <div className="post_btn" onClick={click_add_comment}>
                  게시
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default withRouter(FeedComponent);
