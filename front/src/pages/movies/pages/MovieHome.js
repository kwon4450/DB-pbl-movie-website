import React, { Component } from "react";
import MovieChart from "component/moviechart";
import axios from "axios";

class MovieHome extends Component {
  state = {
    movies: null
  };

  componentDidMount() {
    axios
      .get(`/api/movies?num=${6}`)
      .then(res => {
        console.log(res.data);
        this.setState({ movies: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="MovieHome">
        <h1>무비차트</h1>

        {this.state.movies === null ? (
          <h2>Loading...</h2>
        ) : typeof this.state.movies === "object" ? (
          <>
            <div className="overall">
              <div className="inner_overall">
                {this.state.movies.slice(0, 3).map((movieData, index) => {
                  return (
                    <MovieChart
                      movie={movieData}
                      no={index + 1}
                      key={index + 1}
                    />
                  );
                })}
              </div>
            </div>

            <div className="overall">
              <div className="inner_overall">
                {this.state.movies.slice(3, 6).map((movieData, index) => {
                  return (
                    <MovieChart
                      movie={movieData}
                      no={index + 4}
                      key={index + 4}
                    />
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <h2>Fail to loading Movie Slide :(</h2>
        )}
      </div>
    );
  }
}

export default MovieHome;
