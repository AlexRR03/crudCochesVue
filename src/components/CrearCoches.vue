<template>
    <div>
        <h1>Crear Coches</h1>
        <form v-on:submit.prevent="insertarCoche()">
            <div class="form-group">
                <label>Id</label>
                <input type="number" class="form-control" v-model="coche.id">
            </div>
            <div class="form-group">
                <label>Marca</label>
                <input type="text" class="form-control" v-model="coche.marca">
            </div>
            <div class="form-group">
                <label>Modelo</label>
                <input type="text" class="form-control" v-model="coche.modelo">
            </div>
            <div class="form-group">
                <label>Conductor</label>
                <input type="text" class="form-control" v-model="coche.conductor">
            </div>
            <div class="form-group">
                <label>Imagen</label>
                <input type="text" class="form-control" v-model="coche.imagen">   
            </div>
            <button type="submit" class="btn btn-primary">Insertar</button>
        </form>
    </div>
</template>

<script>
import ServiceCoches from '@/services/ServiceCoches'
const service = new ServiceCoches()
export default {
    name:"CrearCoches",
    data(){
        return{
            coche:{
                id:0,
                marca:"",
                modelo:"",
                conductor:"",
                imagen:""
            }
        }
    },
    methods:{
        insertarCoche(){
            service.insertCoche(this.coche).then(()=>{
                this.$router.push("/")
            })
        }
    }
}
</script>

<style>

</style>