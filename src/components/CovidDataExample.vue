<template>
    <div>
        <div class="columns is-multiline">
            <div class="column is-one-fifth" v-for="country in countries" :key="country.ID">
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
            countries: []
        }
    }
}
</script>

<style>

</style
CovidCard>