<template>
    <main>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="https://arcatech.com.co/assets/img/arcatech.svg" alt='Logo Arca' width="200" height="24">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="nbar collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link exact-active-class="active" to='/comics' class="nav-link active" aria-current="page">Comics</router-link>
                </li>
                <li class="nav-item">
                <router-link exact-active-class="active" to='/' class="nav-link active" aria-current="page">Examenes</router-link>
                </li>

            </ul>

            </div>
        </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>   
</template>

<script>
    export default {
        data(){
            return {
                sub: 'js textogw'
            }
        },
        mounted(){ // se ejecuta cuando se carga el componente 
            console.log('app loaded')
        }         
    }
</script>
<style>
body{
    background: white;
}
    .nbar{
        margin-right: 1rem;
    }
</style>