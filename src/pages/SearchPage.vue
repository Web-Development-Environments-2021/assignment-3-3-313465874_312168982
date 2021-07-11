<template>
  <div class = "searchContainer">
    <h1 class="title">Search Page</h1>
    <b-input-group id="search-input" prepend="Search Query:">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-input-group-append>
        <b-form-select v-model="playersSort" :options="[{text:'Sort Players By Name', value: 'Sort Players By Name'},{text:'Sort Players By Team Name', value: 'Sort Players By Team Name'},{text:'Random', value: 'Random'}]"/>
        <b-form-select v-model="teamsSort" :options="[{text:'Sort Teams By Name', value: 'Sort Teams By Name'},{text:'Random', value: 'Random'}]"/>
        <b-form-select v-model="present" :options="[{text:'All', value: 'All'},{text:'Players', value: 'Players'},{text:'Teams', value: 'Teams'}]"/>
        <b-button variant="success" @click="Search()">Search</b-button>
      </b-input-group-append>
    </b-input-group>
      <br/>
      <!-- Your search Query: {{ searchQuery }} -->
      
      <br/>
      <br/>
      <div class="results" v-if="teamData && playersData">
        <div id="playersRes" v-if="present==='Players' || present==='All'" >
          <h1><u> Players: </u></h1>
          <div id="alert" v-if="playersData && playersData.length==0">
            sorry there is no players
          </div>
        
          <PlayerPreview 
          v-for="p in playersData" 
          :ProfilePic="p.image" 
          :fullName="p.name" 
          :positionNumber="p.position"
          :teamName="p.team_name"
          :id="p.player_id"
          :key="p.name"></PlayerPreview>
          
        </div>
        <br/>
        <br/>
        
        <div id="teamsRes" v-if="present==='Teams' || present==='All'" >
          <h1><u> Teams: </u></h1>
          <div id="alert" v-if="teamData && teamData.length==0">
            sorry there is no teams
          </div>
          <!-- <li v-for="array in sortedArray">{{ array.name }}</li> -->
        
          <TeamPreview
          v-for="t in teamData" 
          :name="t.name" 
          :id="t.id"
          :logo="t.logo"
          :key="t.id"></TeamPreview></div>
      </div>

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
      present: "All",
      playersSort: "Random",
      teamsSort: "Random",
    };
  },

  methods:{
    showRecent(){
      this.searchQuery = this.$root.store.recentQuery;
      this.playersData = this.$root.store.recentPlayers;
      this.teamData = this.$root.store.recentTeams;
    },

    async Search(){
      try {
        const response = await this.axios.get(
        "http://localhost:3000/league/search?query="+this.searchQuery,
        );
        console.log(response);
        this.playersData = response.data.data

        this.teamData = response.data.teamsSearch
        console.log(this.$root.store)
        
        this.sortPlayers();
        this.sortTeams();

        //save results
        if(this.$root.store.username != null){
          this.$root.store.recentQuery = this.searchQuery;
          this.$root.store.recentPlayers = this.playersData;
          this.$root.store.recentTeams = this.teamData;
        }
        
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
      
        // this.results = response.data;
    },
    sortPlayers(){
      this.playersData.sort((a,b) => {
        if(this.playersSort == 'Sort Players By Name'){
          return a.name <= b.name ? -1 : 1;
        }
        else if(this.playersSort == 'Sort Players By Team Name'){
          return a.team_name <= b.team_name ? -1 : 1;
        }
      })
    },
    sortTeams(){
      this.teamData.sort((a,b) => {
        if(this.teamsSort == 'Sort Teams By Name'){
          return a.name <= b.name ? -1 : 1;
        }
        else if(this.playersSort == 'Sort Players By Team' && a.name && b.name){
          return a.name <= b.name ? -1 : 1;
        }
      })
    }

  },
  mounted() {
    this.showRecent();
    this.sortTeams();
    this.sortPlayers();
  },
  // computed: {
  //   sortedArray: function() {
  //   function compare(a, b) {
  //     if (a.name < b.name)
  //       return -1;
  //     if (a.name > b.name)
  //       return 1;
  //     return 0;
  //   }
  //   return arrays.sort(compare);
  // }
  // }
}
</script>

<style scoped>

.searchContainer{
  text-align: left;
  margin-left: 70px;
  margin-top: 30px;
}

#search-input {
  width: 1100px; 
  margin-left: 40px;
  margin-top: 30px;
}
.title{
  text-align: center;
  margin-top: 20px;
  font-size: 50px;
  color: #2f941d;
}

#alert {
  color: red;
  font-size: 22px;
  font-weight: bold;
}

.results{
  /* margin-left: 200px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* padding: 100px; */
}
#playersRes {
  margin-left: 150px;
}

#teamsRes {
  margin-right: 200px;
}
</style>