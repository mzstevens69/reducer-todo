export const initialState = 
  [  
{   
   task: 'Clean everything',
    completed: false,
    id: 0      
},
{
    task: 'Learn about reducers',
    completed: false,
    id: 1
}
]

export const TodoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_NEW_TODO":
        const newTodo = {
          
          task: action.payload,
          completed: false,
          id: Date.now()
          
        };      
        return [ ...state, newTodo ];      
      case "TOGGLE_COMPLETE":
            return [                
                ...state.map(item => {
                    if (item.id === action.payload) {
                      return {
                        ...item,
                        completed: !item.completed
                      };
                    } else {
                      return item;
                    }
                  }) ];
      case "DELETE":
            return state.filter(item => !item.completed);
      default:
            return state;
    }
  };