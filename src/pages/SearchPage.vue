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
      <!-- Results: -->
      <br/>
      <!-- Players: -->
      <br/>
      <PlayerPreview 
      v-for="p in playersData" 
      :ProfilePic="p[0].image" 
      :fullName="p[0].name" 
      :positionNumber="p[0].position"
      :teamName="p[0].team_name"
      :id=1
      :key="p[0].name"></PlayerPreview>
      <br/>
      <!-- Teams: -->
      <br/>
      <TeamPreview
      v-for="t in teamData" 
      :teamName="t[0].name" 
      :id=1
      :key="t[0].name"></TeamPreview>
  </div>
</template>

<script>
import PlayerPreview from '../components/PlayerPreview.vue';
export default {
  components: { PlayerPreview },
 data() {
    return {
      searchQuery:"",
      results:[],
      playersData: null,
      teamData: null,
      present: "all"
    };
  },

  methods:{
    async Search(){
      try {
        const response = await this.axios.get(
        "http://localhost:3000/league/search?query="+this.searchQuery,
        );
        console.log(response);
        this.playersData = response.data.data
        if(this.playersData.length === 1){
          let templateVar = [];
          templateVar.push(this.playersData);
          this.playersData = templateVar; 
        }
        this.teamData = response.data.teamSearch
        if(this.teamData.length === 1){
          let templateVar = [];
          templateVar.push(this.teamData);
          this.teamData = templateVar; 
        }
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
      
        // this.results = response.data;
    }
  }, 
  // computed: {
  //   filteredResults() {
  //   let filterRes = this.results
  //   filterRes = filterRes.filter((item) => {
  //     return (item.id <= this.id)
  //   })
  //   return filterRes;
  // }
  // },
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