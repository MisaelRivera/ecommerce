<script setup>
  import { ref } from 'vue';
  import GuestLayout from '../components/GuestLayout.vue';
  import store from '../store/index.js';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const loading = ref(false);
  const errorMsg = ref('');

  const user = {
      email:'',
      password: '',
      remember: false,
  };

  function login() {
    loading.value = true;
    store.dispatch('login', user)
    .then(() => {
      loading.value = false;
      router.push({ name: 'app.dashboard' });
    })
    .catch(( response ) => {
      loading.value = false;
      console.log(response);
      errorMsg.value = response.data.message;
    });
  }
</script>
<template>
  <GuestLayout title="Sign in to your account">
    <form method="POST" @submit.prevent="login">
      <div v-if="errorMsg" class="flex items-center justify-center py-3 px-5 bg-red-500 text-white rounded">
        {{ errorMsg }}
      </div>
        <div>
          <div class="mt-2">
            <input 
                type="email" 
                name="email" 
                id="email"
                v-model="user.email"
                autocomplete="email"
                required 
                class="block w-full rounded-e bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Email address"/>
          </div>
        </div>

        <div>
          <div>
            <input 
                type="password" 
                name="password" 
                id="password"
                v-model="user.password"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus: focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Password" />
          </div>
        </div>
        <div class="flex items-center justify-between mt-5">
          <div class="flex items-center">
            <input 
              type="checkbox"
              id="remember-me"
              name="remember_me"
              v-model="user.remember"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
              <label 
                for="remember-me"
                class="ml-2 block text-sm text-gray-900">
                Remeber me
              </label>
          </div>
            <div class="text-sm">
              <router-link :to="{name: 'requestPassword'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</router-link>
            </div>
          </div>
        <div>
          <button 
            type="submit" 
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            :disabled="loading"
            :class="{'cursor-not-allowed':loading, 'hover:bg-indigo-500': loading}">
            <svg 
              v-if="loading"
              class="mr-3 -ml-1 size-5 animate-spin text-white" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24">
              <circle 
                class="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                stroke-width="4"></circle>
                <path 
                  class="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
            Sign in 
          </button>
        </div>
      </form>
  </GuestLayout>
</template>