<template>
<div>
    <button class="button is-primary" @click="goToHome">Go to home</button>
    <button class="button is-danger" @click="goToSchool">Go to school</button>
    <google-maps :lat="this.lat" :lng="this.lng" :zoom="this.zoom"></google-maps>
</div>
</template>

<script>
import GoogleMaps from './GoogleMaps.vue'
export default {
    components: { GoogleMaps },
    data(){
        return {
            lat:59.4267818,
            lng:24.7435557,
            zoom:18.25
        }
    },
    methods: {
        goToHome(){
            this.lat=59.4116718,
            this.lng=24.704622,
            this.zoom=18.25
        },
        goToSchool(){
            this.lat=59.4268366,
            this.lng=24.7430622,
            this.zoom=18.25
        }
    }
}
</script>

<style>

</style>