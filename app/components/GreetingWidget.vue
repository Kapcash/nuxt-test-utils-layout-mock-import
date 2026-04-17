<template>
  <div class="greeting">{{ greeting.message }}</div>
</template>

<script setup lang="ts">
const greeting = useGreeting()
</script>
