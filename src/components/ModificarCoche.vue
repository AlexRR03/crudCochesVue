<template>
    <div>
        <h1>Modificar Coche</h1>
        <div v-if="departamento">
        <form v-on:submit.prevent="updateDepartamento()">
            <div class="form-group">
                <input type="hidden" class="form-control" v-model="coche.id">
            </div>
            <div class="form-group">
                <label>Nombre</label>
                <input type="text" class="form-control" v-model="coche.marca">
            </div>
            <div class="form-group">
                <label>localidad</label>
                <input type="text" class="form-control" v-model="coche.modelo">
            </div>
             <div class="form-group">
                <label>localidad</label>
                <input type="text" class="form-control" v-model="coche.conductor">
            </div>
             <div class="form-group">
                <label>localidad</label>
                <input type="text" class="form-control" v-model="coche.img">
            </div>
            <button type="submit" class="btn btn-warning">Modificar</button>
        </form>
    </div>
    <div v-else>
        <img src="../assets/images/loading.gif" alt="">
    </div>
    </div>
</template>

<script>
import ServiceCoches from '@/services/ServiceCoches'
const service = new ServiceCoches()
export default {
    name:"ModificarCoche",
    data(){
        return{
            coche:null
        }
    },
    methods:{
        modCoche(){
            service.updateCoche(this.coche)
        }
    }
}
</script>

<style>

</style>