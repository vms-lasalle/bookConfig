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
            <div class="form__group">
                <input
                    type="email"
                    id="email"
                    v-model="credentials.email"
                    required
                    placeholder="Email"
                    class="form__field"
                />
                <label for="email" class="form__label">Email</label>
            </div>
            <div class="form__group">
                <input
                    type="password"
                    id="password"
                    v-model="credentials.password"
                    required
                    placeholder="Contraseña"
                    class="form__field"
                />
                <label for="password" class="form__label">Contraseña</label>
            </div>
            <div class="form__group">
                <button type="submit">Iniciar sesión</button>
            </div>
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
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            text-align: center;
            font-size: 1.5rem;
        }
        .form__group {
            position: relative;
            padding: 15px 0 0;
            margin-top: 10px;
        }

        .form__field {
            font-family: inherit;
            width: 100%;
            border: 0;
            border-bottom: 1px solid #d2d2d2;
            outline: 0;
            font-size: 1rem;
            color: #212121;
            padding: 7px 0;
            background: transparent;
            transition: border-color 0.2s;
        }

        .form__field::placeholder {
            color: transparent;
        }

        .form__field:placeholder-shown ~ .form__label {
            font-size: 1rem;
            cursor: text;
            top: 20px;
        }

        label,
        .form__field:focus ~ .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 0.8rem;
            color: #9b9b9b;
        }

        .form__field:focus ~ .form__label {
            color: #009788;
        }

        .form__field:focus {
            padding-bottom: 6px;
            border-bottom: 2px solid #009788;
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
