<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/AuthStore'
import axios from 'axios'
import editIcon from 'vue-material-design-icons/Pencil.vue'
import cancelIcon from 'vue-material-design-icons/Close.vue'
import addIcon from 'vue-material-design-icons/Plus.vue'
import saveIcon from 'vue-material-design-icons/Check.vue'

const authStore = useAuthStore()

const stages = ref([])
const editActive = ref(false)
const newStageId = ref(0)
const newStageName = ref('')
const newStageLevels = ref(1)

const getStages = async () => {
    axios
        .get(authStore.apiUrl + '/api/stages', {
            headers: {
                Authorization: 'Bearer ' + authStore.user.token
            }
        })
        .then((response) => {
            stages.value = response.data
        })
}

const editStage = (id) => {
    if (id !== 0) {
        const stage = stages.value.find((stage) => stage.id === id)
        newStageId.value = stage.id
        newStageName.value = stage.stage
        newStageLevels.value = stage.levels
    } else {
        newStageId.value = 0
        newStageName.value = ''
        newStageLevels.value = ''
    }
    editActive.value = !editActive.value
}

const cancelEdit = () => {
    editActive.value = !editActive.value
}

const saveStage = () => {
    const stage = {
        stage: newStageName.value,
        levels: newStageLevels.value
    }
    if (newStageId.value === 0) {
        axios
            .post(authStore.apiUrl + '/api/stages', stage, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getStages()
                editActive.value = !editActive.value
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo crear el nivel educativo.')
            })
    } else {
        axios
            .put(authStore.apiUrl + '/api/stages/' + newStageId.value, stage, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getStages()
                editActive.value = !editActive.value
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo guardar el nivel educativo.')
            })
    }
}

const deleteStage = (id) => {
    if (confirm('¿Estás seguro de borrar este nivel educativo?')) {
        axios
            .delete(authStore.apiUrl + '/api/stages/' + id, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getStages()
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo borrar el nivel educativo porque está siendo usado.')
            })
    }
}

onMounted(() => {
    getStages()
})
</script>

<template>
    <div class="table">
        <section class="table_header">
            <h1>Niveles educativos disponibles</h1>
            <button @click="editStage(0)" class="new">
                <add-icon :size="15" class="icon" />
            </button>
        </section>
        <section class="new_entry" v-if="editActive">
            <label
                >Nivel educativo:
                <input type="text" id="stage" v-model="newStageName" />
            </label>
            <label
                >Número de cursos del nivel:
                <input type="number" id="code" v-model="newStageLevels" />
            </label>
            <div>
                <button @click.prevent="saveStage" class="success">
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
                        <th>nivel educativo</th>
                        <th>número de cursos</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="stage in stages" :key="stage.id">
                        <td>{{ stage.id }}</td>
                        <td>{{ stage.stage }}</td>
                        <td>{{ stage.levels }}</td>
                        <td>
                            <button @click="editStage(stage.id)" class="success">
                                <edit-icon :size="15" class="icon" />
                            </button>
                            &nbsp;
                            <button @click="deleteStage(stage.id)" class="danger">
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
