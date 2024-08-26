<template>
  <h1 style="margin-top: 35px">BUSCAR POR:</h1>
  <section class="buscador">
    <div class="form-group">
      <label for="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        placeholder="Ej: Pedro Pérez"
        v-model="camposDeBusqueda.nombreDigitado"
      />
    </div>
    <div class="clearfix"></div>
    <div class="form-group">
      <label for="edad">Edad mínima:</label>
      <input
        type="number"
        name="edad"
        v-model="camposDeBusqueda.edadDigitada"
      />
    </div>
    <div class="clearfix"></div>
    <div class="form-group">
      <label for="lenguajes">Lenguajes de programación:</label>
      <input
        type="text"
        multiple
        name="lenguajes"
        placeholder="Ej. Python, Ruby, ..."
        v-model="camposDeBusqueda.lenguajesDigitados"
      />
    </div>
    <div class="clearfix"></div>
    <div class="form-group">
      <label for="aniosExp">Años mínimos de experiencia:</label>
      <input
        type="number"
        name="aniosExp"
        v-model="camposDeBusqueda.añosDigitados"
      />
    </div>
  </section>
  <div class="btns-buscador">
    <input type="button" value="Buscar" class="btn" @click.prevent="buscar" />
  </div>

  <table v-if="buscarEvent">
    <tr class="encabezado">
      <th>ID</th>
      <th>Nombre empleado</th>
      <th>Edad</th>
      <th>Lenguajes de programación</th>
      <th>Años de experiencia</th>
    </tr>
    <tr v-for="empleado in empleadosEncontrados" :key="empleado">
      <td>{{ empleado.id }}</td>
      <td>{{ empleado.nombre }}</td>
      <td>{{ empleado.edad }}</td>
      <td>{{ empleado.lenguajes }}</td>
      <td>{{ empleado.añosExp }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "buscarEmpleados",
  data() {
    return {
      empleadosEncontrados: [], //creo el array que me va a guardar los objetos resultados de la busqueda
      buscarEvent: false,
      localDates: Object.keys(localStorage) //Guardamos en una variable los datos del localStorage para usarlos en nuestro componente
        .filter((key) => key.startsWith("id:"))
        .map((key) => JSON.parse(localStorage.getItem(key))),
      camposDeBusqueda: {
        nombreDigitado: "",
        edadDigitada: null,
        lenguajesDigitados: "",
        añosDigitados: null,
      },
    };
  },

  mounted() {
    console.log(this.localDates);
    console.log(this.camposDeBusqueda.nombreDigitado);
  },

  methods: {
    buscar() {
      this.buscarEvent = true;
      this.empleadosEncontrados = this.localDates;

      if (this.camposDeBusqueda.nombreDigitado !== "") {
        this.empleadosEncontrados = this.empleadosEncontrados.filter((obj) =>
          obj.nombre
            .toLowerCase()
            .includes(this.camposDeBusqueda.nombreDigitado.toLowerCase())
        );
      }

      if (this.camposDeBusqueda.edadDigitada !== null) {
        this.empleadosEncontrados = this.empleadosEncontrados.filter(
          (obj) => obj.edad >= this.camposDeBusqueda.edadDigitada
        );
      }

      if (this.camposDeBusqueda.añosDigitados !== null) {
        this.empleadosEncontrados = this.empleadosEncontrados.filter(
          (obj) => obj.añosExp >= this.camposDeBusqueda.añosDigitados
        );
      }

      if (this.camposDeBusqueda.lenguajesDigitados !== "") {
        const lenguajesBusqueda = this.camposDeBusqueda.lenguajesDigitados //guardamos los lenguajes de busqueda en un array
          .toLowerCase() //los pasamos a minusculas
          .split(",") //separamos cada termino del array si ha una coma
          .map((term) => term.trim()); //quitamos los espacios en blanco

        this.empleadosEncontrados = this.empleadosEncontrados.filter((obj) =>
          lenguajesBusqueda.every((term) =>
            obj.lenguajes.toLowerCase().trim().includes(term)
          )
        );
      }

      this.camposDeBusqueda.nombreDigitado = "";
      this.camposDeBusqueda.edadDigitada = null;
      this.camposDeBusqueda.lenguajesDigitados = "";
      this.camposDeBusqueda.añosDigitados = null;
    },
  },
};
</script>
