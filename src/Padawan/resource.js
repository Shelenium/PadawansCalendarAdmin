import React from 'react';  

class Resource extends React.Component {


  render() {

  return (
  <div className = 'resource'>
  <div className = 'title' onClick = { function(e) { e.stopPropagation(); } }>
  <a href = {this.props.resource} target = '_blank' rel = 'noopener noreferrer'>{this.props.type}</a></div>
  <div className = 'description'>{this.props.description}</div>
  </div>

      )
  }
}

export default Resource;