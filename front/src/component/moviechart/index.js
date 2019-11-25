import React, { Component } from 'react';
import './style/moviechart.css';

class MovieChart extends Component{
  static defaultProps = { 
    movieChartData: [
      {
        num: "No.1",
        title: "Frozen2",
        rate: "93.2",
        releasedate:"2019.11.21"
        
      },

      {
        num: "No.2",
        title: "블랙머니",
        rate: "4.3",
        releasedate:"2019.11.13"

      },

      {
        num: "No.3",
        title: "신의 한수-귀수편",
        rate: "0.6",
        releasedate:"2019.11.07"
      },

      {
        num: "No.4",
        title: "윤희에게",
        rate: "0.4",
        releasedate:"2019.11.14"
      },

      {
        num: "No.5",
        title: "82년생 김지영",
        rate: "0.4",
        releasedate:"2019.10.23"
      }
    ]
  }

  // renderMovieChart() {
  //   var jsx = new Array();
  //   this.props.movieChartData.map(movieData => {
  //     var oneMovie = new Array();
  //     oneMovie.push(<div class='num'>{movieData.num}</div>);
  //     oneMovie.push(<div class='image'></div>);
  //     oneMovie.push(<div class='title'>{movieData.title}</div>);
  //     oneMovie.push(<div class='releasedate'>{movieData.releasedate} 개봉</div>);
  //     oneMovie.push(<div class='rate'>{movieData.rate}%</div>);
  //     oneMovie.push(<div class='ticket'>예매</div>);
  //     jsx.push(<div class='movie'>{oneMovie}</div>);
  //   })
  //   return jsx;
  // }

  render() {

    return(
      <div className='MovieChart'>
      <div class='num'>{this.props.num}</div>
      <div class='image'></div>
      <div class='title'>{this.props.title}</div>
      <div class='releasedate'>{this.props.releasedate} 개봉</div>
      <div class='rate'>{this.props.rate}%</div>
      <div class='ticket'>예매</div>
      </div>

    );
  }
}

export default MovieChart;