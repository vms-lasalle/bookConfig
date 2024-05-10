<script setup>
import SidebarNav from '../components/SidebarNav.vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'

const userStore = useUserStore()
const router = useRouter()
const { userMail } = storeToRefs(userStore)
onBeforeMount(() => {
    if (userMail.value === null) {
        router.push('/login')
    }
})
</script>

<template>
    <SidebarNav />
    <main>
        <div class="about">
            <h1>Home Page</h1>
        </div>
    </main>
</template>

<style lang="scss">
main {
    margin-left: 100px;
    padding: 20px;
}
</style>
