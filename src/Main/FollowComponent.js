import React, { Component } from "react";
import "./FollowComponent.scss";

class FollowComponent extends Component {
  constructor() {
    super();
    this.state = {
      is_follow: false,
    };
  }

  follow_event = (e) => {
    const { is_follow } = this.state;

    if (e.target.className === "follow") {
      const message = window.confirm("팔로우 하시겠습니까?");
      if (message === true) {
        this.setState({
          is_follow: !is_follow,
        });
      }
    } else if (e.target.className === "followed") {
      const message = window.confirm("언팔로우 하시겠습니까?");
      if (message === true) {
        this.setState({
          is_follow: !is_follow,
        });
      }
    }
  };

  render() {
    const { is_follow } = this.state;
    const { follow_event } = this;

    return (
      <div className="FollowComponent">
        <div
          onClick={follow_event}
          className={is_follow ? "followed" : "follow"}
        >
          팔로우
        </div>
      </div>
    );
  }
}

export default FollowComponent;
