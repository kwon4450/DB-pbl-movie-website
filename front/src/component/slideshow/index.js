import React, { Component } from "react";
import { Fade } from "react-slideshow-image";
import "./style/slide.css";
import { Link } from "react-router-dom";
import axios from "axios";

const fadeProperties = {
  duration: 5000,
  transitionDuration: 2000,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
};

class Slideshow extends Component {
  state = {
    movies: null
  };

  componentDidMount() {
    axios
      .get(`/api/movies?num=${16}`)
      .then(res => {
        console.log(res.data);
        this.setState({ movies: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  renderFadeChild = () => {
    let jsx = [];
    for (let i = 0; i < this.state.movies.length; i += 8) {
      let tmp = this.state.movies.slice(i, i + 8).map((item, index) => (
        <Link
          to={{
            pathname: `/movies/detail/${item.movietitle}`,
            state: {
              movie: item
            }
          }}
          key={index}
        >
          <img
            src={`/assets/images/movies/${item.movieid}.jpg`}
            alt={`${item.movietitle} poster`}
            style={{ width: "190px", height: "200px" }}
          />
        </Link>
      ));
      jsx.push(tmp);
    }
    return jsx;
  };
  render() {
    return (
      <div className="slide-container">
        {this.state.movies === null ? (
          <h2>Loading...</h2>
        ) : typeof this.state.movies === "object" ? (
          <Fade {...fadeProperties}>{this.renderFadeChild()}</Fade>
        ) : (
          <h2>Fail to loading Movie Slide :(</h2>
        )}
      </div>
    );
  }
}

export default Slideshow;
