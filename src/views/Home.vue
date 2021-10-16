<template>
  <div>
    <Navbar />
    <carousel />
    <div class="row justify-content-center mw-100">
        <div class="col col-sm-12 col-md-3">
        
        </div>
    </div>
      <div class="row justify-content-around">
        <div class="col">
          <Card />
        </div>
      </div>
    </div>
  
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Carousel from '../components/Carousel.vue'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel,
    Card,

  },

  
}
</script>