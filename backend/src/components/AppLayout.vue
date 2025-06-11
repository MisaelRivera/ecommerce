<script setup>
    import { ref, onMounted, onUnmounted} from 'vue';
    import Sidebar from './Sidebar.vue';
    import Navbar from './Navbar.vue';
    import store from '../store';

    const props = defineProps({
        title: String
    });

    const isSidebarOpen = ref(true);

    function toggleSidebar () {
        isSidebarOpen.value = !isSidebarOpen.value;
    }

    function handleSidebarOpened () {
        isSidebarOpen.value = window.outerWidth > 768;
    }

    onMounted(() => {
        store.dispatch('getUser');
        handleSidebarOpened();
        window.addEventListener('resize', handleSidebarOpened);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleSidebarOpened);
    });
</script>
<template>
  <div class="flex min-h-full bg-gray-200">
    <!-- Sidebar -->
    <Sidebar :class="{'-ml-[200px]':!isSidebarOpen}" class="transition-all"/>
    <!--/ Sidebar -->

    <div class="flex-1">
       <Navbar @toggle-sidebar="toggleSidebar"/>

        <!-- Content -->
        <main class="p-6">
            <router-view></router-view>
        </main>
        <!--/ Content -->
    </div>
  </div>
</template>