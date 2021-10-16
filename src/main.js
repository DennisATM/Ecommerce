import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAQvH0HgEdieRIQPy9DadZFLopr4bMobpo",
  authDomain: "ecommerce-b0021.firebaseapp.com",
  projectId: "ecommerce-b0021",
  storageBucket: "ecommerce-b0021.appspot.com",
  messagingSenderId: "616062027927",
  appId: "1:616062027927:web:98042b0b6ee107e84841d2",
  measurementId: "G-HJRF4G1F58"
};


firebase.initializeApp(firebaseConfig);
let app;
firebase.auth().onAuthStateChanged(user =>{
  console.log(user)
  if (!app){
    app=new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')  
  }
});