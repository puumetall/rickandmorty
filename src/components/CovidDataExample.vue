<template>
    <div>
        <input type="text" class="input mb-3" v-model="search">
        <div class="columns is-multiline">
            <div class="column is-one-fifth" v-for="country in filteredCountries" :key="country.ID">
                <covid-card :country="country"></covid-card>
            </div>
        </div>
    </div>
</template>

<script>
import CovidCard from './CovidCard.vue'
const axios= require('axios');
export default {
    components: { CovidCard },
    created(){
        axios.get('https://api.covid19api.com/summary').then(response => {
            console.log(response);
            this.countries = response.data.Countries;
        });
    },
    data(){
        return {
            countries: [],
            search:''
        }
    },
    computed: {
        filteredCountries(){
            return this.countries.filter(country => {
               let partialName = country.Country.substr(0,this.search.length);
               return partialName.toLowerCase() == this.search.toLowerCase();
            });
        }
    }
}
</script>

<style>

</style
CovidCard>