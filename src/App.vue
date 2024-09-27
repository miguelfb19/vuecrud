<template>
  <div class="center">
    <principal-component></principal-component>
    <router-view></router-view>
  </div>
</template>

<script>
import principalComponent from "@/components/principalComponent.vue";

export default {
  name: "App",
  components: {
    principalComponent,
  },
};
</script>

<style scoped>
@import "./assets/css/styles.css";
</style>
