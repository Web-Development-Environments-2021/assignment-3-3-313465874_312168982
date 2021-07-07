<template>
  <div id = "searchContainer">
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-input-group-append>
        <b-button variant="success" @click="Search()">Search</b-button>
      </b-input-group-append>
    </b-input-group>
      <br/>
      <!-- Your search Query: {{ searchQuery }} -->
      Results:
      <br/>
      {{this.results}}
  </div>
</template>

<script>
export default {
 data() {
    return {
      searchQuery:"",
      results:[]
    };
  },

  methods:{
    async Search(){
      try {
        const response = await this.axios.get(
        "http://localhost:3000/league/search?query="+this.searchQuery,
        );
        console.log(response);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
      
        // this.results = response.data;
    }
  }, 
}
</script>

<style scoped>

#searchContainer{
  text-align: left;
  margin-left: 70px;
  margin-top: 30px;
}

#search-input {
  width: 500px; 
}
</style>