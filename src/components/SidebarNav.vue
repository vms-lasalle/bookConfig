<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <ul>
            <li>
                <a href="#" class="logo">
                    <img src="/images/logo.png" alt="" />
                    <span class="nav-item">NCABook</span>
                </a>
            </li>
            <li>
                <routerLink to="/">
                    <i class="fa-solid fa-home"></i>
                    <span class="nav-item">Home</span>
                </routerLink>
            </li>
            <li>
                <routerLink to="/users">
                    <i class="fa-solid fa-user"></i>
                    <span class="nav-item">Usuarios</span>
                </routerLink>
            </li>
            <li>
                <a href="#">
                    <i class="fa-solid fa-school"></i>
                    <span class="nav-item">Etapas</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa-brands fa-readme"></i>
                    <span class="nav-item">Materias</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa-solid fa-language"></i>
                    <span class="nav-item">Idiomas</span>
                </a>
            </li>
            <li>
                <a href="#" class="logout">
                    <i class="fa-solid fa-sign-out"></i>
                    <span class="nav-item">Salir</span>
                </a>
            </li>
        </ul>
    </nav>
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
nav {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    background: lightblue;
    width: 70px;
    overflow: hidden;
    transition: width 0.2s linear;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.2);
}
.logo {
    text-align: center;
    display: flex;
    transition: all 0.5s ease;
}
.logo img {
    width: 50px;
    height: 50px;
}
.logo span {
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
}
a,
RouterLink {
    position: relative;
    color: rgb(85, 83, 83);
    font-size: 20px;
    display: table;
    width: 200px;
    padding: 10px;
}
.fa-solid,
.fa-brands,
.fas {
    position: relative;
    width: 50px;
    height: 40px;
    top: 14px;
    font-size: 20px;
    text-align: center;
}
.nav-item {
    position: relative;
    top: 12px;
    margin-left: 10px;
}
a:hover {
    background: #eee;
}
nav:hover {
    width: 200px;
    transition: all 0.5s ease;
}
.logout {
    position: absolute;
    bottom: 0px;
}
</style>
