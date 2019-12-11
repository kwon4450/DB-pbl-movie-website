import React, { Component } from "react";

import SeatSection from "./SeatSection";
import "../style/ScreenMap.css";

class ScreenMap extends Component {
  renderSeatSection = () => {
    let jsx = [];
    let tmp = [];
    let bSection = {
      row_i: this.props.seatList[0].row_i,
      col_i: 0
    };
    for (const section of this.props.seatList) {
      if (bSection.row_i < section.row_i) {
        jsx.push(
          <tr className="SeatSectionRow" key={bSection.row_i}>
            {tmp}
          </tr>
        );
        tmp = [];
      }
      if (section.col_i - bSection.col_i > 1)
        for (let i = bSection.col_i + 1; i < section.col_i; i++)
          tmp.push(
            <SeatSection
              isDummy={true}
              key={section.row_i + "-" + i}
            ></SeatSection>
          );

      tmp.push(
        <SeatSection
          addSeat={this.props.addSeat}
          selectedSeat={this.props.selectedSeat}
          data={section}
          key={section.row_i + "-" + section.col_i}
        ></SeatSection>
      );

      bSection = section;
    }
    jsx.push(
      <tr className="SeatSectionRow" key={bSection.row_i}>
        {tmp}
      </tr>
    );

    return jsx;
  };

  render() {
    return (
      <div className="ScreenMap">
        <div className="screen">screen</div>
        <table className="SeatMap">
          <tbody>{this.renderSeatSection()}</tbody>
        </table>
      </div>
    );
  }
}

export default ScreenMap;
