<template>
    <div class="alcanceroles">
        <p>
            <input type="text" id="newpermission" v-model="newPermission" />
            <button @click.prevent="addPermission" class="success">
                <add-icon :size="15" class="icon" />
            </button>
        </p>
        <p>
            <span v-for="(permission, clave) in props.scope" :key="clave"
                >{{ permission }}
                <button @click.prevent="deletePermission(clave)" class="danger">
                    <cancel-icon :size="15" class="icon" />
                </button>
                &nbsp;
            </span>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import cancelIcon from 'vue-material-design-icons/Close.vue'
import addIcon from 'vue-material-design-icons/Plus.vue'

const props = defineProps({
    scope: {
        type: Array,
        required: true
    }
})
const newPermission = ref('')

// addPermission appends newPermission to props.scope list
const addPermission = () => {
    if (newPermission.value) {
        // eslint-disable-next-line vue/no-mutating-props
        props.scope.push(newPermission.value)
        newPermission.value = ''
    }
}

const deletePermission = (clave) => {
    // eslint-disable-next-line vue/no-mutating-props
    props.scope.splice(clave, 1)
}
</script>

<style scoped lang="scss">
.alcanceroles {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    background-color: #f0f0f0;
    box-shadow: inset 0 0 0.5rem #ccc;
}
</style>
