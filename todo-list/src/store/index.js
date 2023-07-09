import {createStore} from 'vuex'


const store = createStore({
    state(){
        return{
            title : 'Tina\'s Todo List',
            todos : [
                {
                    id : 1,
                    todo : 'Read a book',
                    isDone : false,
                    postpone : false
                },
                {
                    id : 2,
                    todo : 'Watch a movie',
                    isDone : false,
                    postpone : false
                }
            ]
        }
    },
    mutations : {
      addTodo(state,payload){
        state.todos.unshift(payload)
      },
      deleteTodo(state, id) {
        
          state.todos = state.todos.filter(todo => todo.id !== id)
      },
    //   updateTodo(state, payload){
    //    const todo = state.todos.find(todo => 
    //         todo.id  === payload.id)
    //         if(todo){
    //         todo.id = payload.id
    //         todo.todo = payload.todo    
    //         todo.isDone = payload.isDone
    //         todo.postpone = payload.postpone
    //         }
    updateTodo(state, payload){
    state.todos.forEach(todo => {
        if (todo.id === payload.id) {
          todo.isDone = payload.isDone;
          todo.postpone = payload.postpone;
        }
      
    })
    }},
    actions : {
        addTodo(context, payload){
            const todo = {
                id : new Date().toISOString(),
                todo : payload.todo
            }
            context.commit('addTodo', todo)
        },
        deleteTodo(context, id){
            context.commit('deleteTodo', id)
        },
        updateTodo(context, payload){
           context.commit('updateTodo', payload)
        }
    },
    getters : {
     title(state){
        return state.title
     },
     todoList(state){
        return state.todos
     }
  }
})

export default store
   
