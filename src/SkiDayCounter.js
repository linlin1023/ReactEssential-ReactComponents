import React, { Component } from "react";
import { render } from "react-dom";

const getPercent = decimal => {
  return decimal * 100 + "%";
};

const getGoalProgress = (total, goal) => {
  return getPercent(total / goal);
};

const SkiDayCounter = props => {
  return (
    <section>
      <div>
        <p>Total Days:{props.skiData.total}</p>
      </div>
      <div>
        <p>Powder Days: {props.skiData.powder}</p>
      </div>
      <div>
        <p>Backcountry: {props.skiData.backcountry}</p>
      </div>
      <div>
        <p> goral percentage : {getGoalProgress(34, 89)}</p>
      </div>
    </section>
  );
};

/*class SkiDayCounter extends Component {
  render() {
    const { total, pwder, backcountry } = this.props.skiData;
    return (
      <section>
        <div>
          <p>Total Days:{total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry: {this.props.skiData.backcountry}</p>
        </div>
      </section>
    );
  }
}*/
export default SkiDayCounter;
