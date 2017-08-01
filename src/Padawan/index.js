import React, { Component } from 'react';
import './calendar.css';
import Calendar from './calendar';
import CalendarWeeks from './calendar_weeks';
import moment from 'moment';
import dayEvents from './dayEvents';
import {dataEventsAll} from './dayEvents.js';
import equalHeight from './equalHeight.js'; 
import sizeWindow from './sizeWindow.js';
import mentorsList from './mentorsList';
import {linkMentors} from './links.js';
import manipulateClass from './manipulateClass';
import setSwipe from './setSwipe.js';
import { Link } from 'react-router-dom';




class Padawan extends Component {
    constructor(props) {
    super(props);

    this.setSelectedDay = this.setSelectedDay.bind(this);
    this.events = dayEvents();
    this.mentors = mentorsList(linkMentors);
    this.setEvents = this.setEvents.bind(this);
    this.checkData = this.checkData.bind(this);
    this.today = this.today.bind(this);
    this.toggleSelectedFull = this.toggleSelectedFull.bind(this);
    this.resetFull = this.resetFull.bind(this);
    this.justRender = this.justRender.bind(this);
    this.setFull = this.setFull.bind(this);
  }
  
  state = { 
    selectedDay: moment().startOf('day'),
    events: dataEventsAll,
    isFull: false,
  };

  toggleSelectedFull() {
     this.setState({ isFull: !this.state.isFull });
  }

    resetFull() {
     this.setState({ isFull: false });
  }
    setFull() {
     this.setState({ isFull: true });
  }


  setSelectedDay(selected) {
    this.setState({ selectedDay: selected });
  }

   justRender() {
     this.setState({ selectedDay: this.state.selectedDay });
  }

  today(){
    this.setState({ selectedDay: moment().startOf('day') });
    this.setState({ isFull: false});
    manipulateClass('day-one-week','remove','invisible');
    manipulateClass('hide','add','invisible');
  }

setEvents() {
  this.setState({ events: dataEventsAll });
}

checkData() {
 return (dataEventsAll ? this.setEvents() : setTimeout(function(){return this.checkData()}.bind(this), 500));
}

componentDidMount() {
  sizeWindow();
  this.checkData();
  setSwipe();

}

componentDidUpdate(){
  equalHeight('inline'); 
 
}

  render() {
    window.addEventListener('resize', sizeWindow);


    const props = { start: moment().startOf('day'), 
                    selected: this.state.selectedDay, 
                    selectedDay: this.setSelectedDay, 
                    events: this.state.events, 
                    isFull: this.state.isFull, 
                    toggleSelectedFull: this.toggleSelectedFull, 
                    resetFull: this.resetFull,
                    justRender: this.justRender,
                    setFull: this.setFull};
    const today = moment().startOf('day').format('DD MMMM');

    

    return (
      <div className='App'>
        <div className='App-header'>
          <span className ='App-title title-inline tooltip blink' onClick = {this.today}>
            <h2>Padawans Calendar</h2>
            <span className='hide tooltiptext'>Click to return to {today}</span>
          </span>
          <span role = "button" className ='App-title-button title-inline tooltip' alt = "Go to Administrator Page">
            <Link to="/administrator" onClick = { function() { window.removeEventListener('resize', sizeWindow); }} >A</Link>
            <span className='hide tooltiptext'>Go to Administrator Page</span>
          </span>
        </div>
          <CalendarWeeks {...props}/>
          <Calendar {...props}/>
      </div>
    );

  }
}

export default Padawan;
