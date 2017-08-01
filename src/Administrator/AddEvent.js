import React, { Component } from 'react';
import manipulateClass from './manipulateClass';
import FormMentorsList from './formMentorsList';
import Resources from './Resources';
let number = 0;


class AddEvent extends Component {
    constructor(props) {
    super(props);

    this.mentorsToggle = this.mentorsToggle.bind(this);
    this.addResource = this.addResource.bind(this);
    this.createNewEvent = this.createNewEvent.bind(this);
    this.addEventSubmit = this.addEventSubmit.bind(this);
    this.headerClick = this.headerClick.bind(this);
   
  }

  mentorsToggle() {
    manipulateClass('form-mentors-list','toggle','invisible');
    var elem = document.getElementById('mentorsButton').firstChild;
    elem.data = elem.data == 'Show list of Mentors' ? 'Hide list of Mentors' : 'Show list of Mentors';
  }
 
 addEventSubmit() { 
  var form = document.getElementById('addEventForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    this.createNewEvent(form);
    manipulateClass('addEventForm','add','invisible');
    form.reset();
  }.bind(this)
  )

}

addResource() {
  ++number;
} 

createNewEvent(form) {
  var formData = new FormData(form);
  var starttime = formData.get('year')+'-'
                  +formData.get('month')+'-'
                  +formData.get('day')+'T'
                  +formData.get('starttime')
                  +':00Z';
 var endtime = formData.get('year')+'-'
                  +formData.get('month')+'-'
                  +formData.get('day')+'T'
                  +formData.get('endtime')
                  +':00Z';
  var duration = Date.parse(endtime) - Date.parse(starttime);

  formData.append('start', starttime);
  formData.append('duration', duration);
  formData.delete('year');
  formData.delete('month');
  formData.delete('day');
  formData.delete('starttime');
  formData.delete('endtime');
  if (!formData.has('speakers')) { formData.append('speakers', '') };

 fetch('/api/addevent', {
  method: 'POST',
  body: formData
})
  .then(function(response) {  
    return response.text();  
  })  
  .then(function(text) {  
    console.log('Request successful', text); 
    manipulateClass('messageOK','remove','invisible');
  })  
  .catch(function(error) {  
    console.log('Request failed', error);
    manipulateClass('messageNotOK','remove','invisible'); 
  });

}
headerClick() {
  manipulateClass('addEventForm','toggle','invisible');
  manipulateClass('messageOK','add','invisible'); 
  manipulateClass('messageNotOK','add','invisible');
}

 componentDidMount() {
  this.addEventSubmit();
 }

  render() {
    let isVisible = this.props.isPassword ? '' : 'invisible';
    let props = { mentors:this.props.mentors };

  return (

  <div className = {'addEvent ' + isVisible }>
  <header onClick = { this.headerClick }><i className='fa fa-plus-square-o'></i> Add Event</header>
  <form className = 'addEventForm invisible' enctype='application/json' id = 'addEventForm'>
  <fieldset>
  <legend>New Event</legend>
  <label className = 'wide'>Event title</label>
  <input name ='title' className = 'wide' type='text'/>
  <label className = 'title-inline'>Event type</label>
  <select  name ='type' defaultValue = "lecture">
      <option>lecture</option>
      <option>webinar</option>
      <option>workshop</option>
      <option>deadline</option>
      <option>event</option>
    </select>
   <label className = 'wide'>Event description</label>
    <textarea name = 'description'></textarea>
  </fieldset>
    <fieldset>
    <legend>Event Date & Location</legend>
    <label className = 'title-inline'>Start time</label>
    <select name ='starttime' className = 'title-inline' defaultValue = "18:00">
      <option>10:00</option> 
      <option>11:00</option>
      <option>12:00</option>
      <option>13:00</option>
      <option>14:00</option>
      <option>15:00</option>
      <option>16:00</option>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>23:59</option>
    </select>
    <label className = 'title-inline'>End time</label>
    <select name = 'endtime' className = 'title-inline' defaultValue = "21:00">
      <option>12:00</option>
      <option>13:00</option>
      <option>14:00</option>
      <option>15:00</option>
      <option>16:00</option>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
      <option>23:00</option>
    </select>
    <label className = 'wide'>Date</label>
    <select name = 'day' className = 'title-inline' defaultValue = "15">
      <option value = '01'>1</option>
      <option value = '02'>2</option>
      <option value = '03'>3</option>
      <option value = '04'>4</option>
      <option value = '05'>5</option>
      <option value = '06'>6</option>
      <option value = '07'>7</option>
      <option value = '08'>8</option>
      <option value = '09'>9</option>
      <option value = '10'>10</option>
      <option value = '11'>11</option>
      <option value = '12'>12</option>
      <option value = '13'>13</option>
      <option value = '14'>14</option>
      <option value = '15'>15</option>
      <option value = '16'>16</option>
      <option value = '17'>17</option>
      <option value = '18'>18</option>
      <option value = '19'>19</option>
      <option value = '20'>20</option>
      <option value = '21'>21</option>
      <option value = '22'>22</option>
      <option value = '23'>23</option>
      <option value = '24'>24</option>
      <option value = '25'>25</option>
      <option value = '26'>26</option>
      <option value = '27'>27</option>
      <option value = '28'>28</option>
      <option value = '29'>29</option>
      <option value = '30'>30</option>
      <option value = '31'>31</option>
    </select>
     <select name = 'month' className = 'title-inline' defaultValue = "08">      
      <option value = '01'>January</option>
      <option value = '02'>February</option>
      <option value = '03'>March</option>
      <option value = '04'>April</option>
      <option value = '05'>May</option>
      <option value = '06'>June</option>
      <option value = '07'>July</option>
      <option value = '08'>August</option>
      <option value = '09'>September</option>
      <option value = '10'>October</option>
      <option value = '11'>November</option>
      <option value = '12'>December</option>
    </select>
    <select name = 'year' className = 'title-inline' defaultValue = "2017">
      <option selected>2017</option>
      <option>2018</option>
      <option>2019</option>
    </select>
    <label className = 'wide'>Event location</label>
    <input name ='location' className = 'wide' type='text'/>
    </fieldset>
    <fieldset>
    <legend>Speakers</legend>
    <FormMentorsList {...props}/>
    <button id = 'mentorsButton' className = 'form-button' type = 'button' onClick = {this.mentorsToggle}>Show list of Mentors</button>
    </fieldset>
    <fieldset>
    <legend>Recources</legend>
    <Resources number = {number}/>
    <button id = 'resourcesButton' className = 'form-button' type = 'button' onClick = {this.addResource}>Add more Resource</button>
    </fieldset>
    <button className = 'submit' type = 'submit' >Add Event</button>

  </form>
  <div className = 'messageOK invisible'>New event added to database</div>
  <div className = 'messageNotOK invisible'>Error!!! New event did not add to database</div>
  </div>

      )
  }
}

export default AddEvent;