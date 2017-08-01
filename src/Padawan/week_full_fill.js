import React from 'react';
import DayFullInfo from './day_full_info';
import _ from 'lodash';

class WeekFull extends React.Component {


  render() {
      var days = [],
      date = this.props.date,
      selected = this.props.selected;

    for (var i = 0; i < 7; i++) {
      var day = {
        name: date.format('dd').substring(0, 1),
        fullDay: date.format('DD MMMM'),
        week: date.format('dddd'),
        number: date.date(),
        month_num: date.month()+1,
        isToday: date.isSame(new Date(), 'day'),
        date: date
      };
      days.push(<span 
                      key={day.date.toString()} 
                      className={'day-one-week ' + (day.isToday ? ' today' : '') + 
                      (day.date.isSame(selected) ? ' selected' : '')} 
                      onClick = { this.props.select.bind(null, day) }>
                      <DayFullInfo  day = {date} 
                                    week = {day.week} 
                                    selected = {this.props.selected} 
                                    events = {this.props.events}  
                                    isFull = {this.props.isFull} />
                  </span>);
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
export default WeekFull;