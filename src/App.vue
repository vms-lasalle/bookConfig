<script setup>
import NavBar from '@/components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
    <NavBar />
    <main>
        <RouterView />
    </main>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'IndivisaSans', sans-serif;
}
html {
    font-size: 20px;
}
body {
    background: url('./styles/images/lasallebg.jpg') no-repeat center center fixed;
}
main {
    padding: 20px 5%;
}
</style>
