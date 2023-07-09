<template>
 <section>
   <base-card>
   <form @submit.prevent="submitData" class="form">
    <div class="form-control" >
      <label for="todos"> Add Todo</label>
      <input type="text" id="todo" :class="{invalid : !todo.isValid}" @blur="clearValidity('todo')" name="todo" v-model.trim="todo.val" />
       <p v-if="!todo.isValid"> This can't be empty please</p>  
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
        todo : {
        val :   '',
        isValid : true
        }
      }
    },
    methods : {
      submitData(){
          if(this.todo.val === ''){
            this.todo.isValid = false
            return
          }

        const formData = {
          id  : new Date().toISOString(),
          todo : this.todo.val
        }
        this.$store.dispatch('addTodo', formData)
        this.todo.val = ''
      },
      clearValidity(input){
        this[input].isValid = true
      }
    }
}
</script>

<style scoped>
.form{
  display:flex;
  gap: 8px;
  align-items: center;
}

input[type="text"] {
  flex: 1; /* or use "grid-column: 1" for grid layout */
  /* add other styling for the input element */
}
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

.invalid {
  color:red;
  border: 1px solid red;
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