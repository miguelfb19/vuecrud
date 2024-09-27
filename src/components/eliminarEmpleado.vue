<template>
  <section class="employeedDelete">
    <h1>DIGITA EL <b>ID</b> DEL EMPLEADO QUE DESEAS ELIMINAR</h1>
    <div class="form-group inputDelete">
      <input
        type="text"
        name="eliminar"
        v-model="deleteID"
        @input="comprobante = false"
      />
      <input
        type="button"
        value="Eliminar"
        class="btn"
        @click.prevent="ComprobarEliminacion"
      />
    </div>
    <div v-for="empleado in empleadoAlmacenados" :key="empleado.id">
      <div
        v-if="deleteID == empleado.id && comprobante"
        class="comprobanteEliminacion"
      >
        El empleado que desea eliminar es:
        <b>{{ empleado.nombre.toUpperCase() }}</b> con id
        <b>{{ empleado.id }}</b>
        <h1>¿ESTA SEGURO QUE DESEA ELIMINAR EL REGISTRO DEL EMPLEADO?</h1>
        <div class="btn-yesno">
          <input type="button" value="SI" class="btn" @click="deleted" />
          <input
            type="button"
            value="NO"
            class="btn"
            @click="window.location.reload()"
          />
        </div>
      </div>
    </div>
    <div
      v-if="
        comprobante &&
        deleteID != '' &&
        !IDsEmpleados.includes(`id:${this.deleteID}`)
      "
    >
      <h1>¡¡¡EMPLEADO NO REGISTRADO EN LA BASE DE DATOS!!!</h1>
    </div>
    <div v-else-if="comprobante && deleteID == ''">
      <h1>DIGITE UN ID PARA ELIMINAR</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "eliminarEmpleado",

  data() {
    return {
      comprobante: false,
      deleteID: "", //crea la variable que me va a almacenar el ID que deseo eliminar
      empleadoAlmacenados: Object.keys(localStorage) //creo una variable que me almacena todos los empleados guardados para mostrar al usuario previo a la eliminacion
        .filter((key) => key.startsWith("id:"))
        .map((key) => JSON.parse(localStorage.getItem(key))),
      IDsEmpleados: Object.keys(localStorage), //guardo las IDs en un array
    };
  },

  mounted() {
    console.log(this.IDsEmpleados);
  },

  methods: {
    ComprobarEliminacion() {
      this.comprobante = true;
    },
    deleted() {
      if (this.IDsEmpleados.includes(`id:${this.deleteID}`)) {
        localStorage.removeItem(`id:${this.deleteID}`);
      }

      alert("EMPLEADO ELIMINADO EXITOSAMENTE");

      window.location.reload();
    },
  },
};
</script>
