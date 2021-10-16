<template>
  <div class="container">
    <navadmin />
    <br>
    <h3 class="text-success mt-5">Listado de Pedidos</h3>
    <div class="row justify-content-around">
      <div class="col">
        <table class="table table-bordered mt-2 bg-secondary">
          <thead class="bg-warning">
            <tr>
              <th scope="col">Fecha - Hora</th>
              <th scope="col">Cliente</th>
              <th scope="col">Whatsapp</th>
              <th scope="col">Direccion</th>
              <th scope="col">Total a pagar</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-white" v-for="(sales, index) in items" :key="index">
              <td data-titulo="Fecha" scope="col">{{ sales.date }}</td>
              <td data-titulo="Cliente" scope="col">{{ sales.name }}</td>
              <td data-titulo="Whatsapp" scope="col">{{ sales.ws }}</td>
              <td data-titulo="Direccion" scope="col">{{ sales.direction }}</td>
              <td data-titulo="Total" scope="col">$ {{ sales.total }}</td>
              <td scope="col" class="justify-contend-around">
              <button class="btn btn-dark btn-sm" data-toggle="modal" @click="detailSales(index)" data-target="#exampleModal"><img class="ico" src="../../public/images/icon1.png" alt=""></button>
                <div class="modal fade text-info" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Detalle de pedido
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <h5>Productos:</h5>
                        <hr />
                        <ul v-for="(product, index) of detail[0]" :key="index">
                          <li class="font-weight-bold">{{ product.title }}</li>
                          <li>Cantidad: {{ product.quantity }}</li>
                          <li>Precio: {{ product.price }}</li>
                          <li>Total: {{ product.price * product.quantity }}</li>
                          <hr />
                        </ul>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn btn-dark btn-sm ml-3" @click="printSales(sales.ws,sales.name)"><img class="ico" src="../../public/images/icon3.png" alt=""></button>
                <button class="btn btn-dark btn-sm ml-3" @click="deleteSales(sales.id)"><img class="ico" src="../../public/images/icon2.png" alt=""></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import firebase from "firebase/app";
import "firebase/firestore";
import Navadmin from '../components/Navadmin.vue';
export default {
  components: { Navadmin },
  
  data() {
    return {
      items: [],
      detail:[],
    };
  },
  created() {
    this.listSales();
  },
  methods: {
    listSales() {
      try {
        this.items = [];
        var db = firebase.firestore();
        db.collection("products")
          .get()
          .then((query) => {
            query.forEach((doc) => {
              //console.log(doc.id);
              this.items.push({
                id:doc.id,
                date:doc.data().date,
                name:doc.data().name,
                direction:doc.data().direction,
                ws:doc.data().ws,
                products:doc.data().products,
                total:doc.data().total,
              });
            });
            console.log(this.items);
          });
      } catch (error) {
        console.log(error);
      }
    },
    detailSales(index){
      this.detail=[]
      this.detail.push(this.items[index].products)
      console.log(this.detail)
    },
    printSales(ws,name){
      var url = "https://api.whatsapp.com/send?phone=+56"+ws+"&text=Hola!%20"+name+".%20Gracias%20por%20comprar%20en%20Verdulivery.%20Su%20pedido%20esta%20siendo%20atendido"
      window.open(url)
    },
    deleteSales(id){
            var db = firebase.firestore();
            db.collection('products').doc(id).delete()
            .then((data)=>{
                console.log(data);
            })
            .catch((error)=>{
                console.log(error);
            })
             this.listSales();
        }
  },
};
</script>

<style scoped>
  .ico{
    width:30px;
    height: 30px;
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