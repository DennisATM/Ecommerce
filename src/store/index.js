import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {
        "price": 800,
        "id": 1,
        "title": "Manzana x Kg",
        "thumbnailUrl": "./images/products/product1.jpg",
        "category": "Frutas",
        "addCart":false
      },
      {
        "price": 500,
        "id": 2,
        "title": "Naranja x Kg",
        "thumbnailUrl": "./images/products/product2.jpg",
        "category": "Frutas",
        "addCart":false
      },
      {
        "price": 1000,
        "id": 3,
        "title": "Agua 1/2 Lt.",
        "thumbnailUrl": "./images/products/product3.jpg",
        "category": "Bebidas",
        "addCart":false
      },
      {
        "price": 2000,
        "id": 4,
        "title": "Sandía",
        "thumbnailUrl": "./images/products/product4.jpg",
        "category": "Frutas",
        "addCart":false
      },
      {
        "price": 3000,
        "id": 5,
        "title": "Mango x Kg",
        "thumbnailUrl": "./images/products/product5.jpg",
        "category": "Frutas",
        "addCart":false
      },
      {
        "price": 1000,
        "id": 6,
        "title": "Plátano x Kg.",
        "thumbnailUrl": "./images/products/product6.jpg",
        "category": "Frutas",
        "addCart":false
      },
      {
        "price": 500,
        "id": 7,
        "title": "Papa x Kg.",
        "thumbnailUrl": "./images/products/product7.jpg",
        "category": "Verduras",
        "addCart":false
      },
      {
        "price": 200,
        "id": 8,
        "title": "Cebolla",
        "thumbnailUrl": "./images/products/product8.jpg",
        "category": "Verduras",
        "addCart":false
      },
      {
        "price": 800,
        "id": 9,
        "title": "Tomate x Kg.",
        "thumbnailUrl": "./images/products/product9.jpg",
        "category": "Verduras",
        "addCart":false
      },
      {
        "price": 600,
        "id": 10,
        "title": "Cilantro",
        "thumbnailUrl": "./images/products/product10.jpg",
        "category": "Verduras",
        "addCart":false
      },
      {
        "price": 100,
        "id": 11,
        "title": "Aji",
        "thumbnailUrl": "./images/products/product11.jpg",
        "category": "Verduras",
        "addCart":false
      },
      {
        "price": 3000,
        "id": 12,
        "title": "Huevos",
        "thumbnailUrl": "./images/products/product12.jpg",
        "category": "Abarrotes",
        "addCart":false
      }
    ],
    productsOnCart:[],
  },
  mutations: {
    setProducts(state,payload){
      state.products=payload;
    }
  },
  actions: {
  },
  

  modules: {
  }
})
