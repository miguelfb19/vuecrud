<template>
  <section class="employeeds">
    <h1>LISTA DE EMPLEADOS</h1>
    <div v-if="empleadosGuardados.length == 0" class="noEmpleados">
      <h2>¡¡¡NO HAY EMPLEADOS REGISTRADOS EN ESTE MOMENTO!!!</h2>
    </div>
    <div class="btnOrder" v-if="empleadosGuardados.length > 0">
      <input
        type="button"
        value="Ordenar por nombre"
        @click="ordenarPorNombre"
        class="btn"
      />
      <input
        type="button"
        value="Ordenar por edad"
        @click="ordenarPorEdad"
        class="btn"
      />
      <input
        type="button"
        value="Ordenar por ID"
        @click="ordenarPorID"
        class="btn"
      />
      <input
        type="button"
        value="Ordenar por Experiencia"
        @click="ordenarPorExp"
        class="btn"
      />
    </div>
    <div class="containerTable">
      <table v-if="empleadosGuardados.length > 0">
        <thead>
          <tr class="encabezadoTablas">
            <th>ID</th>
            <th>Nombre empleado</th>
            <th>Edad</th>
            <th>Lenguajes de programación</th>
            <th>Años de experiencia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="empleado in empleadosGuardados" :key="empleado.id">
            <td>{{ empleado.id }}</td>
            <td>{{ empleado.nombre }}</td>
            <td>{{ empleado.edad }}</td>
            <td>{{ empleado.lenguajes }}</td>
            <td>{{ empleado.añosExp }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      empleadosGuardados: [], //creo el array que me va a guardar los empleados del JSON de localStorage
    };
  },

  mounted() {
    this.cargarEmpleadosGuardados(); //cada vez que se cargue el componente, se ejecuta ese metodo
  },

  methods: {
    //creo un metodo que me carga en el array empleadosGuardados (data) todos los empleados de localStorage
    cargarEmpleadosGuardados() {
      this.empleadosGuardados = Object.keys(localStorage)
        .filter((key) => key.startsWith("id:"))
        .map((key) => JSON.parse(localStorage.getItem(key)))
        .sort((a, b) => a.nombre.localeCompare(b.nombre)); //ordeno los datos por nombre automaticamente
    },
    //usando QuickSort para los metodos de ordenamiento
    ordenarPorNombre() {
      this.empleadosGuardados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    },
    ordenarPorEdad() {
      this.empleadosGuardados.sort((a, b) => a.edad - b.edad);
    },
    ordenarPorID() {
      this.empleadosGuardados.sort((a, b) => a.id - b.id);
    },
    ordenarPorExp() {
      this.empleadosGuardados.sort((a, b) => b.añosExp - a.añosExp);
    },
  },
};
</script>
