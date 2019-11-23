import React, { Component } from 'react';

import sampleData from 'assets/testData/test.json';
import SeatSection from './SeatSection';
import '../style/ScreenMap.css';

class ScreenMap extends Component{
  renderSeatSection = () => {
    let jsx = [];
    let tmp = [];
    let bSection = {
      row_i: sampleData[0].row_i,
      col_i: 0
    };
    for(const section of sampleData) {
      if(bSection.row_i < section.row_i) {
        jsx.push(<tr className='SeatSectionRow' key={bSection.row_i}>{tmp}</tr>);
        tmp = [];
      }
      if(section.col_i-bSection.col_i > 1) {
        for(let i=bSection.col_i+1; i<section.col_i; i++) {
          tmp.push(<SeatSection isDummy={true} key={i}></SeatSection>)
        }
      }

      tmp.push((<SeatSection seats={section.seats} startCol={section.start_col} key={section.col_i}></SeatSection>));

      bSection = section;
    }
    jsx.push(<tr className='SeatSectionRow' key={bSection.row_i}>{tmp}</tr>);

    return jsx;
  }

  render() {
    return(
      <sectionRow className='ScreenMap'>
        <div className='screen'>screen</div>
        <table className='SeatMap'>
          {this.renderSeatSection()}
        </table>
      </sectionRow>
    );
  }
}

export default ScreenMap;

//row_index -> 구조
//col_index
//(row/col)_num -> seat num