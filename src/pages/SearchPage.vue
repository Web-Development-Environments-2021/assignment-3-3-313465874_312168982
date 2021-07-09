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
      :ProfilePic="p.image" 
      :fullName="p.name" 
      :positionNumber="p.position"
      :teamName="p.team_name"
      :id="p.player_id"
      :key="p.name"></PlayerPreview>
      <br/>
      <!-- Teams: -->
      <br/>
      <TeamPreview
      v-for="t in teamData" 
      :name="t.name" 
      :id="t.id"
      :logo="t.logo"
      :key="t.id"></TeamPreview>
  </div>
</template>

<script>
import PlayerPreview from '../components/PlayerPreview.vue';
import TeamPreview from '../components/TeamPreview.vue';
export default {
  components: { PlayerPreview,TeamPreview },
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

        this.teamData = response.data.teamsSearch
        console.log(this.$root.store)
        
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