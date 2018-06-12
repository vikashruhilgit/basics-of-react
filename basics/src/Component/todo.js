/* jshint esversion: 6 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Page.css';

class Todos extends Component {
  render() {
    let innerTodos;
    if (this.props.todos) {
      innerTodos =  this.props.todos.map(innerTodo => {
        //console.log(pages);
        return (
          <li key={innerTodo.id}  ><strong>{innerTodo.title} </strong> - ({innerTodo.userId})</li>
        );
      });
    }

    return (
      <div className="Todo">
      <h3>Todos</h3>
        <ul className="InnerTodos">
          {innerTodos}
        </ ul>
      </div>
    );
  }
}

export default Todos;
