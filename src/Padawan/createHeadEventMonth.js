
import React from 'react';  
import moment from 'moment';
import iconEvent from './icon_event.js';


class CreateHeadEventMonth extends React.Component {


  render() {

  return (
  <div className = {this.props.type + ' head-month tooltip'}>
  <span className = 'icon-month'><i className = {iconEvent(this.props.type)}></i></span>
  <span className='tooltiptext'>{moment(this.props.event.start).format('LT').slice(0,-2)} {this.props.type} '{this.props.event.title}'</span>
  </div>

      )
  }
}

export default CreateHeadEventMonth;