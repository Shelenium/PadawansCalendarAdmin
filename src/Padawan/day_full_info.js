import React from 'react';  
import moment from 'moment';
import CreateHeadEvent from './createHeadEvent';
import CreateFullEvent from './createFullEvent';

class DayFullInfo extends React.Component {

 
  render() {
    if (this.props.events) {
    var events = this.props.events;
    var dayCurrent = this.props.day.format('DD MMMM YYYY');
    var dayEventTag = events.map(function(item, index) {

      
      var dayEvent = moment(item.start).format('DD MMMM YYYY');
      if (dayEvent === dayCurrent) {
        const props = { type:item.type, index:index, event:item, isFull:this.props.isFull };
        return (<div key = {item.id}>
          <CreateHeadEvent {...props}/>
          <CreateFullEvent {...props}/>
          </div>
          ) 
      } else return true;
    },this)
  }
    

    return (
    <div>
      <div className = 'column1'>
        <div className = 'week-panel-days'>{this.props.day.format('DD MMMM')}</div>
        <div className = 'week-panel-weekdays'>{this.props.day.format('dddd')}</div>
      </div>
      <div className = 'column2'>
        {dayEventTag}
      </div>
    </div>
    )
  }

}

export default DayFullInfo;
