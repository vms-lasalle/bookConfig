<script setup>
import SidebarNav from '../components/SidebarNav.vue'
</script>

<template>
    <SidebarNav />
    <main>
        <div class="about">
            <h1>This is the users page</h1>
        </div>
    </main>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
