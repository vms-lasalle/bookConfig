<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/AuthStore'
import axios from 'axios'
import AlcanceRoles from '@/components/AlcanceRoles.vue'
import editIcon from 'vue-material-design-icons/Pencil.vue'
import cancelIcon from 'vue-material-design-icons/Close.vue'
import addIcon from 'vue-material-design-icons/Plus.vue'
import saveIcon from 'vue-material-design-icons/Check.vue'

const authStore = useAuthStore()

const roles = ref([])
const editActive = ref(false)
const newRoleId = ref(0)
const newRoleName = ref('')
const newRoleScope = ref([])

const getRoles = async () => {
    axios
        .get(authStore.apiUrl + '/api/roles', {
            headers: {
                Authorization: 'Bearer ' + authStore.user.token
            }
        })
        .then((response) => {
            roles.value = response.data
        })
}

const editRole = (id) => {
    if (id !== 0) {
        const role = roles.value.find((role) => role.id === id)
        newRoleId.value = role.id
        newRoleName.value = role.role
        newRoleScope.value = []
        for (const permission of role.scope) {
            newRoleScope.value.push(permission)
        }
    } else {
        newRoleId.value = 0
        newRoleName.value = ''
        newRoleScope.value = []
    }
    editActive.value = !editActive.value
}

const cancelEdit = () => {
    editActive.value = !editActive.value
}

const saveRole = () => {
    const role = {
        role: newRoleName.value,
        scope: []
    }
    for (const permission of newRoleScope.value) {
        role.scope.push(permission)
    }
    if (newRoleId.value === 0) {
        axios
            .post(authStore.apiUrl + '/api/roles', role, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getRoles()
                editActive.value = !editActive.value
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo crear el idioma.')
            })
    } else {
        axios
            .put(authStore.apiUrl + '/api/roles/' + newRoleId.value, role, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getRoles()
                editActive.value = !editActive.value
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo guardar el rol.')
            })
    }
}

const deleteRole = (id) => {
    if (confirm('¿Estás seguro de borrar este rol?')) {
        axios
            .delete(authStore.apiUrl + '/api/roles/' + id, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getRoles()
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo borrar el rol porque está siendo usado.')
            })
    }
}

onMounted(() => {
    getRoles()
})
</script>

<template>
    <div class="table">
        <section class="table_header">
            <h1>Roles de usuario</h1>
            <button @click="editRole(0)" class="new">
                <add-icon :size="15" class="icon" />
            </button>
        </section>
        <section class="new_entry" v-if="editActive">
            <label
                >rol:
                <input type="text" id="role" v-model="newRoleName" />
            </label>
            <alcance-roles :scope="newRoleScope" />
            <div>
                <button @click.prevent="saveRole" class="success">
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
                        <th>rol</th>
                        <th>alcance</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="role in roles" :key="role.id">
                        <td>{{ role.id }}</td>
                        <td>{{ role.role }}</td>
                        <td>
                            <span v-for="permission in role.scope" :key="permission">
                                {{ permission }}&nbsp;
                            </span>
                        </td>
                        <td>
                            <button @click="editRole(role.id)" class="success">
                                <edit-icon :size="15" class="icon" />
                            </button>
                            &nbsp;
                            <button @click="deleteRole(role.id)" class="danger">
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
