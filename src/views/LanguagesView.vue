<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/AuthStore'
import axios from 'axios'
import editIcon from 'vue-material-design-icons/Pencil.vue'
import cancelIcon from 'vue-material-design-icons/Close.vue'
import addIcon from 'vue-material-design-icons/Plus.vue'
import saveIcon from 'vue-material-design-icons/Check.vue'

const authStore = useAuthStore()

const languages = ref([])
const editActive = ref(false)
const newLanguageId = ref(0)
const newLanguageName = ref('')
const newLanguageCode = ref('')

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
    if (id !== 0) {
        const language = languages.value.find((language) => language.id === id)
        newLanguageId.value = language.id
        newLanguageName.value = language.language
        newLanguageCode.value = language.code
    } else {
        newLanguageId.value = 0
        newLanguageName.value = ''
        newLanguageCode.value = ''
    }
    editActive.value = !editActive.value
}

const cancelEdit = () => {
    editActive.value = !editActive.value
}

const saveLanguage = () => {
    console.log('save language')
    const language = {
        language: newLanguageName.value,
        code: newLanguageCode.value
    }
    if (newLanguageId.value === 0) {
        axios
            .post(authStore.apiUrl + '/api/languages', language, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getLanguages()
                editActive.value = !editActive.value
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo crear el idioma.')
            })
    } else {
        axios
            .put(authStore.apiUrl + '/api/languages/' + newLanguageId.value, language, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getLanguages()
                editActive.value = !editActive.value
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo guardar el idioma.')
            })
    }
}

const deleteLanguage = (id) => {
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
            <button @click="editLanguage(0)" class="new">
                <add-icon :size="15" class="icon" />
            </button>
        </section>
        <section class="new_entry" v-if="editActive">
            <label
                >Idioma:
                <input type="text" id="language" v-model="newLanguageName" />
            </label>
            <label
                >Código:
                <input type="text" id="code" v-model="newLanguageCode" />
            </label>
            <div>
                <button @click.prevent="saveLanguage" class="success">
                    <save-icon :size="15" class="icon" /></button
                >&nbsp;
                <button @click.prevent="cancelEdit" class="danger">
                    <cancel-icon :size="15" class="icon" />
                </button>
            </div>
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
                            <button @click="editLanguage(language.id)" class="success">
                                <edit-icon :size="15" class="icon" />
                            </button>
                            &nbsp;
                            <button @click="deleteLanguage(language.id)" class="danger">
                                <cancel-icon :size="15" class="icon" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<style lang="scss" scoped></style>
