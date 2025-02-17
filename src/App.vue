<script setup>
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter(); //기능
  const route = useRoute(); //정보
  router.push('/codemanagement');
</script>

<template>
  <h1>Hello World</h1>
  <router-view></router-view>
</template>


<style scoped>

</style>
