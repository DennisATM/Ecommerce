import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
    meta:{
      requiereLogin:true
    }
  },
  {
    path:'/Login',
    name:'Login',
    component: Login
  },
  {
    path:'/Cart',
    name:'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  const requiereLogin=to.matched.some(ruta => ruta.meta.requiereLogin);
  const logueado= firebase.auth().currentUser;
  if (requiereLogin && !logueado){
    next('/Login'); // voy a la ruta deseada
  }else{
    next();//Voy al Login
  }
})

export default router
