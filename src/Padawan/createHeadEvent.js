import React from 'react';  
import moment from 'moment';
import iconEvent from './icon_event.js';


class CreateHeadEvent extends React.Component {


  render() {

  return (
  <div className = {this.props.type + ' head'}>
  <span className = 'icon'><i className = {iconEvent(this.props.type)}></i></span>
  <span className = 'time'>{moment(this.props.event.start).format('LT').slice(0,-2)}</span>
  <span className = 'titleEvent'>{this.props.event.title}</span>
  </div>

      )
  }
}

export default CreateHeadEvent;