import React, { Component } from "react";
import "./MainRightComponent.scss";
import FollowComponent from "./FollowComponent";

class MainRightComponent extends Component {
  render() {
    const { story_obj, recommend_obj } = this.props;

    return (
      <div className="MainRightComponent">
        <div className="main_right">
          <div className="right_contents">
            <div className="right_profile">
              <img
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=hHYxvWLpv3AAX8-d0yM&oh=dfa789d27ac08d6bd45a47702becae96&oe=5FBE2370"
                alt="위코드아이콘"
              />
              <p>
                wecode_bootcamp
                <br />
                <span>WeCode | 위코드</span>
              </p>
            </div>
            <div className="story_container">
              <div className="story_heading">
                <div className="story">스토리</div>
                <div className="story_see_all">모두 보기</div>
              </div>
              {story_obj.map((el) => {
                return (
                  <div className={"story_list_" + el.id}>
                    <img src={el.img} alt="" />
                    <p>
                      {el.name}
                      <br />
                      <span>{el.time}</span>
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="recommend_container">
              <div className="recommend_heading">
                <div className="recommend">회원님을 위한 추천</div>
                <div className="recommend_see_all">모두 보기</div>
              </div>
              {recommend_obj.map((el) => {
                return (
                  <div className="recommend_list">
                    <img src={el.img} alt="" />
                    <p>
                      {el.name}
                      <br />
                      <span>{el.desc}</span>
                    </p>
                    <div className="follow_container">
                      <FollowComponent />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="etc_container">
              <p className="etc">
                Instagram 정보·지원·홍보 센터·API·
                <br />
                채용 정보·개인정보처리방침·약관·
                <br />
                디렉터리·프로필·해시태그·언어
                <br />
                <br />© 2019 INSTAGRAM
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainRightComponent;
