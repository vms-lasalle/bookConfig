<script setup>
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
</script>

<template>
    <div class="about">
        <h1>Bienvenido</h1>
        <hr />
        <p>{{ authStore.user.email }}</p>
    </div>
</template>

<style lang="scss" scoped></style>
