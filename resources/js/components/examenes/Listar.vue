<template>
    <div class="container-fluid">
        <h1>Listando examen </h1>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            sub: 'js textogw'
        }
    },
    mounted(){ // se ejecuta cuando se carga el componente 
        console.log('Listar component loaded')
        document.body.style.background = 'white';
    },
}
</script>
<style>

    
</style>