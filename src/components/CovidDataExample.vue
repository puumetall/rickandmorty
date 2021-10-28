<template>
    <div>
        <div class="columns is-multiline">
            <div class="column is-one-fifth">
                <covid-card></covid-card>
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
        axios.get('').then(response => {
            console.log(response);
        });
    }
}
</script>

<style>

</style
CovidCard>