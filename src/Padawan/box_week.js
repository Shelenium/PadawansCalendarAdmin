import React from 'react';
import ReactDOM from 'react-dom';


class BoxWeek extends React.Component {
  render() {
    var data = this.props.data;
    var boxWeekTempl = data.map(function(item, index) {
      return (
          <div className="box" key={index}>{item.shrt}</div>
      )
    })

      return (
      <div className="boxes-list">
      {boxWeekTempl}
      </div>
      );
    }
};

export default BoxWeek;