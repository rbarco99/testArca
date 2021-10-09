<template>
    <div class="container-fluid">
        <img class="logo" src="/images/logoRick.png" alt="Rick and Morty">
        <div class="cards-container"> 
            <form @submit.prevent="filterCharacters" id="characters-form">
            <div class="row">
                <div class="col-md-4 col-lg-4">
                    <select id="gender" v-model="filter.gender" class="form-select form-select-sm" aria-label="Default select example">
                        <option value="" selected>Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                    </select>
                </div>
                <div class="col-md-4 col-lg-4">
                    <select id="status" v-model="filter.status" class="form-select form-select-sm" aria-label="Default select example">
                        <option value="" selected>Status</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">unknown</option>
                    </select>        
                </div>
                <div class="col-md-2 col-lg-1 col-sm-6">
                    <button type="submit" class="btn btn-info btn-sm">Filter</button>
                </div>    
                <div class="col-md-2 col-lg-1 col-sm-6">
                    <button class="btn btn-info btn-sm" v-on:click="getCharacters">Reset</button>
                </div> 
            </div>
            </form>           
        </div>
        <!-- Api content-->
        <div class="api-content">
            <div class="content-characters" v-for="character in characters" :key="character.id">
                <div class="character">
                    <img :src="character.image" alt="">
                    <div class="info-character">
                        <h2 class="name"> {{ character.name}}</h2>
                            <div class="info">
                            <h4>  {{ character.species}}</h4>
                            <h4> {{ character.status}}</h4>
                            <h4> {{ character.gender}}</h4>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cards-container">
            <button v-on:click="newPage(past)" class="btn btn-info btn-sm">Past</button> 
            <button v-on:click="newPage(next)" class="btn btn-info btn-sm">Next</button>
        </div>
        <!-- Api content-->       
    </div>
</template>

<script>
export default {
    data(){
        return {
            sub: 'js textogw',
            base_url : 'https://rickandmortyapi.com/api/character/',
            characters:[],
            next:[],
            past:[],
            filter:{
                gender:"",
                status:""
            }
        }
    },
    mounted(){ // se ejecuta cuando se carga el componente 
        console.log('comics component loaded')
        document.body.style.background = '#081119';
        document.body.style.backgroundImage = "url('/images/rick.png')";
        this.getCharacters();
    },
    methods: {
        getCharacters(){            // 
            console.log('GetChar');
            axios
                .get(this.base_url)
                    .then( response =>{
                        console.log(response.data)
                        this.characters = response.data.results
                        this.next = response.data.info.next
                        this.past= response.data.info.prev
                        this.filter.gender=""
                        this.filter.status=""
                    })
                    .catch( e => console.log(e))
    
        },
        filterCharacters(){
            console.log('Filters');
            axios
                .get(this.base_url+'?gender='+this.filter.gender+'&status='+this.filter.status)
                    .then( response =>{
                        console.log(response.data)
                        this.characters = response.data.results
                        this.next = response.data.info.next
                        this.past= response.data.info.prev
                    })
                    .catch( e => console.log(e))        
        },
        newPage(url){           // 
            console.log('newPage');
            axios
                .get(url)
                    .then( response =>{
                        console.log(response.data.results)
                        this.characters = response.data.results
                        this.next = response.data.info.next
                        this.past= response.data.info.prev
                        window.scrollTo(0,0);
                    })
                    .catch( e => console.log(e))
    
        },        

    }
}
</script>

<style>
body{
    background: #081119;
    background-image: url('/images/rick.png');
    
}
.logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  
}
.cards-container{
    text-align: center;
    margin: 2% auto 0 auto;
    max-width: 50%;
}
.api-content{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 30px 30px;
  width: 80%;
  margin: 2% auto;
}
.content-characters{
  background: #fcfbfbe0;
  padding: 1rem;
  border-radius: 1rem;
}
.content-characters:hover {
    background: #afd8e2;
}
.character {
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-character{
  display: table-column;
  justify-content: center;
  margin: 0 auto;
}
img {
  height: 50%;
  width: 50%;
  border-radius: 0.5rem;
}

h2.name {
  font-weight: bold;
  font-size: 1.5rem;
  font-family: 'Shadows Into Light', cursive;
  padding: 1rem;
  background: #629dc4ec;
  border-radius: 10px 100px / 120px;
  margin: 1rem;
}

.info h4 {
  margin: 1rem;
  color: #050505;
  font-weight: inherit;
  font-family: 'Shadows Into Light', cursive;
  padding: 0.2rem 1rem;
}
@media screen and (max-width: 918px) {
.api-content {
  grid-template-columns: 1fr 1fr;
}
.character {
  display: flex;
  align-items: center;
}
h2.name{
  font-size: 1rem;
}
}
@media screen and (max-width: 540px) {
.api-content {
  width: 90%;
  grid-template-columns: 1fr;
}
.character {
  display: flex;
  align-items: center;
}
}
</style>