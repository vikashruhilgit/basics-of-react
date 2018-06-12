import React, { Component } from 'react';
import './InnerPages.css';

class InnerPages extends Component {

deleteMe(id, e) {
  e.preventDefault();
  this.props.onDelete(id);
}

  render() {
    return (
      <li className="innerPageItem">
        <strong>{this.props.innerPage.title}</strong>
        - {this.props.innerPage.desc}
        - {this.props.innerPage.id}
        - <a href="jsx-a11y/href-no-hash" onClick={this.deleteMe.bind(this, this.props.innerPage.id)}>Delete me</a>
      </ li>
    );
  }
}

export default InnerPages;
