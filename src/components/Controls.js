import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from 'apollo-react-next/components/Button';
import Tooltip from 'apollo-react-next/components/Tooltip';
import { secondaryOrange } from 'apollo-react-next/colors';
import * as ToDoActions from '../actions/todoActions'


class Controls extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      error: ''
    }
  }

  handleItemChange = (e) => {
    this.setState({ newItem: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.newItem){
      this.props.addTodo(this.state.newItem);
      this.setState({ newItem: '', error: '' });
    }
    else {
      this.setState({ error: 'Please enter some text' });
    }
  }

  render() {
    return(
        <div>
          <div>
            <p>{this.state.error}</p>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Add something to the list</label>
                <input
                  type="text"
                  placeholder="What do you need to do?"
                  onChange={this.handleItemChange}
                  value={this.state.newItem}
                />
              </div>
              <Button type="submit" color="primary" variant="contained">Add It!</Button>
            </form>
          </div>
          <Tooltip placement="right" title="Oh no!">
            <Button style={{color: secondaryOrange[500]}} variant="contained" onClick={this.props.clearTodos}>
              Clear
            </Button>
          </Tooltip>
        </div>
      );
  }
}

function mapStateToProps(state, props){
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, ToDoActions)(Controls)
