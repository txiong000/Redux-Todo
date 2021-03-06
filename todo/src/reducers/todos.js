import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions'

export default (todos = [], action) => {
    console.log('Reducer info', todos, action.type, action.payload)
    switch (action.type) {
        case ADD_TODO: 
            return [...todos, action.payload];

        case TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload) {
                    return Object.assign({}, todo, {completed: !todo.completed});
                }
                return todo;
            })

        case REMOVE_TODO:
            return todos.filter(todo => !todo.completed)
            
        default:
            return todos;
    }
}
