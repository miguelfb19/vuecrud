<template>
  <h1>ERROR!!!</h1>
  <h3>La página que estas buscando no existe</h3>
  <router-link to="home" class="errorLink">VOLVER AL INICIO</router-link>
</template>

<script>
export default {
  name: "ErrorComponent",
};
</script>

<style>
@import "@/assets/css/styles";
</style>
