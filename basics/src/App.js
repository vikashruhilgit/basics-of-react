import React, { Component } from 'react';
import Page from './Component/Page';
import AddPage from './Component/AddPage';
import Todos from './Component/todo';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pages:[],
      todos:[],
    };
  }

  getPages() {
    this.setState({
      pages: [
        {
          id:uuid.v4(),
          title: 'Home Page',
          desc: 'site main page',
          type: 'Web site',
        },
        {
          id:uuid.v4(),
          title: 'About Page',
          desc: 'page to tell us about trhe site',
          type: 'Web site',
        },
        {
          id:uuid.v4(),
          title: 'Contact Page',
          desc: 'page get leads for the site.',
          type: 'Web site',
        },
      ],
    });
  }

  getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(json => {
        this.setState({
          todos: json,
        });
        console.log(this.state.todos);
      });
  }

  componentWillMount() {
    this.getPages();
    this.getTodos();
  }

  componentDidMount() {
    //this.getTodos();
    //console.log(this.state.todos);
  }

  handleAddProject(page){
    let pages = this.state.pages;
    pages.push(page);
    this.setState({
      pages: pages
    }, () => {
      console.log('property is set', this.state.pages);
    });
  }

  deleteMe(id) {
    let newPages = this.state.pages.filter((page) => page.id !== id);
    //console.log(newPages);
    //console.log('hekdfcrogor');
    this.setState({
      pages: newPages,
    }, () => {
      console.log('deleted', id);
    });
  }

  render() {
    return (
      <div className="App">
        My First App.
        <AddPage addPages={this.handleAddProject.bind(this)}/>
        <Page onDelete={this.deleteMe.bind(this)} pages={this.state.pages} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
