const initialState = [{
  task: 'Test your todo page',
  completed: true
}, {
  task: 'Learn React',
  completed: false
}, {
  task: 'Learn Redux',
  completed: false
}]

const todoReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [...state, action.todo]
    case 'DELETE_TODO':
      return state.filter((item, index) => action.index != index)
    case 'TOGGLE_TODO':
      let toggledState = [...state]
      toggledState[action.index].completed = !toggledState[action.index].completed
      return toggledState
    case 'CLEAR_TODOS':
      return []
    default:
      return state
  }
}

export default todoReducer
