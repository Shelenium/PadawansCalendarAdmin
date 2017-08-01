
import React from 'react';
import DayNameShort from './day_week_short';
import Week from './week';
import dayName from './day_name';
import manipulateClass from './manipulateClass';
import equalHeight from './equalHeight.js';
import toggleCurrentTo from './ToggleCurrentTo.js';
import reducerVar from './reducerVar.js';
import _ from 'lodash';
import {sVar} from './swipe.js';


class Calendar extends React.Component {
    constructor(props) {
    super(props);

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.select = this.select.bind(this);
    this.render = this.render.bind(this);
    this.renderWeeks = this.renderWeeks.bind(this);
    this.renderMonthLabel = this.renderMonthLabel.bind(this);
    this.dbl = this.dbl.bind(this);
  }
  

  
 previous() {
   
    var month = this.props.selected;
    month.subtract(1, 'M');
    this.props.selectedDay(month);
    this.props.resetFull();
  // this.setState({ month: month });
 
  }

  next() {
   
    var month = this.props.selected;
    month.add(1, 'M');
    this.props.selectedDay(month);
    this.props.resetFull();
  //this.setState({ month: month });
  
  }
  componentDidUpdate(){
    equalHeight('inline');
  }


  select(day,e) {

    if (this.props.selected.format('DD MMMM') !== day.date.format('DD MMMM')) {
          if (!day.isCurrentMonth){
              var current = this.props.selected.format('L').slice(0,2);
              if (day.month_num > current){
                this.next();
              } else {
                this.previous();
              }
          }
      this.props.selectedDay(day.date);
      this.props.resetFull();
      manipulateClass('day-one-week','remove','invisible');
          

    } else  {
      manipulateClass('day-one-week','toggle','invisible');
      manipulateClass('day-one-week selected','remove','invisible');
      toggleCurrentTo('monthCal','weekCal',this.props.resetFull);
      this.props.toggleSelectedFull();

    }
}


dbl(day,e) {
  //    manipulateClass('day-one-week','add','invisible');
  //    manipulateClass('day-one-week selected','remove','invisible');
      toggleCurrentTo('monthCal','weekCal',this.props.setFull);
    // this.props.toggleSelectedFull();
}


  render() {
   var month = document.getElementsByClassName('monthCal')[0];
  if (month&&!month.classList.contains('invisible')) {
      sVar.funcLeft = this.next;
      sVar.funcRight = this.previous;
    }
    return <div className ='monthCal inline'>
      <div className='header'>
        <i className='fa fa-angle-left' onClick={this.previous}></i>
        {this.renderMonthLabel()}
        <i className='fa fa-angle-right' onClick={this.next}></i>
      </div>
      <DayNameShort data = {dayName}/>
      {this.renderWeeks()}
    </div>;
  }

  renderWeeks() {
    var weeks = [],
      done = false,
      _date = _.cloneDeep(this.props.selected).startOf('month'),
      date = _date.subtract(reducerVar(_.cloneDeep(_date).day('Monday').format('DD'),'02'),'days').day('Monday'),
      monthIndex = date.month(),
      count = 0;

    while (!done) {
      weeks.push(<Week  key={date.toString()} 
                        date={_.cloneDeep(date)} 
                        select={this.select} 
                        selected={this.props.selected} 
                        events = {this.props.events}
                        dbl = {this.dbl} />);
      date.add(1, 'week');
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    return <span onClick = {function (e) {e.stopPropagation(); 
                                          toggleCurrentTo('monthCal','weekCal',this.props.justRender);
                                          }.bind(this)}>
                                          {this.props.selected.format('MMMM YYYY')}
            </span>;
  }

};
export default Calendar;