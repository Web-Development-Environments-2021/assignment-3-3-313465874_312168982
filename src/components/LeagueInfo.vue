<template>
    <div class="league-preview">
      <b-card
      img-alt="Image"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-title>{{leagueName}}</b-card-title>
      <b-card-text>
        Season: {{ season }}
        <br/>
        Stage: {{ stage }}
        <br/>
        Next Game: {{ nextGame }}
      </b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
 data() {
    return {
      leagueName: "superliga1", 
      season: "season1", 
      stage: "stage1",
      nextGame: 'h',
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
        const leagueName = response.league_name;
        const reseason = response.current_season_name;
        const restage = response.current_stage_name;
        const nextGame = response.nextGame;
        // const top3games = response.top3games;
        this.leagueName = leagueName;
        // this.top3games = [];
        // this.top3games.push(...top3games);
        this.season = reseason;
        this.stage = restage;
        this.nextGame = nextGame;
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
  width: 250px;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(44, 89, 116);
}

.league-preview .league-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 155, 197);
}

.league-preview .league-content {
  width: 100%;
  overflow: hidden;
}

</style>