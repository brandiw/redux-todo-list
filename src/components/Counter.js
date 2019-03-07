import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  render(){
    let message = 'You have ' + this.props.todos.length + ' things left to do today';
    if(this.props.todos.length === 1){
      message = 'Keep going! Just one more thing! Go ' + this.props.todos[0].task + '!!!';
    }
    else if(this.props.todos.length === 0){
      message = 'YAYAYAYAYAYAYAYAY! We did all the things!';
    }
    return(
        <div className="counter">
          <h2>{message}</h2>
        </div>
      );
  }
}

function mapStateToProps(state, props){
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Counter)
