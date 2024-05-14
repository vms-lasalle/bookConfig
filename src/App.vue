<script setup>
import SidebarNav from '@/components/SidebarNav.vue'
import { RouterView } from 'vue-router'
</script>

<template>
    <SidebarNav />
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
body {
    background: $back-color;
}
main {
    margin-left: 100px;
    padding: 20px;
}
</style>
