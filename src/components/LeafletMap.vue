<template>
    <div id="map"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
export default {
    props: ['lat', 'lng', 'zoom', 'geoJson'],
    mounted(){
        this.map = L.map('map').setView([this.lat, this.lng], this.zoom);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicHV1bWV0YWxsIiwiYSI6ImNrdzM3bnNtbTBzM3Yybm1veHlvbXk2NnAifQ.jf7i9VdMGoPlR0VZ6rFGug'
        }).addTo(this.map);
         L.geoJson(this.geoJson, {style: this.style}).addTo(this.map);
    },
    data(){
        return {
            map: null
        }
    },
    methods: {
        getColors(d){
            return d > 10000000 ? '#800026' :
                    d > 1000000  ? '#BD0026' :
                    d > 100000  ? '#E31A1C' :
                    d > 10000  ? '#FC4E2A' :
                    d > 1000   ? '#FD8D3C' :
                    d > 100   ? '#FEB24C' :
                    d > 10   ? '#FED976' :
                    d == -1   ? '#000' :
                                '#FFEDA0';
        },
        style(feature) {
            return {
                fillColor: this.getColors(feature.properties.confirmed),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            };
        }

    },
   watch: {
        lat(lat){
            this.map.flyTo([lat, this.lng], this.zoom);
        },
        lng(lng){
            this.map.flyTo([this.lat, lng], this.zoom);
        },
        zoom(zoom){
            this.map.flyTo([this.lat, this.lng], zoom);
        },
        geoJson(geoJson){
            L.geoJson(this.geoJson, {style: this.style}).addTo(this.map);
        }
    }
}
</script>

<style>
#map {
    height: 780px;
}
</style>