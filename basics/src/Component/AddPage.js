
/* jshint esversion: 6 */

import React, { Component } from 'react';
import uuid from 'uuid';
import './AddPage.css';

class AddPage extends Component {
  constructor() {
    super();
    this.state = {
      newPages: {},
    };
  }

  static defaultProps = {
    type: [
      {
        id: uuid.v4(),
        value: 'Web site',
      },
      {
        id: uuid.v4(),
        value: 'Mobile site',
      },
      {
        id: uuid.v4(),
        value: 'Android site',
      },
    ],
  };

  formsubbmit(e) {
    //console.log(this.refs);
    //do your validation here
    this.setState({
      newPages: {
        id: uuid.v4(),
        title: this.refs.title.value,
        desc: this.refs.desc.value,
        type: this.refs.type.value,
      },
    },() => {
      //console.log(this.state.newPages);
      this.props.addPages(this.state.newPages);
    });
    e.preventDefault(e);
  }

  render() {
    return (
      <div className="AddPage">
        <h3>Add Page</h3>
          <form onSubmit={this.formsubbmit.bind(this)}>
            <div>
              <label>Title:</label>
              <input type="text" ref="title" />
              <label>Desc:</label>
              <input type="text" ref="desc" />
              <label>Type:</label>
              <select ref="type">
                {this.props.type.map((single) => {
                  return <option key={single.id} value={single.value}>{single.value}</option>
                })}
              </select>
            </div>
            <br />
            <input type="submit" />
          </form >
      </div>
    );
  }
}
export default AddPage;
