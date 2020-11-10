import userEvent from "@testing-library/user-event";
import React, { Component } from "react";
import "./NavComponent.scss";

class NavComponent extends Component {
  constructor() {
    super();
    this.state = {
      show_search: false,
      user: [],
      profile_obj: [
        { id: 1, img: "fa fa-user-circle fa-lg", name: "프로필" },
        { id: 2, img: "fa fa-bookmark fa-lg", name: "저장됨" },
        { id: 3, img: "fa fa-cog fa-lg", name: "설정" },
        { id: 4, img: "", name: "로그아웃" },
      ],
    };
  }

  key_up_event = (e) => {
    const { show_search, user } = this.state;
    if (e.target.value === "wecode") {
      this.setState({
        show_search: true,
        user: [
          { id: 1, name: "wecode_bootcamp", desc: "wecode | 위코드" },
          { id: 2, name: "wecode_founder", desc: "송은우 (Eun Woo Song)" },
          { id: 3, name: "wecode_korea", desc: "" },
          { id: 4, name: "Wecode", desc: "강남구 테헤란로 427,서울" },
        ],
      });
    } else {
      this.setState({
        show_search: false,
        user: [],
      });
    }
  };
  render() {
    const { user, show_search, profile_obj } = this.state;
    const { key_up_event } = this;
    const { show_profile, is_profile } = this.props;
    return (
      <div className="NavComponent">
        <nav>
          <div className="input_left_icons">
            <img
              className="insta_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
              alt="인스타로고"
            />
            <span className="line"></span>
            <img
              className="insta_text"
              src="/images/insta_logo.png"
              alt="인스타텍스트"
            />
          </div>
          <div className="input_container">
            <div className="input_search_container">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input
                className="input_search"
                placeholder="검색"
                onKeyUp={key_up_event}
              />
            </div>
            <div className="search_list_container">
              {show_search
                ? user.map((el) => {
                    return (
                      <div className="search_list">
                        <p>
                          {el.name}
                          <span>{el.desc}</span>
                        </p>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
          <div className="input_right_icons">
            <img
              className="navi_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="네비아이콘"
            />
            <img
              className="heart_icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="하트아이콘"
            />
            <img
              className="man_icon"
              onClick={show_profile}
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="사람아이콘"
            />
            <div className="show_profile_container">
              {is_profile &&
                profile_obj.map((el) => {
                  return (
                    <div className={"profile_list_" + el.id}>
                      <i className={el.img}></i>
                      <p>{el.name}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavComponent;
