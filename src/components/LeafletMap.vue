<template>
    <div id="map"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
export default {
    props: ['lat', 'lng', 'zoom'],
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
    },
    data(){
        return {
            map: null
        }
    }
}
</script>

<style>
#map {
    height: 780px;
}
</style>