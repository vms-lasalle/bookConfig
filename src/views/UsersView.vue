<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/AuthStore'
import axios from 'axios'
import editIcon from 'vue-material-design-icons/Pencil.vue'
import cancelIcon from 'vue-material-design-icons/Close.vue'
import addIcon from 'vue-material-design-icons/Plus.vue'
import saveIcon from 'vue-material-design-icons/Check.vue'

const authStore = useAuthStore()

const roles = ref([])
const users = ref([])
const editActive = ref(false)
const newUserId = ref(0)
const newUserEmail = ref('')
const newUserPass = ref('')
const newUserPass2 = ref('')
const newUserRole = ref(0)

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
const getUsers = async () => {
    axios
        .get(authStore.apiUrl + '/api/users', {
            headers: {
                Authorization: 'Bearer ' + authStore.user.token
            }
        })
        .then((response) => {
            users.value = response.data
        })
}

const editUser = (id) => {
    if (id !== 0) {
        const user = users.value.find((user) => user.id === id)
        newUserId.value = user.id
        newUserEmail.value = user.email
        newUserRole.value = user.role_id
    } else {
        newUserId.value = 0
        newUserEmail.value = ''
        newUserRole.value = 1
    }
    newUserPass.value = ''
    newUserPass2.value = ''

    editActive.value = !editActive.value
}

const cancelEdit = () => {
    editActive.value = !editActive.value
}

const saveUser = () => {
    if (newUserPass.value !== newUserPass2.value) {
        alert('Las contraseñas no coinciden.')
        return
    }

    const user = {
        email: newUserEmail.value,
        role_id: newUserRole.value
    }

    if (newUserPass.value !== '') {
        user.password = newUserPass.value
    }

    if (newUserId.value === 0) {
        axios
            .post(authStore.apiUrl + '/api/users', user, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getUsers()
                editActive.value = !editActive.value
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo crear el usuario.')
            })
    } else {
        axios
            .put(authStore.apiUrl + '/api/users/' + newUserId.value, user, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getUsers()
                editActive.value = !editActive.value
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo actualizar el usuario.')
            })
    }
}

const deleteUser = (id) => {
    if (confirm('¿Estás seguro de borrar este usuario?')) {
        axios
            .delete(authStore.apiUrl + '/api/users/' + id, {
                headers: {
                    Authorization: 'Bearer ' + authStore.user.token
                }
            })
            .then((response) => {
                console.log(response.data)
                getUsers()
            })
            .catch((error) => {
                console.log(error)
                alert('No se pudo borrar el usuario.')
            })
    }
}

onMounted(() => {
    getUsers()
    getRoles()
})
</script>

<template>
    <div class="table">
        <section class="table_header">
            <h1>Usuarios registrados</h1>
            <button @click="editUser(0)" class="new">
                <add-icon :size="15" class="icon" />
            </button>
        </section>
        <section class="new_entry" v-if="editActive">
            <label
                >Email:
                <input type="email" id="user" v-model="newUserEmail" />
            </label>
            <label
                >Contraseña:
                <input type="password" id="code" v-model="newUserPass" />
            </label>
            <label
                >Repetir contraseña:
                <input type="password" id="code" v-model="newUserPass2" />
            </label>
            <label
                >role:
                <select id="role" v-model="newUserRole">
                    <option v-for="role in roles" :key="role.id" :value="role.id">
                        {{ role.role }}
                    </option>
                </select>
            </label>
            <div>
                <button @click.prevent="saveUser" class="success">
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
                        <th>email</th>
                        <th>rol</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.role }}</td>
                        <td>
                            <button @click="editUser(user.id)" class="success">
                                <edit-icon :size="15" class="icon" />
                            </button>
                            &nbsp;
                            <button @click="deleteUser(user.id)" class="danger">
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
