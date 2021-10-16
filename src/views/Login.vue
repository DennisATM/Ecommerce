<template>
  <div>
    <Navbar />
    <div class="row justify-content-center mw-100 m-0 mt-5">
      <div class="card mw-100 bg-info text-center">
        <img
          src="../../public/images/slogin.png"
          class="card-img-top"
          alt="Logo Login"
        />
        <div class="card-body">
          <h3>Bienvenido</h3>
          <form>
            <div class="form-group text-white">
              <label>E-mail</label>
              <input v-model="user" placeholder="Ejem. micorreo@ejemplo.com" type="email" class="form-control" />
            </div>
            <div class="form-group text-white">
              <label>Contraseña</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="button" @click="login()" class="btn btn-primary">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import Navbar from '../components/Navbar.vue'
export default {
  data(){
    return{
      user:"",
      password:""
    }
  },
  components:{
      Navbar
  },
  methods:{
    login(){
            console.log("login")
            firebase.auth().signInWithEmailAndPassword(this.user,this.password)
            .then(data =>{
                console.log(data)
                this.$router.replace({name:'Admin'});
            })
            .catch(error =>{
                console.log(error)
            })
        },
    }
}
</script>

<style>

</style>