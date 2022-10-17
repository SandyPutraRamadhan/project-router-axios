<template>
    <div class="all">
        <h2>Menu</h2>
        <div class="btn">
            <router-link to="/jakarta">Jakarta</router-link>
        </div>
        <div class="btn">
            
            <router-link to="/jaBar">Jawa Barat</router-link>
        </div>
        <div class="btn">
            
            <router-link to="/jateng">Jawa Tengah</router-link>
        </div>
        <div class="btn">
            
            <router-link to="/jatim">Jawa Timur</router-link>
        </div>
        <div class="btn">
            <router-link to="/bali">Bali</router-link>
        </div>
    </div>
</template>

<script>
export default {
     name: "NavComp"
}
</script>

<style scoped>
.btn a{
    color: white;
    text-decoration: none;
    font-size: 20px;
    text-align: center;
}
.btn:hover {
    background-color: lightskyblue;
}
</style>