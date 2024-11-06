<template>
  <div>
    <h1>Detalles</h1>
    <ul class="list-group">
        <li class="list-group-item">
          Id: {{coche.id}}
        </li>
        <li class="list-group-item">
          Marca: {{coche.marca}}
        </li>
        <li class="list-group-item">
          Modelo: {{coche.modelo}}
        </li>
        <li class="list-group-item">
          Conductor: {{coche.conductor}}
        </li>
        <li class="list-group-item">
            <img :src="coche.imagen" alt="">
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"DetalleCoches",
    data(){
        return{
            coche:{
                id:this.$route.params.id,
                marca:this.$route.params.marca,
                modelo:this.$route.params.modelo,
                conductor:this.$route.params.conductor,
                imagen:this.$route.params.imagen
            }
        }
    }
}
</script>

<style>
    img{
        width: 125px;
        height: 150px;
    }
</style>