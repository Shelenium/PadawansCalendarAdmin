import React from 'react';
import ReactDOM from 'react-dom';


class Resources extends React.Component {

  render() {
      return (
          <div className = "resources-list" key = { 'resources'+this.props.numbers }>
            <label className = 'wide'>Type</label>
            <input  name ='recources[type]' type='text' />
            <label className = 'wide'>Link</label>
            <input name ='recources[resource]' type='text' />
            <label className = 'wide'>Description</label>
            <textarea name ='recources[description]'></textarea>
          </div>
      );
    }
};

export default Resources;