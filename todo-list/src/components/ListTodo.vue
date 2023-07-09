<template>
  <base-card>
    <base-card v-for="todo in todos" :key="todo.id" class="todos">
        {{ todo.todo }}
        <div >
            <input type="checkbox" value="done" v-model="todo.isDone" @change="updateTodo(todo)" />
            <label for="done">Done</label>
            <input type="checkbox" value="postpone" v-model="todo.postpone" @change="updateTodo(todo)" />
            <label for="postpone">Postpone</label>
        </div>
        <base-button @click="deleteTodo(todo.id)">Delete</base-button>

    </base-card>

  
  </base-card>
</template>

<script>
export default {
    emits : ['delete-todo'],
    props : ['todos'],
    data(){
       return {
       isDone : false
       }
    },
    methods : {
        deleteTodo(id){

           this.$emit('delete-todo', id )
        } ,
        updateTodo(todo){
            console.log(todo)
            
        }
    },
 
    
}
</script>

<style scoped>
.todos{
    display:flex;
    justify-content: space-evenly;
    align-items: center;
   

}

</style>