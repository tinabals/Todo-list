import {createStore} from 'vuex'


const store = createStore({
    state(){
        return{
            title : 'Tina\'s Todo List',
            todos : [
                {
                    id : 1,
                    todo : 'Read a book'
                },
                {
                    id : 2,
                    todo : 'Watch a movie'
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

      }
    },
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
   
