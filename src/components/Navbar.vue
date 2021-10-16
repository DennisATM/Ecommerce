<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top text bg-success w-100">
        <a class="navbar-brand nav-link text-white" @click="goToHome()">🛍️ Verdulivery 🌱</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav m-auto">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#"
              @click="goToCart()"
                >Carrito de Compras <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <em> Admin </em>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" @click="login()">Login</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
    methods:{
        login(){
            this.routerPush('/Login')
        },
        goToHome(){
            this.routerPush('/');
            location.reload(true)
        },
        goToCart(){
            this.routerPush('/Cart')
        },
        routerPush(path) {
          if (this.$route.path !== path) {
             this.$router.push(path);
           }
        }
    }
}
</script>
<style scoped>
    body{
        padding:0;
        margin:0
    }
</style>
