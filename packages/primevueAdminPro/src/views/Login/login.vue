<template>

  <div class="w-full h-full flex flex-col  flex-items-center justify-center">
    <div class="m-3">
        <span class="p-float-label">
            <InputText autocomplete="off" id="username" :class="[isInvalid.username? 'p-invalid' : '']" v-model="username"/>
            <label for="username">用户名</label>
        </span>
    </div>
    <div class="m-3">
        <span class="p-float-label">
            <InputText autocomplete="off" id="password" :class="[isInvalid.password? 'p-invalid' : '']" v-model="password"/>
            <label for="username">密码</label>
        </span>
    </div>

    <div>
      <Button type="button" label="登录" icon="pi pi-search" :loading="loading" @click="login"/>

    </div>

    <Message :severity="'success'">登录成功</Message>


  </div>

</template>
<script setup>

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import Toast from "primevue/toast";
import Message from "primevue/message";

const router = useRouter();

const username = ref("")
const password = ref("")
const loading = ref(false)

const isInvalid = reactive({
  username: false,
  password: false
})


const login = () => {


  isInvalid.username = !username.value
  isInvalid.password = !password.value
  if (isInvalid.username || isInvalid.password) {
    return
  }
  loading.value = true;
  setTimeout(() => {
    loading.value = false
    router.push({path: "/home"})
  }, 1500)

}
</script>


<style scoped>

</style>