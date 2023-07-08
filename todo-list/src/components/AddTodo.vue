<template>
 <section>
   <base-card>
   <form @submit.prevent="submitData">
    <div class="form-control">
      <label for="todos"> Add Todo</label>
      <input type="text" id="todo" name="todo" v-model.trim="todo" />
    </div>
      <base-button> Add Todo </base-button>
   </form>
  </base-card>
 </section>
</template>


<script>
export default {
    data(){
      return {
        todo : ''
      }
    },
    methods : {
      submitData(){
        const formData = {
          id  : new Date().toISOString(),
          todo : this.todo
        }
        this.$store.dispatch('addTodo', formData)
        this.todo = ''
      }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}


input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus{
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

</style>