import React from 'react';  
import moment from 'moment';
import time from './time.js';
import Resource from './resource.js';
import Speaker from './speakers.js';
import Feedback from './feedback.js';
import {mentorsListAll} from './mentorsList.js'; 
import _ from 'lodash';
const MY_API_KEY = 'AIzaSyBilBW8et-1u2sB918LKOeArC103kxoGEI'; 


class CreateFullEvent extends React.Component {
    constructor(props) {
    super(props);

    this.mapShow = this.mapShow.bind(this);
    this.convertToURL = this.convertToURL.bind(this);
  }

  mapShow(id){
    document.getElementById(id).classList.toggle('invisible');
  }
  convertToURL(adress,zoom,key){
    adress = (adress == '') ? 'Minsk, ul. Kuprevicha, 1/5' : adress;
    var convert = adress.replace(/ /g, '%20');
    var url = 'https://www.google.com/maps/embed/v1/place?key='+MY_API_KEY+'&zoom='+zoom+'&q='+convert;
    return url;
  }


  render() {
    
    var loadResources = this.props.event.resources ? this.props.event.resources.map(function(item, index) {
        const props = { type:item.type, resource:item.resource, description:item.description };

        return (<div key = {index+item.type+item.description.slice(0,3)}>
          <Resource {...props}/>
          </div>
          ) 
      }) : '';
    var loadSpeakers = this.props.event.speakers ? this.props.event.speakers.map(function(item, index) {
     var mentor = _.find(mentorsListAll, { 'id': item });

      return (
          <div key = { item+index }>
          <Speaker mentor = { item } avatar = { mentor ? mentor.avatar : '#' } name = {mentor ? mentor.name : ''} />
          </div>
          ) 
      }) : '';

  return (

  <div className = {this.props.type + (this.props.isFull ? ' full' : ' full invisible')}>

  <div className = 'time'> {moment(this.props.event.start).startOf('hour').fromNow()}</div>
  <div className = {'description ' + (this.props.event.description ? '' : ' invisible')}>{this.props.event.description}</div>
  <div className = {'time ' + (this.props.event.duration ? '' : ' invisible')}>{'Duration: ' + time(this.props.event.duration)}</div>
  <div className = {'www ' + (this.props.event.www ? '' : ' invisible')}>{'Duration: ' + time(this.props.event.www)}</div>
  <div className = 'speakerName'> Location: </div>
  <div className = 'location' onClick = { function(e) { e.stopPropagation(); this.mapShow(this.props.event.id) }.bind(this)}>{this.props.event.location}</div>
    <iframe id = {this.props.event.id} className='map invisible' frameBorder='0' title = {this.props.event.id}
    src={this.convertToURL(this.props.event.location,17,MY_API_KEY)}>
  </iframe>
  <div className = 'speakerName'> Speakers: </div>
  {loadSpeakers}

  {loadResources}
  <Feedback id = {this.props.event.id}/>
  </div>

      )
  }
}

export default CreateFullEvent;