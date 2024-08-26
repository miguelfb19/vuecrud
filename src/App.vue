<template>
  <!DOCTYPE <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CRUD Universidad de Manizales</title>
    </head>
    <body>
      <div class="center">
        <principal-component></principal-component>
        <router-view></router-view>
      </div>
    </body>
  </html>
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

<style>
@import "@/assets/css/styles";
</style>
