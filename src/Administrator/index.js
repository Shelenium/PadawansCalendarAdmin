import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import AddEvent from './AddEvent';
import EditEvent from './EditEvent';
import sizeWindow from '../Padawan/sizeWindow.js';
import {linkMentors} from '../Padawan/links.js';
import mentorsList, {mentorsListAll}  from '../Padawan/mentorsList';

import './style.css';

window.removeEventListener('resize', sizeWindow);


export default class Administrator extends Component {
    constructor(props) {
    super(props);

    this.reFresh = this.reFresh.bind(this);
    this.setTrue = this.setTrue.bind(this);
    this.checkData = this.checkData.bind(this);
    this.setMentors = this.setMentors.bind(this);
  }

    state = { 
    isPassword: false,
    mentors: mentorsListAll
  };

     reFresh() {
     this.setState({ isPassword: this.state.isPassword });
  }
    setTrue() {
     this.setState({ isPassword: true });
  }

setMentors() {
  this.setState({ mentors: mentorsListAll });
}

checkData() {
 return (mentorsListAll ? this.setMentors() : setTimeout(function(){return this.checkData()}.bind(this), 250));
}
 
 componentWillMount() {
  if (!mentorsListAll) {
    mentorsList(linkMentors);
    this.checkData();
  }
  
}

  render() {
    const props = { reFresh: this.reFresh, isPassword: this.state.isPassword, setTrue: this.setTrue,  mentors:this.state.mentors};
    
    return (
      <div className='admin'>
        <div className='App-header'>
          <span className ='App-title title-inline'>
            <h2>Administrator Page</h2>
          </span>
          <span role = "button" className ='App-title-button title-inline tooltip' alt = "Back to Padawans Page">
            <Link to="/" onClick = { function() { window.addEventListener('resize', sizeWindow); }}>P</Link>
            <span className='hide tooltiptext'>Back to Padawans Page</span>
          </span>
        </div>
        <div className = "admin-main">
          <PasswordInput { ...props }/>
          <AddEvent { ...props }/>
          <EditEvent {  ...props }/>
        </div>
      </div>
    );
  }
}