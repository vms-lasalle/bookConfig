<script setup></script>

<template>
    <div class="loginform">
        <form>
            <h1>Login</h1>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label for="password">Contraseña</label>
                <input type="password" id="password" required />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    </div>
</template>

<style lang="scss">
.loginform {
    display: flex;
    justify-content: center;
    place-items: center;
    margin: auto;
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        div {
            display: flex;
            flex-direction: column;
            gap: 5px;
            label {
                font-size: 1.2rem;
            }
            input {
                padding: 10px;
                font-size: 1.2rem;
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
