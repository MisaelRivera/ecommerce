<script setup>
</script>
<template>
    <div class="w-[200px] bg-indigo-700 text-gray-300 py-4 px-2">
        <router-link 
            :to="{name: 'app.dashboard'}" 
            class="hover:bg-black/30 rounded flex p-2 transition-colors items-center">
            <i class="fas fa-home mr-2"></i>
            <span class="text-xs font-light">
                Dashboard
            </span>
        </router-link>
        <router-link 
            :to="{name: 'app.products'}" 
            class="hover:bg-black/30 rounded flex p-2 transition-colors items-center">
            <i class="fas fa-list-alt mr-2"></i>
            <span class="text-xs font-light">
                Products
            </span>
        </router-link>
        <router-link 
            :to="{name: 'app.users'}" 
            class="hover:bg-black/30 rounded flex p-2 transition-colors">
            <i class="fas fa-user mr-2"></i>
            <span class="text-xs font-light">
                Users
            </span>
        </router-link>
        <router-link 
            :to="{name: 'app.reports'}" 
            class="hover:bg-black/30 rounded flex p-2 transition-colors">
            <i class="fas fa-book mr-2"></i>
            <span class="text-xs font-light">
                Reports
            </span>
        </router-link>
    </div>
</template>