<template>
    <!-- Header -->
    <div class="Data">
      <h1>Data Provinsi Pulau Jawa</h1>
       <hr />
      <img src="../assets/travel.png" alt="">
    <a class="btn btn-outline-danger my-2 my-sm-0"  @click="out" href="/">LogOut</a> 
    </div>
    <!-- End Header -->
</template>

<script>
export default {
    name: "HeaComp"
}
</script>

<style scoped>
.Data {
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  height: 200px;
  font-family: 'Lobster', cursive;
  color: white;
  background-color: gray;
}
.btn {
  background-color: black;
}
</style>