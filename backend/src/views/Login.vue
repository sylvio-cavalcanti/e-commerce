<template>
  <GuestLayout title="Sign in to your account">
    <form class="mt-8 space-y-6" method="POST" @submit.prevent="login" >
      <input type="hidden" name="remember" value="true" />
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input v-model="user.email" id="email-address" name="email" type="email" autocomplete="email" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input v-model="user.password" id="password" name="password" type="password" autocomplete="current-password" required="" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input v-model="user.remember" id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">
          <!-- :to="{name:'requestPassword'}" binding 'to', to the name is a better approach than to="/request-password" 
              since if the route path is changed, there will be no need to change the path also here.
            -->
          <router-link :to="{name:'requestPassword'}" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</router-link>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
          </span>
          Sign in
        </button>
      </div>
    </form>
  </GuestLayout>
</template>

<script setup>
import {ref} from 'vue'
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import GuestLayout from "../components/GuestLayout.vue"
import store from "../store";
import router from "../router";

let loading = ref(false);
let errorMsg = ref("");

const user = {
  email: 'admin@example.com',
  password: 'admin123',
  remember: false
}

function login () {
  loading.value = true;
  console.log('User login: ', user);
  store.dispatch('login', user)
    .then(() =>{
      loading.value = false;
      router.push({name: 'app.dashboard'})
    })
    .catch(({response}) => {
      loading.value = false;
      errorMsg.value = response.data.message;
      console.log('Login.vue - error: ', response)
    })
}
</script>
