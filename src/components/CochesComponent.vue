<template>
    <div>
        <h1>Lista Coches</h1>
        <table class="table table-bordered" v-if="status==true">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="coche in coches" :key="coche">
                    <td>{{coche.idCoche}}</td>
                    <td>{{coche.marca}}</td>
                    <td>{{coche.modelo}}</td>
                    <td>{{coche.conductor}}</td>
                    <td><img :src="coche.imagen" alt=""></td>
                    <td>
                        <router-link :to="'/details/' + coche.idCoche + '/' + encodeURIComponent(coche.marca) + '/' + encodeURIComponent(coche.modelo) + '/' + encodeURIComponent(coche.conductor) + '/' + encodeURIComponent(coche.imagen)">
                            <button class="btn btn-info">Detalles</button>
                        </router-link>
                    </td>
                     <td>
                        <router-link :to="'/update/' + coche.idCoche">
                            <button class="btn btn-warning">Modificar</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <img src="../assets/images/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
import ServiceCoches from '../services/ServiceCoches'
const services = new ServiceCoches()
export default {
    name:"CochesComponent",
    data(){
        return{
            coches:[],
            status:false
        }
    },
    mounted(){
        services.getCoches().then(result=>{
            this.status = true
            this.coches = result
        })
    }
}
</script>

<style>
    img{
        height: 150px;
        width: 150px;
    }
</style>