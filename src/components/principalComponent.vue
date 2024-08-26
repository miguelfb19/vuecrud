<template>
  <div id="header">
    <img class="logo" src="../assets/logo-umanizales.png" />
    <h1>CRUD EMPLEADOS</h1>
  </div>
  <div class="center"></div>
  <nav id="menu">
    <ul>
      <li>
        <router-link to="home">Inicio</router-link>
      </li>
      <li>
        <router-link to="form">Registrar Empleado</router-link>
      </li>
      <li>
        <router-link to="search">Buscar Empleados</router-link>
      </li>
      <li>
        <router-link to="table">Empleados Registrados</router-link>
      </li>
      <li>
        <router-link to="delete">Eliminar Empleado</router-link>
      </li>
    </ul>
  </nav>
  <div class="center"></div>
</template>

<script>
export default {
  name: "principalComponent",
};
</script>
