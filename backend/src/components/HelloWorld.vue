<script setup>
import { ref, computed } from 'vue'
import store from '../store';

const test = computed(() => store.state.test);

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  {{ test }}
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
