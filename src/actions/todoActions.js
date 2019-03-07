export const addTodo = (task) => {
  return {
    type: 'ADD_TODO',
    todo: {
      task: task,
      completed: false
    }
  }
}

export const toggleTodo = (index) => {
  return {
    type: 'TOGGLE_TODO',
    index
  }
}

export const deleteTodo = (index) => {
  return {
    type: 'DELETE_TODO',
    index
  }
}

export const clearTodos = () => {
  return {
    type: 'CLEAR_TODOS'
  }
}
