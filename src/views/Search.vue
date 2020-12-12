<template>
  <section id="search">
    <input type="text" name="pesquisar" id="" placeholder="buscar" @keyup.enter="buscar">
  </section>
</template>

<script>
export default {
  data: () => ({
    
  }),

  methods: {
    buscar: () => {
     console.log(event.target) 
    },
  }
}
</script>

<style lang="scss" scoped>
    #search {
      background: #282828;
      height: 50px;
      text-align: center;
      & input {
      background-color: #4b4a4a;
      height: 39px;
      margin: 5px 0;
      width: 88%;
      text-align: center;
      font-weight: bold;
      border-radius: 20px;
      font-size: 14px;
      color: white;
      text-transform: capitalize;
      outline: none;
      }
    }
</style>