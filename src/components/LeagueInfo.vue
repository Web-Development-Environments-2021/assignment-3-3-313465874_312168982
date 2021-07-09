<template>
    <div class="league-preview">
      <b-card
      img-alt="Image"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      >
      <b-card-title>{{ leagueName }}</b-card-title>
      <b-card-text>
        Season: {{ season }}
        <br/>
        Stage: {{ stage }}
        <br/>
        Next Game: {{ nextGame[0]['home_team'] }} VS
         {{ nextGame[0]['away_team']}}
      </b-card-text>
      <b-card-text id="top3games">The next 3 favorite games: {{ top3games }}</b-card-text>
      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
    </b-card>
  </div>
</template>

<script>
export default {
 data() {
    return {
      leagueName: "", 
      season: "", 
      stage: "",
      nextGame: "",
      // top3games: []
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
    }
  }, 
  mounted(){
    // console.log("favorite games mounted");
    this.getLeagueDetails(); 
  }
}
</script>

<style>
.league-preview {
  display: inline-block;
  width: 1000px;
  height: 300px;
  box-sizing: border-box;
  /* position: relative; */
  /* float: right; */
  margin: 10px 10px;
  /* border-style: solid; */
  /* border-radius: 10px; */
  /* border-width: 5px; */
  /* border-color:rgb(44, 89, 116); */
}

.league-preview .league-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 155, 197);
}

.league-preview .league-content {
  width: 100%;
  overflow: auto;
}
#top3games{
  align-content: right;
  right: 20px;
}
</style>