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
      </nav>
    </div>
</template>

<script>
export default {
    methods:{
        goToHome(){
            this.routerPush('/');
            location.reload(true)
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
