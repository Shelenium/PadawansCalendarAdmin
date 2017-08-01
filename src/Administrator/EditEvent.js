import React, { Component } from 'react';
import manipulateClass from './manipulateClass';


class EditEvent extends Component {

  render() {
   // let isVisible = this.props.isPassword ? '' : 'invisible';
    let isVisible = 'invisible';

  return (

  <div className = { 'addEvent ' + isVisible }>
  <header disable ='disable'>
  //onClick = { function(){ manipulateClass('editEventForm','toggle','invisible') }}
    <i className = 'fa fa-pencil-square-o'>
    </i> Edit Event
  </header>
  <form className = 'editEventForm invisible'>
 //   <label>New Event Date</label>
  //  <label>Day</label>
 //  <input type='text' placeholder='15'></input>
 //   <label>Month</label>
  //  <select placeholder='July'></select>
//    <label>Year</label>
//    <select placeholder='2017'></select>
//    <input className = '' type='text' placeholder='Type your name here' onClick = { function(e) { e.stopPropagation(); }}/>
//    <input className = '' type = 'text' placeholder='Leave your feedback here'  onClick = { function(e) { e.stopPropagation(); }}/>
    <input className = 'submit' type = 'submit' value='Not ready!!!!'/>
  </form>
  </div>

      )
  }
}

export default EditEvent;