<script setup>
import { RouterLink } from 'vue-router'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import AccountIcon from 'vue-material-design-icons/Account.vue'
import SchoolIcon from 'vue-material-design-icons/School.vue'
import BookOpenVariantIcon from 'vue-material-design-icons/BookOpenVariant.vue'
import TranslateIcon from 'vue-material-design-icons/Translate.vue'
import LogoutIcon from 'vue-material-design-icons/Logout.vue'
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()

const onLogout = () => {
    authStore.logout()
}
</script>

<template>
    <nav>
        <ul>
            <li>
                <div class="logo">
                    <img src="/images/logo.png" alt="" />
                    &nbsp;
                    <span class="nav-title">NCABook</span>
                </div>
            </li>
            <div v-if="authStore.user.token">
                <li>
                    <routerLink to="/">
                        <home-icon :size="45" class="icon" />
                        <span class="nav-item">Home</span>
                    </routerLink>
                </li>
                <li>
                    <routerLink to="/users">
                        <account-icon :size="45" class="icon" />
                        <span class="nav-item">Usuarios</span>
                    </routerLink>
                </li>
                <li>
                    <routerLink to="/stages">
                        <school-icon :size="45" class="icon" />
                        <span class="nav-item">Etapas</span>
                    </routerLink>
                </li>
                <li>
                    <routerLink to="/subjects">
                        <book-open-variant-icon :size="45" class="icon" />
                        <span class="nav-item">Materias</span>
                    </routerLink>
                </li>
                <li>
                    <routerLink to="/languages">
                        <translate-icon :size="45" class="icon" />
                        <span class="nav-item">Idiomas</span>
                    </routerLink>
                </li>
                <li>
                    <button class="logout" @click.prevent="onLogout">
                        <logout-icon :size="45" class="icon" />
                        <span class="nav-item">Salir</span>
                    </button>
                </li>
            </div>
        </ul>
    </nav>
</template>

<style lang="scss">
nav {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    background: $nav-background;
    width: 65px;
    overflow: hidden;
    transition: width 0.2s linear;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.2);
    .logo {
        position: relative;
        text-align: center;
        display: flex;
        width: 200px;
        padding-left: 10px;
        transition: all 0.3s ease;
    }
    img {
        width: 50px;
        height: 50px;
    }
    span {
        font-weight: bold;
        font-size: 20px;
        text-transform: uppercase;
    }
    .nav-item {
        top: 13px;
    }
    .nav-title {
        display: inline-block;
        margin-top: 13px;
        text-align: center;
        color: $nav-color;
        font-size: 22px;
    }
    .icon {
        position: relative;
        width: 50px;
        height: 40px;
        top: 16px;
        font-size: 20px;
        text-align: center;
    }
    .nav-item {
        position: relative;
        top: 0px;
        margin-left: 15px;
    }
    a {
        position: relative;
        color: $nav-color;
        font-size: 20px;
        display: table;
        width: 200px;
        padding-left: 10px;
        padding-bottom: 20px;
        transition: all 0.3s ease;
    }
    a:hover {
        background: rgba(255, 255, 0, 0.5);
    }
    button {
        position: relative;
        color: $nav-color;
        text-align: left;
        font-size: 20px;
        display: table;
        width: 200px;
        padding-left: 10px;
        padding-bottom: 20px;
        transition: all 0.3s ease;
        background: none;
        border: none;
    }
    .logout {
        position: absolute;
        bottom: 0px;
    }
}
nav:hover {
    width: 200px;
    transition: all 0.5s ease;
}
</style>
