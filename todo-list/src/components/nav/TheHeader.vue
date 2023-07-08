<template>
  <header>
    <base-card>
    {{ title }}
    </base-card>
  </header>
</template>


<script>
export default {
    computed : {
    title(){
        return this.$store.getters.title
    }
   }

}
</script>

<style>

</style>