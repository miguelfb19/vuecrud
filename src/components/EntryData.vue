<template>
  <h1>INGRESA LOS DATOS A CONTINUACIÓN:</h1>
  <form id="formulario" @submit.prevent="guardarDatos">
    <div class="form-group">
      <label for="nombre">Nombre Completo:</label>
      <input
        type="text"
        name="nombre"
        placeholder="Ej: Pedro Pérez"
        v-model="empleados.nombre"
        required
      />
    </div>
    <div class="clearfix"></div>
    <div class="form-group">
      <label for="edad">Edad:</label>
      <input type="number" name="edad" v-model="empleados.edad" required />
    </div>
    <div class="clearfix"></div>
    <div class="form-group">
      <label for="lenguajes"
        >Lenguajes de programación que sabe (separados por coma ','):</label
      >
      <input
        type="text"
        multiple
        name="lenguajes"
        placeholder="Ej. Python, Ruby, ..."
        v-model="empleados.lenguajes"
        required
      />
    </div>
    <div class="clearfix"></div>
    <div class="form-group">
      <label for="aniosExp">Años de experiencia programando:</label>
      <input
        type="number"
        name="aniosExp"
        v-model="empleados.añosExp"
        required
      />
    </div>

    <div class="buttomsform">
      <input
        type="submit"
        value="Enviar"
        class="btn btn-success buttomsform1"
      />
      <input type="reset" value="Borrar" class="btn btn-success buttomsform2" />
    </div>
    <div v-if="submitted">
      <span class="success">¡¡¡DATOS GUARDADOS CON ÉXITO!!!</span>
    </div>
  </form>
</template>

<script>
export default {
  name: "entryData",

  data() {
    return {
      empleados: {
        id: null,
        nombre: "",
        edad: null,
        lenguajes: [],
        añosExp: null,
      },
      empleadosGuardados: [],
      submitted: false,
    };
  },

  methods: {
    guardarDatos() {
      //Creamos un id para cada empleado registrado, y le asignamos un valor de estrig con la fecha y hora actuales
      const id = new Date().getTime().toString();
      this.empleados.id = id;

      //guardamos localmente los datos de empleados en un JSON con id unica
      localStorage.setItem(`id:${id}`, JSON.stringify(this.empleados));

      //reiniciamos el formulario
      this.empleados = {
        id: null,
        nombre: "",
        edad: null,
        lenguajes: [],
        añosExp: null,
      };

      this.submitted = true; //cambio el valor de submitted para ejecutar el mensaje de DATOS GUARDADOS CON EXITO
      setTimeout(() => {
        this.submitted = false;
      }, 2000); //quito el mensaje de exito despues de 2s
      //creamos un alert para indicar al usuario que los datos quedaron guardados
      //alert("Datos guardados con exito");

      //Actualizo la interfaz de la tabla
      this.actualizarInterfaz;
    },

    actualizarInterfaz() {
      //para actualizar las vistas y mostrarlos en tabla debo crear un array en data() que me va a guardar las keys de los JSON
      this.empleadosGuardados = Object.keys(localStorage) //en el array empleadosGuardados creado anteriormente en data() guardamos todas las keys (id) del JSON de localStorage
        .filter((key) => key.startsWith("id:")) //cogemos cada id de ese array y filtramos todas las que inicien por id: (osea todas) para asegurarnos que si sea un dato valido
        .map((key) => JSON.parse(localStorage.getItem(key))); //usamos las id para obtener cada valor del JSON (que es un objeto de JS) y guardar todos las datos en un array de objetos
    },
  },
};
</script>
