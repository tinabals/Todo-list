<template>
  <base-card>
    <base-card v-for="todo in todos" :key="todo.id">
        {{ todo.todo }}
        <base-button @click="deleteTodo(todo.id)">Delete</base-button>
    </base-card>

  
  </base-card>
</template>

<script>
export default {
    emits : ['delete-todo'],
    props : ['todos'],
    methods : {
        deleteTodo(id){
           this.$emit('delete-todo', id)
        } 
    }
    
}
</script>

<style>

</style>