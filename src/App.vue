<template>
  <div id="app">
    <Navbar />
    <Player />
    <router-view/>
    
  </div>
</template>


<script>
  import Navbar from './components/Navbar'
  import Player from './components/Player'
export default {
  components: {
    Navbar,
    Player
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

#app {
  height: 100%;
  background: #000;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
