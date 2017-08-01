import React from 'react';

class Speaker extends React.Component {


  render() {

  return (
  <div className = 'speaker'>
  <span className = 'icon'><img src = {this.props.avatar} alt = {this.props.name} /></span>
  <span className = 'time'>{this.props.name}</span>
  </div>

      )
  }
}

export default Speaker;