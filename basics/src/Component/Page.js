import React, { Component } from 'react';
import InnerPage from './InnerPages';
import PropTypes from 'prop-types';
import './Page.css';

class Page extends Component {

  deleteMe(id) {
    this.props.onDelete(id);
  }

  render() {
    let innerPages;
    if (this.props.pages) {
      innerPages =  this.props.pages.map(innerPage => {
        //console.log(pages);
        return (
          <InnerPage onDelete={this.deleteMe.bind(this)} key = {innerPage.id} innerPage={innerPage} / >
        );
      });
    }

    return (
      <div className="Page">
        <ul className="InnerPages">
          {innerPages}
        </ ul>
      </div>
    );
  }
}

Page.propTypes = {
  onDelete: PropTypes.func,
  pages: PropTypes.array,
};

export default Page;
