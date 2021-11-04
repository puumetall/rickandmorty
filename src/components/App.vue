<template>

<div class="has-background-warning-light">
  <div class="tabs is-centered is-large">
    <ul>
      <li v-for="(item,index) in items"
      :key="index"
      :class="{'is-active': index === active}"
      @click="active = index">
        <a class="has-text-black-bis" :href="'/#' + item.path">{{item.title}}</a>
      </li>
    </ul>
  </div>
  <section class="section ">
    <router-view></router-view>
  </section>
</div>

</template>

<script>
import ApiExample from './ApiExample.vue'
import ClickerExample from './ClickerExample.vue'
import CovidDataExample from './CovidDataExample.vue'
import InfiniteScrollExample from './InfiniteScrollExample.vue'
import ModalExample from './ModalExample.vue'
import RickAndMortyExample from './RickAndMortyExample.vue'
import ToDoExample from './ToDoExample.vue'


export default {
  components: { 
    ModalExample, 
    ToDoExample, 
    ClickerExample, 
    ApiExample, 
    RickAndMortyExample, 
    InfiniteScrollExample, 
    CovidDataExample
    },
    data(){
      return {
        active: 0,
        items: [
          {title:'Covid Data Example', path:'/'},
          {title:'Infinite Scroll Example', path:'/scroll'},
          {title:'Rick and Morty Example', path:'/rickandmorty'},
          {title:'Api Example', path:'/api'},
          {title:'Clicker Example', path:'/clicker'},
          {title:'Modal Example', path:'/modal'},
          {title:'ToDo Example', path:'/todo'},
        ]
      }
    }
}
</script>

<style>

</style>