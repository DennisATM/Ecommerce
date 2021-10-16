<template>
  <div>
    <div v-for="producto in products" :key="producto.id">
      <div class="col-12 col-sm-4 col-md-3 col-lg-3 mt-3 mb-3 align">
        <div class="card shadow">
          <img
            :src="producto.thumbnailUrl"
            :alt="`${producto.title}`"
            class="img-card-top img_card m-auto pt-3"
          />
          <div class="card-body">
            <h5 class="card-title">{{ producto.title }}</h5>
            <p class="card-text">
              $<span>{{ producto.price }}</span>
            </p>
            <button
              class="btn btn-success"
              v-if="!producto.addCart"
              :disabled="producto.addCart"
              @click="
                (producto.addCart = true,producto.quantity=1),
                  addToCart(JSON.parse(JSON.stringify(producto)))
              "
              block
              href="#"
            >
              Agregar al carrito
            </button>
            <button
              class="btn btn-success"
              v-if="producto.addCart==true"
              :disabled="producto.addCart"
              block
              href="#"
            >
              Agregado al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
 computed:{
        ...mapState(['products']),
    },
  methods: {
    addToCart(product) {
      let cart = [];
      if (JSON.parse(localStorage.getItem("productos"))) {
        cart = JSON.parse(localStorage.getItem("productos"));
      } else {
        cart = [];
      }
      cart.push(product);
      console.log(cart)
      localStorage.setItem("productos", JSON.stringify(cart));
    },
  },
  created() {   
    let cart = [];
    if (JSON.parse(localStorage.getItem("productos"))) {
      cart = JSON.parse(localStorage.getItem("productos"));
    } else {
      cart = [];
    }
    console.log(cart)
    console.log(this.products)
    for (let index = 0; index < cart.length; index++) {
      for (let index2 = 0; index2 < this.products.length; index2++) {
        if (cart[index].id == this.products[index2].id) {
          this.$store.state.products[index2].addCart = true;
        }
      }
    }
    console.log(this.products)
  },
};
</script>

<style scoped>
.img_card {
  width: 180px;
  height: 160px;
}
.align {
  float: left;
}
.card{
  border-radius: 20px;
}
</style>