<template>
    <div class="league-preview">
      <b-card
      img-alt="Image"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      >
      <div id="league">
        <b-card-title>{{ leagueName }}</b-card-title>
        <b-card-text>
          <b><u>Season:</u></b>{{ season }}
          <br/>
          <b><u>Stage: </u></b>{{ stage }}
          <br/>
          <b><u>Next Game: </u></b><br> 
          Referee Name: {{nextGame[0]['referee_name']}} <br>
          {{ nextGame[0]['home_team'] }} VS
          {{ nextGame[0]['away_team']}} 
          <br>
          Date Time: {{ nextGame[0]['date_time']}} <br> 
          Stadium: {{ nextGame[0]['stadium']}}
          <!-- <h3 v-for="g in nextGame" :key="g.id">
          <GamePreview
            :id="g.game_id" 
            :referee_name="g.referee_name"
            :homeTeam="g.home_team" 
            :awayTeam="g.away_team" 
            :dateTime="g.date_time"  
            :stadium="g.stadium" 
            :key="g.id"></GamePreview></h3> -->
          
        </b-card-text>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "LeagueInfo",
 data() {
    return {
      leagueName: "", 
      season: "", 
      stage: "",
      nextGame: ""
    };
  },
  methods: {
    async getLeagueDetails(){
      console.log("response");
      try {
        const response = await this.axios.get(
          "http://localhost:3000/league/getDetails",
        );
        this.leagueName = response.data.league_name;
        this.season = response.data.current_season_name;
        this.stage = response.data.current_stage_name;
        this.nextGame = response.data.nextGame;
        // this.top3games = response.data.top3games;
        console.log(response);
      } catch (error) {
        console.log("error in get league details")
        console.log(error);
      }
    },
    // async getFavoriteGames(){
    //   this.$forceUpdate();
    //   if(this.$root.store.username){
    //     console.log("response");
    //     try {
    //       const response = await this.axios.get(
    //       "http://localhost:3000/users/getFavoriteGames",
    //     );
    //     this.favGames = response.data;
    //     console.log(response);
    //     } catch (error) {
    //     console.log("error in update games")
    //     console.log(error);
    //     }
    //   }
    // }

  }, 
  mounted(){
    // console.log("favorite games mounted");
    this.getLeagueDetails(); 
  }
}
</script>

<style>
.league-preview {
  width: 550px;
  height: 200px;
  box-sizing: border-box;
  margin: 20px 20px;
  display: inline-block;
  /* flex-direction: row;  */
}

.league-preview .league-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 155, 197);
}

/* .league-preview .league-content { */
  /* width: 100%; */
  /* overflow: auto; */
/* } */
/* .league-preview { 
  justify-content: space-between;
  width: 550px;
} */
/* #league {
  display: flex;
  flex-direction: column;
} */


</style>