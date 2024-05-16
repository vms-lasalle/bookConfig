<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/AuthStore'
import axios from 'axios'

const authStore = useAuthStore()

const languages = ref([])

const getLanguages = async () => {
    axios
        .get(authStore.apiUrl + '/api/languages', {
            headers: {
                Authorization: 'Bearer ' + authStore.user.token
            }
        })
        .then((response) => {
            languages.value = response.data
        })
}

const editLanguage = (id) => {
    console.log('edit language', id)
}

const deleteLanguage = (id) => {
    console.log('delete language', id)
    if (confirm('¿Estás seguro de borrar este idioma?')) {
        axios
            .delete(authStore.apiUrl + '/api/languages/' + id, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getLanguages()
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo borrar el idioma porque está siendo usado.')
            })
    }
}

onMounted(() => {
    getLanguages()
})
</script>

<template>
    <div class="table">
        <section class="table_header">
            <h1>Idiomas disponibles</h1>
        </section>
        <section class="table_body">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>idioma</th>
                        <th>código</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="language in languages" :key="language.id">
                        <td>{{ language.id }}</td>
                        <td>{{ language.language }}</td>
                        <td>{{ language.code }}</td>
                        <td>
                            <!-- <router-link :to="{ name: 'edit-language', params: { id: language.id } }">Edit</router-link> -->
                            <button @click="editLanguage(language.id)">editar</button>
                            <button @click="deleteLanguage(language.id)">borrar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.table {
    margin: auto;
    width: 80vw;
    height: 80vh;
    padding: 10px 5%;
    background-color: #fff5;

    backdrop-filter: blur(10px);
    box-shadow: 0 0.4rem 0.8rem #0005;
    border-radius: 0.8rem;

    overflow: hidden;

    .table_header {
        width: 100%;
        height: 10%;
        background-color: #fff4;
        padding: 0.8rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .table_body {
        width: 95%;
        max-height: calc(89% - 1.6rem);
        background-color: #fffb;
        margin: 0.8rem auto;
        border-radius: 0.6rem;
        overflow: auto;
        overflow: overlay;
    }
    .table_body::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.5rem;
    }
    .table_body::-webkit-scrollbar-thumb {
        background-color: #0004;
        border-radius: 0.5rem;
        visibility: hidden;
    }
    .table_body:hover::-webkit-scrollbar-thumb {
        visibility: visible;
    }
    table {
        width: 100%;
    }
    table,
    th,
    td {
        border-collapse: collapse;
        padding: 0.2rem 1rem;
        text-align: center;
    }
    thead th {
        position: sticky;
        top: 0;
        left: 0;
        background-color: #d5d1defe;
        text-transform: capitalize;
    }
    tbody tr:nth-child(even) {
        background-color: #00f2;
    }
}
</style>
