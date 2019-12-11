import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./style/selector.css";

class TheaterSelector extends Component {
  static defaultProps = {
    selectTheater: (area, theater) => console.log(area, theater)
  };

  constructor(props) {
    super(props);

    this.state = {
      tabIndex: 0
    };
  };

  handleState = index => {
    this.setState({
      tabIndex: index
    });
  };

  render() {
    return (
      <div className="TheaterSelector">
        <div className="favorite">
          좋아하는 영화관 :
          {this.props.favTheaterList.map((item, index) => (
            <div
              className="item"
              key={index}
              onClick={() => {
                this.handleState(
                  this.props.allTheaterList
                    .map(area => area.areacode)
                    .indexOf(item.areacode)
                );
                this.props.selectTheater(item);
              }}
            >
              {item.theatername}
            </div>
          ))}
        </div>
        <Tabs
          className="selector"
          selectedTabClassName="selected"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.handleState(tabIndex)}
        >
          <TabList className="flex-container">
            {this.props.allTheaterList.map(area => (
              <Tab key={area.areacode}><div className="item">{area.areaname}</div></Tab>
            ))}
          </TabList>
          <div className="flex-container2">
            {this.props.allTheaterList.map(area => (
              <TabPanel className="theaters" key={area.areacode}>
                <ul>
                  {area.theaterList.map(theater => (
                    <li key={theater.theatercode}>
                      <div
                        className="item"
                        onClick={() => this.props.selectTheater(theater)}
                      >
                        {theater.theatername}
                      </div>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    );
  }
}

export default TheaterSelector;
