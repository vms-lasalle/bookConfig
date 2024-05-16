<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/AuthStore'
import axios from 'axios'
import editIcon from 'vue-material-design-icons/Pencil.vue'
import cancelIcon from 'vue-material-design-icons/Close.vue'
import addIcon from 'vue-material-design-icons/Plus.vue'
import saveIcon from 'vue-material-design-icons/Check.vue'

const authStore = useAuthStore()

const subjects = ref([])
const editActive = ref(false)
const newSubjectId = ref(0)
const newSubjectName = ref('')

const getSubjects = async () => {
    axios
        .get(authStore.apiUrl + '/api/subjects', {
            headers: {
                Authorization: 'Bearer ' + authStore.user.token
            }
        })
        .then((response) => {
            subjects.value = response.data
        })
}

const editSubject = (id) => {
    if (id !== 0) {
        const subject = subjects.value.find((subject) => subject.id === id)
        newSubjectId.value = subject.id
        newSubjectName.value = subject.subject
    } else {
        newSubjectId.value = 0
        newSubjectName.value = ''
    }
    editActive.value = !editActive.value
}

const cancelEdit = () => {
    editActive.value = !editActive.value
}

const saveSubject = () => {
    const subject = {
        subject: newSubjectName.value
    }
    if (newSubjectId.value === 0) {
        axios
            .post(authStore.apiUrl + '/api/subjects', subject, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getSubjects()
                editActive.value = !editActive.value
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo crear la materia.')
            })
    } else {
        axios
            .put(authStore.apiUrl + '/api/subjects/' + newSubjectId.value, subject, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getSubjects()
                editActive.value = !editActive.value
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo guardar la materia.')
            })
    }
}

const deleteSubject = (id) => {
    if (confirm('¿Estás seguro de borrar esta materia?')) {
        axios
            .delete(authStore.apiUrl + '/api/subjects/' + id, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getSubjects()
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo borrar la materia porque está siendo usada.')
            })
    }
}

onMounted(() => {
    getSubjects()
})
</script>

<template>
    <div class="table">
        <section class="table_header">
            <h1>Materias disponibles</h1>
            <button @click="editSubject(0)" class="new">
                <add-icon :size="15" class="icon" />
            </button>
        </section>
        <section class="new_entry" v-if="editActive">
            <label
                >Materia:
                <input type="text" id="subject" v-model="newSubjectName" />
            </label>
            <div>
                <button @click.prevent="saveSubject" class="success">
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
                        <th>materia</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subject in subjects" :key="subject.id">
                        <td>{{ subject.id }}</td>
                        <td>{{ subject.subject }}</td>
                        <td>
                            <button @click="editSubject(subject.id)" class="success">
                                <edit-icon :size="15" class="icon" />
                            </button>
                            &nbsp;
                            <button @click="deleteSubject(subject.id)" class="danger">
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
