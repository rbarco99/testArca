<template>
    <div class="container container-form">
        <div class="form-examenes">
            <h2 class="mb-3 text-center">Editar examen</h2>
            <form  @submit.prevent="actualizarExamen">
                <div class="mb-3" >
                    <label for="titulo-examen" class="form-label">Titulo del examen</label>
                    <input v-model="examen.titulo" type="text" class="form-control" id="titulo-examen"> 
                </div>
                <div class="mb-3">
                    <label for="descripcion" class="form-label">Descripción</label>
                    <textarea v-model="examen.descripcion" class="form-control" id="exampleInputPassword1" rows="2"></textarea>
                </div>
                <div class="mb-3">
                    <label for="tiempo-examen" class="form-label">Tiempo en minutos</label>
                    <input type="number" v-model="examen.tiempo" class="form-control" id="tiempo-examen"> 
                </div>
                <div class="mb-3">
                    <label for="intentos-examen" class="form-label">Intentos permitidos</label>
                    <input type="number" v-model="examen.intentos" class="form-control" id="intentos-examen"> 
                </div>
                <!--Seccion de preguntas-->
                <div>
                    <div v-for="(pregunta, index) in examen.preguntas" :key="index" class="p-3">
                        <hr>
                        <div class="row m-3">
                            <div class="col-md-6 col-lg-6">
                                <h4 class="header-pregunta"> Tipo de pregunta</h4>
                            </div>
                            <div class="col-md-6 col-lg-6 text-end">
                                <span class="text-end"><i>Pregunta {{index +1 }} </i></span>
                            </div>
                        </div>
                        <!--Seleccion de tipo de  pregunta-->
                        <div class="row">
                            <div class="col-md-5">
                                <div class="form-check">
                                <input class="form-check-input" value="multiple" v-model="pregunta.tipo" type="radio" v-bind:name="'tipo'+index" checked>
                                <label class="form-check-label" for="">Opción multiple</label>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-check">
                                <input class="form-check-input" value="verdadero" v-model="pregunta.tipo" type="radio" v-bind:name="'tipo'+index">
                                <label class="form-check-label" for="">Veradero / Falso</label>
                                </div> 
                            </div> 
                            <!--Eliminar pregunta-->
                            <div class="col text-end">
                                <button  type="button" @click="eliminarPregunta(index)" class=" ms-auto btn btn-outline-danger btn-sm fa-1x"><i class="fas fa-trash-alt"></i> </button>
                            </div>
                        </div>
                        
                        <!--Formulario para preguntas tipo Verdadero o falso-->
                        <div v-if="pregunta.tipo =='verdadero'" class="p-3">
                            <div class="row ">
                                <h6>Enunciado</h6>
                                <input v-model="pregunta.enunciado" type="text" class="form-control">  
                            </div>
                            <div class="row m-3">
                                <div class="form-check">
                                <input class="form-check-input" v-model="pregunta.verdadera" value="verdadero" type="radio" v-bind:name="'respuesta'+index">
                                <label class="form-check-label" for="">Veradero</label>
                                </div>   
                                <div class="form-check">
                                <input class="form-check-input" v-model="pregunta.verdadera" value="falso" type="radio" v-bind:name="'respuesta'+index">
                                <label class="form-check-label" for="">Falso</label>
                                </div>                                                                   
                            </div>
                        </div>
                        <!--Opcion multiple-->
                        <div  v-else class="p-3">
                            <div class="row ">
                                <h6>Enunciado</h6>
                                <input  v-model="pregunta.enunciado" type="text" class="form-control" >  
                            </div>   
                            
                            <div v-for="(opcion, index2) in pregunta.opciones" :key="index2">
                                <div class="row m-4"> 
                                    <div class="col-md-1 p-2">
                                        <input v-bind:name="'opcion'+index" v-model="opcion.correcta" class="form-check-input"  type="radio" >
                                    </div>  
                                    <div class="col">
                                        <input  v-model="opcion.respuesta" type="text" class="form-control" >                                                                    
                                    </div>    
                                </div>    
                            </div>
                            <div class="m-4 text-end">
                                <button  type="button" @click="agregarOpcion(index)" class="btn btn-outline-primary btn-sm"><i class="fas fa-plus-circle"></i> </button>
                                <button  type="button" @click="eliminarOpcion(index)" class="btn btn-outline-danger btn-sm"><i class="fas fa-minus-circle"></i> </button>
                            </div>
                        </div>
                    </div>
                </div>
                 <!--Agregar una nueva pregunta --> 
                <div class="row m-2">
                    <div class="col-md">
                    <button  type="button" @click="agregarPregunta" class="btn btn-outline-primary btn-sm">+ <span> Agregar pregunta</span> </button>
                    </div>
                </div>
                <br>
                <div class="text-end">
                    <button  type="submit" class="btn btn-primary">Actualizar examen</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            examen:{}
           }
    },
    mounted(){ // se ejecuta cuando se carga el componente 
        document.body.style.background = 'white';
        this.cargarExamen();
    },
    methods: {
        async cargarExamen(){
            await this.axios.get(`/api/exams/${this.$route.params.id}`).then(response=>{
                this.examen = response.data
                
                this.examen.preguntas = JSON.parse(this.examen.preguntas)
                console.log(this.examen)
                
            }).catch(error=>{
                console.log(error)
            })
        },
        agregarPregunta(){
            this.examen.preguntas.push({
                tipo:'multiple',
                opciones:[{
                    enunciado:'',
                    correcta: false
                    }]
            });
        },
        agregarOpcion(index){
            this.examen.preguntas[index].opciones.push({
                enunciado:'',
                correcta: false              
            })  
        },        
        eliminarOpcion(index){
            if (this.examen.preguntas[index].opciones.length > 1){
                this.examen.preguntas[index].opciones.pop();
            }
        },
        eliminarPregunta(index){
            this.examen.preguntas.splice(index,1)
        },
        async actualizarExamen(){ // Actualiza el examen enviando a la API 
            let prueba= this.examen
            prueba.preguntas = JSON.stringify(this.examen.preguntas)
            await this.axios.put(`/api/exams/${this.$route.params.id}`,prueba).then(response=>{
                this.$router.push({name:"home"})
            }).catch(error=>{
                console.log(error)
            })
        }, 
    }
}
</script>
<style>
.container-form{
    max-width: 800px;
    background-color: rgb(248 248 248);
    padding: 5% 3%;
    border-radius: 30px;
}
.header-pregunta{
    display:inline-block;
}
    
</style>