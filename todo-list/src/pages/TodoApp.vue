<template>
  <section>
    <base-card>
        <the-header></the-header>
        <add-todo></add-todo>
        <todo-list :todos="todoList" @delete-todo="deleteTodo"></todo-list>
    </base-card>
  </section>
</template>

<script>
import TheHeader from '../components/nav/TheHeader.vue'
import AddTodo from '../components/AddTodo.vue'
import TodoList from '../components/ListTodo.vue'
export default {
 components : {
    TheHeader,
    AddTodo,
    TodoList
 },
 computed : {
        todoList(){
            return this.$store.getters.todoList
        }
    },
    methods : {
        deleteTodo(id){
           this.$store.dispatch('deleteTodo', id)
        }
    }
}
</script>

<style>

</style>