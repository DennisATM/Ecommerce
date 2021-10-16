<template>
  <div>
      <h3 class="mt-2">Filtrar productos</h3>
      <form class="form mt-4">
        <label>Categorias: </label>
        <select class="ml-3" v-model="filterType">
          <option selected disabled>Elige una categoria</option>
          <option v-for="(tipos,index) in types" :key="index">{{ tipos }}</option>
        </select>
      </form>
      <br /><br />
  </div>
</template>

<script>
export default {
    data(){
        return{
            filterType:null,
            types:['Todos','Abarrotes','Verduras','frutas']
        }
    }
}
</script>

<style>

</style>