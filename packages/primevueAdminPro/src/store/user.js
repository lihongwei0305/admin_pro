import {defineStore} from "pinia";


const userStore = defineStore("user", {
    state: () => {
        return {}
    },
    getters: {},
    actions: {},
    persist: {
        enabled: true
    },
})


export default userStore