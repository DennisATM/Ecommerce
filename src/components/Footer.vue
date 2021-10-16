<template>
  <div class="container">
    <div
      class="row text-danger m-auto justify-content-center"
      v-if="cart.length == 0"
    >
      <h2>Carrito vacío - comience a comprar!</h2>
    </div>
    <div v-else class="row justify-content-around">
      <h3>Total productos: {{ totalQuantity }}</h3>
      <h3>
        Total a Pagar: $ <span>{{ totalPrice }}</span>
      </h3>

      <button class="btn btn-danger btn-sm" @click="clean()" id="vaciar-carrito">
        Vaciar Carrito
      </button>

      <button
        class="btn btn-success btn-sm"
        data-toggle="modal"
        data-target="#exampleModal"
        @click="buy()"
      >
        Generar Pedido
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Datos de Cliente
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="alert alert-success" role="alert">
              Por favor ingrese los datos para la entrega y verifique su pedido.
            </div>
              <div class="modal-body" >
                <h5>Ingresado:{{ticket.date}}</h5>
                <form>
                    <div class="form-group">
                        <input class="form-control col-5" v-model="ticket.name" type="text" placeholder="Nombre" /><br />
                        <input class="form-control col-9" v-model="ticket.direction" type="text" placeholder="Direccion de entrega"/><br />
                        <input class="form-control col-5" v-model="ticket.ws" type="number" placeholder="N° Whatsapp" />
                    </div>
                </form>
                <hr/>
                <h5> Productos:</h5>
                
                <hr/>
                <ul v-for="productFinal in ticket.products" :key="productFinal.id">
                    <li class="font-weight-bold"> {{ productFinal.title }}</li>
                    <li>Cantidad: {{ productFinal.quantity }}</li>
                    <li>Precio: {{ productFinal.price }}</li>
                    <li>Total: {{ productFinal.price * productFinal.quantity }}</li>
                    <hr />
                </ul>
                <h4 class="my-4 text-center">Total a pagar: ${{ ticket.total }}</h4>
              </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-primary" @click="sendData()">
                Enviar datos y Terminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
export default {
  
  data() {
    return {
      cart:[],
      ticket: {
        products: null,
        totalPrice: 0,
        totalQuantity: 0,
        name:"",
        direction:"",
        ws:"",
        date:""
      },
    };
  },
  methods: {
    clean(){
            this.cart=[];
            for (const key in this.cart){
                this.cart[key].cart=false;
                this.cart[key].quantity=1;
            }
            localStorage.setItem('productos',JSON.stringify(this.cart))
            location.reload(true)
        },
    buy() {
      this.ticket = {
        products: this.cart,
        total: this.totalPrice,
      };
      let fecha=new Date();
      this.ticket.date=(fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+"-"+fecha.getHours()+":"+fecha.getMinutes())
      console.log(this.ticket.date)
    },
    sendData(){
      if (this.ticket.name==undefined || this.ticket.direction==undefined || this.ticket.ws==undefined){
        alert("Debe ingresar los datos correctamente")
      }else{
        var db=firebase.firestore()
        db.collection('products').add(this.ticket)
       .then((data)=>{                
                console.log(data);
                this.clean()
        })
        .catch((error)=>{
                console.log(error);
        })
      }
    },
  },
  computed: {
    totalPrice() {
      let t = 0;
      for (let index = 0; index < this.cart.length; index++) {
        t += this.cart[index].price * this.cart[index].quantity;
      }
      return t;
    },
    totalQuantity() {
      let t = 0;
      for (let index = 0; index < this.cart.length; index++) {
        t += this.cart[index].quantity;
      }
      return t;
    },
  },
  created(){
    if (JSON.parse(localStorage.getItem("productos"))) {
      this.cart = JSON.parse(localStorage.getItem("productos"));
    } else {
      this.cart = [];
    }
  }
};
</script>