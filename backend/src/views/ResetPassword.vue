<script setup>
    import GuestLayout from '../components/GuestLayout.vue';
    function resetPassword () {
        console.log('reset password');
    }
</script>
<template>
    <GuestLayout title="Set a new password">
        <form method="POST" @submit.prevent="resetPassword">
            <div>
                <div class="mt-2">
                    <label 
                        for="new-password" 
                        class="sr-only">
                        New password
                    </label>
                    <input 
                        type="password" 
                        name="new_password" 
                        id="new-password"
                        required 
                        class="block w-full rounded-e bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        placeholder="New password"/>
                </div>
            </div>
            <div>
                <div class="mt-2">
                    <label 
                        for="password-repeat" 
                        class="sr-only">
                        Repeat password
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password-repeat"
                        required 
                        class="block w-full rounded-e bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        placeholder="Repeat password"/>
                </div>
            </div>
            <div class="flex items-center justify-between mt-5">
                <div class="text-sm">
                    <router-link 
                        :to="{name: 'login'}" 
                        class="font-semibold text-indigo-600 hover:text-indigo-500">
                        Go back to login
                    </router-link>
                </div>
            </div>
            <div>
                <button 
                    type="submit" 
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
        </form>
    </GuestLayout>
</template>