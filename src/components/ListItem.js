import React, { Component } from 'react';
import IconButton from 'apollo-react-next/components/IconButton';
import { secondaryRed } from 'apollo-react-next/colors';

class ListItem extends Component {
  render(){
    return(
        <li>
          <span onClick={ () => this.props.toggleTodo(this.props.index) }>
            {this.props.item.completed ? <del>{this.props.item.task}</del> : this.props.item.task}
          </span>
          <IconButton
            style={{color: secondaryRed[500]}}
            onClick={() => { this.props.deleteTodo(this.props.index) }}
          >
            X
          </IconButton>
        </li>
      );
  }
}

export default ListItem;
