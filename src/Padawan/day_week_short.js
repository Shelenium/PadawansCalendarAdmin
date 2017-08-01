import React from 'react';


class DayNameShort extends React.Component {
  render() {
    var data = this.props.data;
    var dayNameTempl = data.map(function(item, index) {
      return (
          <span className="day" key={index}>{item.shrt}</span>
      )
    })

      return (
      <div className="week names">
      {dayNameTempl}
      </div>
      );
    }
};

export default DayNameShort;