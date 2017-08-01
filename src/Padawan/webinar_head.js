import React from 'react';  
import moment from 'moment';


class WebinarHead extends React.Component {


  render() {

    var eventW = this.props.eventW;
    return (
  <div className = 'wibeinar'>
  <span className = 'hours'>{moment(eventW.start).format('LT')}</span>
  <span className = 'icon'><i className='fa fa-wifi'></i></span>
  <span className = 'title'>{eventW.title}</span>
  </div>

      )
  }
}

export default WebinarHead;