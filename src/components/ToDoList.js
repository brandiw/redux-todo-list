import React, { Component } from 'react';
import { connect } from 'react-redux'
import List from 'apollo-react-next/components/List';
import ListItem from './ListItem';
import * as ToDoActions from '../actions/todoActions'

class ToDoList extends Component {
  render(){
    const listItems = this.props.todos.map((li, i) => {
      return <ListItem
                item={li}
                index={i}
                key={i}
                deleteTodo={this.props.deleteTodo}
                toggleTodo={this.props.toggleTodo}
              />
    });

    return(
        <List>
          {listItems}
        </List>
      );
  }
}

function mapStateToProps(state, props){
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, ToDoActions)(ToDoList)
