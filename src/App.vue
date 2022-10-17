<template>
<div>     
   <Header v-if="navbar"/>
  <div class="app">
    <div class="navbar">
    <NavProv v-if="navbar"/>
    </div>
    <router-view @toggleBar="() => (navbar = !navbar)"/>
    </div>
</div>
</template>

<script>
import Header from './components/Header.vue'
import NavProv from './components/NavProv.vue'

export default {
  name: 'App',
  components: {
   NavProv,
   Header
  },
  data () {
    return {
      navbar: true,
    }
  }
}
</script>

<style>
.app {
  display: flex;
}
.navbar {
  background-color: gray;
  /* color: white; */
  line-height: 5;
  height: 450px;
  position: fixed;
   text-align: center;
    width: 150px;
    margin-left: 20px;
    /* border: 1px solid; */
    border-radius: 20px;
}
</style>
