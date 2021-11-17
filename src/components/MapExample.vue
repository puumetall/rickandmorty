<template>
<div>
    <button class="button is-primary" @click="goToHome">Go to home</button>
    <button class="button is-danger" @click="goToSchool">Go to school</button>
    <!-- <google-maps :lat="this.lat" :lng="this.lng" :zoom="this.zoom"></google-maps> -->
    <leaflet-map :lat="lat" :lng="lng" :zoom="zoom" :geoJson="covidGeoJson"></leaflet-map>
</div>
</template>

<script>
import GoogleMaps from './GoogleMaps.vue';
import LeafletMap from './LeafletMap.vue';
import axios from 'axios';
export default {
    components: { GoogleMaps, LeafletMap },
    created(){
        let url = 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'
        axios.get(url).then(response =>{
            console.log(response.data);
            this.geoJson = response.data
        });
        axios.get('https://api.covid19api.com/summary').then(response => {
            console.log(response);
            this.countries = response.data.Countries;
        })
    },
    data(){
        return {
            lat:59.4267818,
            lng:24.7435557,
            zoom:18.25,
            geoJson: null,
            countries: null
        }
    },
    methods: {
        goToHome(){
            this.lat=59.4116718,
            this.lng=24.704622,
            this.zoom=17
        },
        goToSchool(){
            this.lat=59.4268366,
            this.lng=24.7430622,
            this.zoom=17
        }
    },
    computed: {
        covidGeoJson() {
            if(this.geoJson && this.countries) {
                let covidGeoJson = {...this.geoJson};
                covidGeoJson.features = this.geoJson.features.map(feature => {
                    let country = this.countries.find(country => country.Country == feature.properties.name);
                    feature.properties.confirmed = 0;
                    feature.properties.deaths = 0;
                    if(country){
                        feature.properties.confirmed = country.TotalConfirmed;
                        feature.properties.deaths = country.TotalDeaths;
                    }
                    return feature;
                });
                return covidGeoJson;
            }
            return null;
        }
    }
}
</script>

<style>

</style>