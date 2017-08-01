
import React from 'react';
import WeekFull from './week_full_fill';
import manipulateClass from './manipulateClass';
import toggleCurrentTo from './ToggleCurrentTo.js';
import reducerVar from './reducerVar.js';
import _ from 'lodash';
import {sVar} from './swipe.js';

class CalendarWeeks extends React.Component {
    constructor(props) {
    super(props);

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.select = this.select.bind(this);
    this.render = this.render.bind(this);
    this.renderWeeks = this.renderWeeks.bind(this);
    this.renderWeekLabel = this.renderWeekLabel.bind(this);
  }

 previous() {
    var moment = this.props.selected;
    moment.subtract(1, 'week');
    this.props.selectedDay(moment);
    this.props.resetFull();
  }

  next() {
    var moment = this.props.selected;
    moment.add(1, 'week');
    this.props.selectedDay(moment);
    this.props.resetFull();
  }
  
  select(day, e) {
    if (this.props.selected.format('DD MMMM') !== day.date.format('DD MMMM')){
    this.props.selectedDay(day.date);
    } else {
      manipulateClass('day-one-week','toggle','invisible');
      manipulateClass('day-one-week selected','toggle','invisible');
      this.props.toggleSelectedFull();

    }
  }

  render() {
    var month = document.getElementsByClassName('monthCal')[0];
  if (month&&month.classList.contains('invisible')) {
      sVar.funcLeft = this.next;
      sVar.funcRight = this.previous;
  } 

    return <div className = 'weekCal inline'>
      <div className='header'>
        <i className='fa fa-angle-left' onClick={this.previous}></i>
        {this.renderWeekLabel()}
        <i className='fa fa-angle-right' onClick={this.next}></i>
      </div>
     {this.renderWeeks()}
    </div>;
  }



  renderWeeks() {
    var week = [],
    _date = _.cloneDeep(this.props.selected).startOf('week'),
    date = _date.subtract(reducerVar(_.cloneDeep(this.props.selected).format('dd'),'Su'),'days').day('Monday');
    week.push(<WeekFull key={date.toString()} 
                        date={_.cloneDeep(date)} 
                        select={this.select} 
                        selected={this.props.selected} 
                        events = {this.props.events} 
                        isFull = {this.props.isFull} />);
    return week;
  }

  renderWeekLabel() {
    var _date = _.cloneDeep(this.props.selected).startOf('week');
    var date = _date.subtract(reducerVar(_.cloneDeep(this.props.selected).format('dd'),'Su'),'days').day('Monday');
    return <span onClick = {function (e) {e.stopPropagation(); 
                                          toggleCurrentTo('weekCal','monthCal',this.props.justRender);}
                                          .bind(this)}>
                                          {date.format('DD MMMM')} - {date.add(6,'days').format('DD MMMM YYYY')} 
            </span>;
  }


};
export default CalendarWeeks;