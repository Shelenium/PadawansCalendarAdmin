import React from 'react';


class Feedback extends React.Component {
	constructor(props) {
    super(props);

    this.showFeedback = this.showFeedback.bind(this);

  }


showFeedback(){
 document.getElementById(this.props.id+'feedbackBlock').classList.toggle('invisible');
 document.getElementById(this.props.id+'feedback').classList.toggle('invisible');
}

  render() {

  return (
  <form className = 'feedback'>
 
  <input 	id = {this.props.id+'feedback'} 
  			className = 'leaveFeddback'
  			type = 'button' 
  			value ='Leave feedback' 
  			onClick = { function(e) { e.stopPropagation(); this.showFeedback(); }.bind(this) }/>
   <div id = {this.props.id+'feedbackBlock'} className = 'invisible'>
  <input className = '' type='text' placeholder='Type your name here' onClick = { function(e) { e.stopPropagation(); }}/>
  <input className = '' type = 'text' placeholder='Leave your feedback here'  onClick = { function(e) { e.stopPropagation(); }}/>
  <input className = 'submit' type = 'submit' value='Send' onClick = { function(e) { e.stopPropagation(); e.preventDefault(); this.showFeedback(); }.bind(this) }/>
  </div>
  </form>

      )
  }
}

export default Feedback;