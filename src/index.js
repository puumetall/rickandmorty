let Vue = require('vue/dist/vue.common.dev');
require('bulma');
import Router from 'vue-router';
Vue.use(Router);

import App from './components/App.vue';
Vue.component('app', App);

import CovidDataExample from './components/CovidDataExample.vue';

import ApiExample from './components/ApiExample.vue';
import ClickerExample from './components/ClickerExample.vue';
import InfiniteScrollExample from './components/InfiniteScrollExample.vue';
import ModalExample from './components/ModalExample.vue';
import RickAndMortyExample from './components/RickAndMortyExample.vue';
import ToDoExample from './components/ToDoExample.vue';
let router = new Router({
    routes: [
        {path:'/', component: CovidDataExample},
        {path:'/api', component: ApiExample},
        {path:'/clicker', component: ClickerExample},
        {path:'/scroll', component: InfiniteScrollExample},
        {path:'/modal', component: ModalExample},
        {path:'/rickandmorty', component: RickAndMortyExample},
        {path:'/todo', component: ToDoExample}
    ]
})

new Vue({
    el: '#app',
    router    
});
