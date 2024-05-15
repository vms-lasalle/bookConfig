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
    <header>
        <div class="logo">
            <img src="/images/logo.png" alt="Logo NCA" />
        </div>
        <nav>
            <ul class="nav-links" v-if="authStore.user.token">
                <li>
                    <routerLink :to="{ name: 'home' }">
                        <home-icon :size="40" class="icon" />
                        <span class="nav-item">Home</span>
                    </routerLink>
                </li>
                <li>
                    <routerLink :to="{ name: 'users' }">
                        <account-icon :size="40" class="icon" />
                        <span class="nav-item">Usuarios</span>
                    </routerLink>
                </li>
                <li>
                    <routerLink :to="{ name: 'stages' }">
                        <school-icon :size="40" class="icon" />
                        <span class="nav-item">Etapas</span>
                    </routerLink>
                </li>
                <li>
                    <routerLink :to="{ name: 'subjects' }">
                        <book-open-variant-icon :size="40" class="icon" />
                        <span class="nav-item">Materias</span>
                    </routerLink>
                </li>
                <li>
                    <routerLink :to="{ name: 'languages' }">
                        <translate-icon :size="40" class="icon" />
                        <span class="nav-item">Idiomas</span>
                    </routerLink>
                </li>
                <li>
                    <button @click.prevent="onLogout">
                        <logout-icon :size="40" class="icon" />
                        <span class="nav-item">Salir</span>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss">
header {
    background-color: $nav-background;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 5px 5%;
    .logo {
        cursor: pointer;
        img {
            height: 60px;
            width: auto;
            transition: all 0.3s ease;
        }
        img:hover {
            transform: scale(1.2);
        }
    }
    nav {
        .nav-links {
            list-style: none;
            li {
                display: inline-block;
                padding: 0 20px;
                .nav-item {
                    font-size: 1rem;
                    margin-left: 5px;
                }
                .icon {
                    vertical-align: middle;
                }
                .router-link-active {
                    color: $active-color;
                }
                a {
                    display: inline-block;
                    color: $nav-color;
                    transition: all 0.3s ease;
                }
                a:hover {
                    background-color: rgba(255, 255, 0, 0.5);
                }
                button {
                    background-color: $nav-background;
                    display: inline-block;
                    color: $nav-color;
                    transition: all 0.3s ease;
                }
                button:hover {
                    background-color: rgba(255, 255, 0, 0.5);
                }
            }
        }
    }
}
</style>
