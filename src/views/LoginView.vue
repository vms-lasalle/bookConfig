<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()

const credentials = reactive({
    email: '',
    password: ''
})

const onSubmit = () => {
    authStore.login(credentials)
}
</script>

<template>
    <div class="loginform">
        <form @submit.prevent="onSubmit">
            <h1>Entrar</h1>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" v-model="credentials.email" required />
            </div>
            <div>
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="credentials.password" required />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.loginform {
    display: flex;
    justify-content: center;
    place-items: center;
    margin: auto;
    width: 40vw;
    padding: 40px 5%;
    background-color: #fff5;
    backdrop-filter: blur(10px);
    box-shadow: 0 0.4rem 0.8rem #0005;
    border-radius: 0.8rem;

    form {
        h1 {
            text-align: center;
            font-size: 1.5rem;
        }
        display: flex;
        flex-direction: column;
        gap: 20px;
        div {
            display: flex;
            flex-direction: column;
            gap: 5px;
            label {
                font-size: 0.9rem;
            }
            input {
                padding: 5px;
                font-size: 1rem;
            }
        }
        button {
            padding: 10px;
            font-size: 1.2rem;
            background: $access-color;
            color: white;
            border: none;
            cursor: pointer;
        }
    }
}
</style>
