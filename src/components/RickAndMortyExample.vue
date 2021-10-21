<template>
<div>
    <button class="button is-dark" @click="prev" :disabled="!info.prev">Prev</button>
    <button class="button is-dark" @click="next" :disabled="!info.next">Next</button>
    <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="result in results" :key="result.id">
            <character-card :character="result"></character-card>
        </div>
    </div>
</div>
</template>

<script>
import CharacterCard from './CharacterCard.vue';
const axios = require("axios")
export default {
  components: { CharacterCard },
    created(){
        axios.get("https://rickandmortyapi.com/api/character").then(response => {
            console.log(response.data);
            this.info = response.data.info;
            this.results = response.data.results;
        });
    },
    data(){
        return {
            info: {
                next: null,
                prev: null,
                pages: 0,
                count: 0 
            },
            results: []
        }
    },
    methods: {
        prev(){
            axios.get(this.info.prev).then(response => {
            console.log(response.data);
            this.info = response.data.info;
            this.results = response.data.results;
            });
        },
        next(){
            axios.get(this.info.next).then(response => {
            console.log(response.data);
            this.info = response.data.info;
            this.results = response.data.results;
            }); 
        }
    }
}
</script>

<style>

</style>