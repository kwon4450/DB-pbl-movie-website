import React, { Component } from "react";
import Moviedetail from "component/movieDetail";

class Detail extends Component {
  movieInfo = [{"movieid":1,"isscreening":1,"movietitle":"겨울왕국 2","postersrc":"/assets/images/movies/1.jpg","releasedate":"2019.11.21","grade":"전체","director":"크리스 벅,제니퍼 리","actor":"크리스틴 벨,이디나 멘젤","genre":"애니메이션","story":"내 마법의 힘은 어디서 왔을까?\n나를 부르는 저 목소리는 누구지?\n어느 날 부턴가 의문의 목소리가 엘사를 부르고, 평화로운 아렌델 왕국을 위협한다.\n트롤은 모든 것은 과거에서 시작되었음을 알려주며 엘사의 힘의 비밀과 진실을 찾아 떠나야한다고 조언한다.\n\n위험에 빠진 아렌델 왕국을 구해야만 하는 엘사와 안나는 숨겨진 과거의 진실을 찾아\n크리스토프, 올라프 그리고 스벤과 함께 위험천만한 놀라운 모험을 떠나게 된다.\n자신의 힘을 두려워했던 엘사는 이제 이 모험을 헤쳐나가기에 자신의 힘이 충분하다고 믿어야만 하는데…\n\n11월, 두려움을 깨고 새로운 운명을 만나다!"}];
  render() {
    console.log(this.movieInfo[0]);
    return (
      <div>
        <Moviedetail data={this.movieInfo[0]}></Moviedetail>
      </div>
    );
  }
}

export default Detail;
