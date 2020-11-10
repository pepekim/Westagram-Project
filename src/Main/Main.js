import React, { Component } from "react";
import "./Main.scss";
import Nav from "./NavComponent";
import FeedComponent from "./FeedComponent";
import MainRightComponent from "./MainRightComponent";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      is_profile: false,
      show_search: false,
      story_obj: [
        {
          id: 1,
          img:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/19986107_1929188313997883_4667140222381719552_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=8JKMg4kIYjgAX9rcadv&oh=518deaae5ef50cbbde63ba2d9b956444&oe=5FC1FFB8",
          name: "blonded.frank",
          time: "16분 전",
        },
        {
          id: 2,
          img:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/13398945_606411692847007_1530173578_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=k6aBKCEBdcAAX_vhPPP&oh=8abb5c19dab4eb57dbcb4019b72101a7&oe=5FBF8043",
          name: "netflixkr",
          time: "3시간 전",
        },
        {
          id: 3,
          img:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/120970966_663531917929969_1758896461441744439_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=REk4vfdIBI8AX9pnsFw&oh=fda7237776b646d6e2c5be293b01a264&oe=5FC079D6",
          name: "lilyiu_",
          time: "20시간 전",
        },
      ],
      recommend_obj: [
        {
          id: 1,
          img:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/73117211_1407554756077007_496398155269537792_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=9fgI7rJy4-MAX-NmM7N&oh=48cfc56aec75b8d2536a637890f42be7&oe=5FC13ED0",
          name: "tameimpala",
          desc: "_legend_a님 외 2명이 ...",
        },
        {
          id: 2,
          img:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/13741205_1738776383055894_1493730264_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=qg41RZJWdYUAX_oWGqO&oh=7afb6e3b373822f4cde75c7113fadf6d&oe=5FBF2AD4",
          name: "blackpinkofficial",
          desc: "ringo.nseoul님 외 12 ...",
        },
        {
          id: 3,
          img:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/47259483_597840293986027_7463302487722688512_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=5sBjawshF3QAX_8Ezmi&oh=8aa177dfb524b61a9f47318f36b186c7&oe=5FC007A3",
          name: "holideez",
          desc: "jimmylee1220님 외 1...",
        },
      ],
      user: [],
    };
  }

  show_profile = () => {
    const { is_profile } = this.state;
    this.setState({
      is_profile: !is_profile,
    });
  };

  render() {
    const {
      click_add_comment,
      enter_add_comment,
      delete_comment,
      handle_comment,
      goToLogin,
      show_profile,
    } = this;

    const {
      comment_arr,
      time_check,
      passed_time,
      is_profile,
      story_obj,
      recommend_obj,
    } = this.state;

    return (
      <div className="main_page">
        <Nav show_profile={show_profile} is_profile={is_profile} />
        <main>
          <FeedComponent goToLogin={goToLogin} />
          <MainRightComponent
            story_obj={story_obj}
            recommend_obj={recommend_obj}
          />
        </main>
      </div>
    );
  }
}

export default Main;
