import React, { Component } from "react";

import Screen from "./Screen";

class Movie extends Component {
  checkIsOn = () => {
    let releaseDate = new Date(this.props.movie.releasedate);
    let currentDate = new Date();
    return releaseDate <= currentDate;
  };

  render() {
    return (
      <div className="Movie">
        <div className="Info">
          <h3>{this.props.movie.name}</h3>
          <div className="isOn">{this.checkIsOn() ? "상영중" : "예매중"}</div>
          <div className="grade">{this.props.movie.grade}</div>
          <div className="genre">{this.props.movie.genre}</div>
          <div className="runningtime">{this.props.movie.runningtime}</div>
          <div className="releasedate">{this.props.movie.releasedate} 개봉</div>
        </div>
        <div className="ScreenBox">
          {this.props.movie.screenList.map((item, index) => (
            <Screen
              screen={item}
              reserveData={{
                ...this.props.reserveData,
                movie: { ...this.props.movie, screensList: undefined }
              }}
              key={index}
            ></Screen>
          ))}
        </div>
      </div>
    );
  }
}

export default Movie;
