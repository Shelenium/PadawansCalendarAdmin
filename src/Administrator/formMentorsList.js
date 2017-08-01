import React from 'react';
import ReactDOM from 'react-dom';


class FormMentorsList extends React.Component {

  render() {
    var mentorsList = this.props.mentors ? this.props.mentors.map(function(item, index) {
      return (
          <div className = "mentors-list" key = { item.id+item.name }>
          <input type = "checkbox" name = 'speakers' value = { item.id } id = { item.id }/>
          <label for = {item.id} className = "title-inline"> {item.name}</label>
          </div>
      )
    }) : [];

      return (
      <div className="form-mentors-list invisible">
      { mentorsList }
      </div>
      );
    }
};

export default FormMentorsList;