<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8">
                <h1>Modulo de examenes </h1>
            </div>
            <div class="col-md-2">
                 <router-link exact-active-class="active" :to='{name:"crearExamen"}' class="btn btn-info btn-examen" aria-current="page">Crear examen</router-link>
            </div>            
        </div>
        <div class="container container-examenes">
            <div class="text-center" v-if="cantidadExamenes == 0">
                <i class="fas fa-exclamation-triangle fa-4x"></i>
               <h4>No hay examenes para mostar, prueba creando uno nuevo</h4>
            </div>
            <div class="row ">
                <div v-for="(exam, index) in exams" :key="index" class="col-lg-4 col-md-6 mb-4 ">
                    <div >
                        <div class="card" style="width: 18rem;">
                        <img src="https://www.uss.cl/wp-content/uploads/2020/01/Estr%C3%A9s-post-PSU-consecuencias-y-recomendaciones.jpg" class="card-img-top" alt="efe">
                        <div class="card-body">
                            <h5 class="card-title">{{exam.titulo}}</h5>    
                            <p class="card-text">{{exam.descripcion}}</p>
                            <div class="m-1">
                                <i class="fas fa-stopwatch m-2"></i><span>Tiempo: {{exam.tiempo}}</span>
                            </div>
                            <div class="m-1">
                                <i class="fas fa-book-reader m-2"></i><span>Cantidad de intentos: {{exam.intentos}}</span>
                            </div>
                            <div class="text-end">
                                <router-link :to='{name:"editarExamen",params:{id:exam.id}}' ><i class="fas fa-edit"></i></router-link>
                                <a  @click="borrarExamen(exam.id)" href="#"><i class="far fa-trash-alt"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
               
              



            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            exams:[],
            cantidadExamenes: 0
            
        }
    },
    mounted(){ // se ejecuta cuando se carga el componente 
        console.log('home component loaded')
        document.body.style.background = 'white';
        this.mostrarExamenes();
    },


    methods: {
        async mostrarExamenes(){
            await this.axios.get('/api/exams').then(response=>{
                this.exams = response.data
                this.cantidadExamenes = this.exams.length
                console.log(this.cantidadExamenes)
            }).catch(error=>{
                console.log(error)
            })
        },
        borrarExamen(id){
            let link = "/api/exams/"+id
            console.log(link)
            if(confirm("¿Desea eliminar el examen?")){
                this.axios.delete(link).then(response=>{
                    this.mostrarExamenes()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }        
    }
}

</script>
<style>

.container-examenes{
    background-color: rgb(248 248 248);
    padding: 5% 3%;
    border-radius: 15px;
    margin: 2% 0;

}

.btn-examen{
    margin-top: 0.8rem;
    color: white;
}
.fa-exclamation-triangle{
    color:rgb(111, 166, 202)
}
    
</style>