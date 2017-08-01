/*jshint loopfunc: true */

import React from 'react';
import CreateHeadEventMonth from './createHeadEventMonth';
import moment from 'moment';
import _ from 'lodash';

class Week extends React.Component {
  render() {

    var days = [],
      date = this.props.date,
      month = this.props.selected.clone(),
      selected = this.props.selected,
      dayCurrent = date.format('DD MMMM YYYY');

      function mapfunc(item, index) {
      
      var dayEvent = moment(item.start).format('DD MMMM YYYY');

      if (dayEvent === dayCurrent) {
        const props = { type:item.type, index:index, event:item };
        
        return (<div key = {item.id+item.type}>
          <CreateHeadEventMonth {...props}/>
          </div>
          ) 
      } else return true;
    }


    for (let i = 0; i < 7; i++) {
      var day = {
        name: date.format('dd').substring(0, 1),
        number: date.date(),
        month_num: date.month()+1,
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), 'day'),
        date: date
      };
    
    if (this.props.events) {
      var events = this.props.events;
      dayCurrent = date.format('DD MMMM YYYY');
      var dayEventTag = events.map(mapfunc,this);
  }
      days.push(<span key={day.date.toString()} 

                      className={'day' + (day.isToday ? ' today' : '') + (day.isCurrentMonth ? '' : ' different-month') + (day.date.isSame(selected) ? ' selected' : '')} 
                      onClick={this.props.select.bind(null, day)} onDoubleClick={this.props.dbl.bind(null, day)}>
                      {day.number}{dayEventTag}</span>
                      );
      date = _.cloneDeep(date);
      date.add(1, 'day');
    }

    return (
      <div className='week' key={days[0].toString()}>
        {days}
      </div>
    );
  }
};
export default Week;