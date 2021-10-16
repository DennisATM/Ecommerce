<template>
  <div>
    <Navbar />
    <div class="row w-100">
      <div class="col text-center">
        <br /><br /><br />
        <h2>Carrito de Compras</h2>
        <hr />
      </div>
    </div>
    <div class="row w-100 m-auto">
      <div class="col">
        <table class="table table-sm table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(items,index) of cart" :key="index">
              <td data-titulo="Id" scope="col">{{ index+1  }}</td>
              <td data-titulo="Imagen" scope="col"><img :src="items.thumbnailUrl" alt="" /></td>
              <td data-titulo="Titulo" scope="col">{{ items.title }}</td>
              <td data-titulo="Cantidad" scope="col" class="justify-contend-around">
                <button class="btn btn-info btn-sm mr-3" @click="increment(items.id)">
                  +
                </button>

                {{ items.quantity }}

                <button
                  class="btn btn-danger btn-sm ml-3"
                  @click="decrement(items.id)"
                >
                  -
                </button>
              </td>
              <td data-titulo="Subtotal" scope="col">
                $ <span>{{ items.price * items.quantity }}</span>
              </td>
              <td data-titulo="Acciones" scope="col">
                  <button class="btn btn-danger mr-2" @click="remove(items.id)">
                              X
                  </button>
              </td>
            </tr>
          </tbody>
          </table>
            <Footer/>    
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue"
export default {
  components: {
    Footer,
    Navbar,
  },
  data() {
    return {
      cont:0,
      cart: [],
    };
  },
  created() {
    if (JSON.parse(localStorage.getItem("productos"))) {
      this.cart = JSON.parse(localStorage.getItem("productos"));
    } else {
      this.cart = [];
    }
    console.log(this.cart);
  },
  methods:{
      increment(id){
            for (let index=0; index < this.cart.length;index++){
                if (this.cart[index].id==id){
                    this.cart[index].quantity++
                    localStorage.setItem('productos',JSON.stringify(this.cart))
                }
            }
        },
        decrement(id){
            for (let index=0; index < this.cart.length; index++){
                if (this.cart[index].id==id){
                    this.cart[index].quantity--
                    if(this.cart[index].quantity==0){
                         this.remove(id)
                    }
                    localStorage.setItem('productos',JSON.stringify(this.cart))
                }
            }
        },
        remove(id){
            for (let index=0; index < this.cart.length; index++){
                if (this.cart[index].id==id){
                    this.cart.splice(index,1)
                    localStorage.setItem('productos',JSON.stringify(this.cart))
                }
                if (this.cart.length==0){
                    localStorage.clear()
                    // this.$router.push('/')
                    // location.reload(true)
                }

            }
        },
  }
};
</script>

<style scoped>
    img{
        width: 40px;
        height: 40px;
    }
    main{
        padding: 1em 2em
    }

    @media (max-width: 30em){
        table{
            
            font-size: .90em;
        }
        table tr{
            display:flex;
            flex-direction: column;
            margin-bottom: 1em;
        }
        table td[data-titulo]{
            display: flex;
        }
        table td[data-titulo]::before{
            content: attr(data-titulo);
            width: 120px;
            color:silver;
            font-weight: bold;
            
        }
        table thead{
            display:none
        }
    }
</style>