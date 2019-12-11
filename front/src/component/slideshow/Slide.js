import React, { Component } from "react";
import { Fade } from "react-slideshow-image";
import "./style/slide.css";
import { Link } from "react-router-dom";
import axios from "axios";

const testData = [
  {
    num: 1,
    img: {
      src: "/assets/images/movies/1.jpg"
    },

    title: "Frozen2",
    rate: "93.2",
    releasedate: "2019.11.21"
  },

  {
    num: 2,
    img: {
      src: "/assets/images/movies/10.jpg"
    },
    title: "나를 찾아줘",
    rate: "9.2",
    releasedate: "2019.11.27"
  },

  {
    num: 3,
    img: {
      src: "/assets/images/movies/7.jpg"
    },
    title: "블랙머니",
    rate: "4.2",
    releasedate: "2019.11.13"
  },

  {
    num: 4,
    img: {
      src: "/assets/images/movies/9.jpg",
      alt: "러브앳 poster"
    },
    title: "러브앳",
    rate: "2.8",
    releasedate: "2019.11.27"
  },

  {
    num: 5,
    img: {
      src: "/assets/images/movies/4.jpg"
    },
    title: "82년생 김지영",
    rate: "1.4",
    releasedate: "2019.10.23"
  },

  {
    num: 6,
    img: {
      src: "/assets/images/movies/5.jpg"
    },
    title: "윤희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 7,
    img: {
      src: "/assets/images/movies/8.jpg"
    },
    title: "나이보스이웃",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 8,
    img: {
      src: "/assets/images/movies/7.jpg"
    },
    title: "윤희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 9,
    img: {
      src: "/assets/images/movies/10.jpg"
    },
    title: "감쪽같은영희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 10,
    img: {
      src: "/assets/images/movies/11.jpg"
    },
    title: "크롤",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 11,
    img: {
      src: "/assets/images/movies/12.jpg"
    },
    title: "감쪽같은영희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 12,
    img: {
      src: "/assets/images/movies/13.jpg"
    },
    title: "감쪽같은영희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 13,
    img: {
      src: "/assets/images/movies/14.jpg"
    },
    title: "감쪽같은영희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 14,
    img: {
      src: "/assets/images/movies/15.jpg"
    },
    title: "감쪽같은영희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 15,
    img: {
      src: "/assets/images/movies/16.jpg"
    },
    title: "감쪽같은영희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 16,
    img: {
      src: "/assets/images/movies/17.jpg"
    },
    title: "감쪽같은영희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 17,
    img: {
      src: "/assets/images/movies/18.jpg"
    },
    title: "감쪽같은영희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 18,
    img: {
      src: "/assets/images/movies/19.jpg"
    },
    title: "감쪽같은영희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  },
  {
    num: 19,
    img: {
      src: "/assets/images/movies/20.jpg"
    },
    title: "감쪽같은영희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  },

  {
    num: 20,
    img: {
      src: "/assets/images/movies/21.jpg"
    },
    title: "감쪽같은영희에게",
    rate: "0.9",
    releasedate: "2019.10.23"
  }
];

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
    movies: testData
  };

  componentDidMount() {
    axios.get(`/api/movies?num=${16}`).then(res => {
      console.log(res.data);
      this.setState({ movies: res.data });
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
        >
          <img
            key={index}
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
        <Fade {...fadeProperties}>{this.renderFadeChild()}</Fade>
      </div>
    );
  }
}

export default Slideshow;
