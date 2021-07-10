<template>
  <div class = "container">
    <h1 class="title">The Games Of The Current Stage:</h1>
    <div class="games">
      <div id="past">
        <u style="color: rgb(146, 71, 165)">Past Games:</u>
        <br/>
        <h2 v-for="g in past_games" :key="g.id">
        <GamePreview
          :id="g.game_id"
          :referee_name="g.referee_name" 
          :homeTeam="g.home_team" 
          :awayTeam="g.away_team" 
          :dateTime="g.date_time"  
          :stadium="g.stadium" 
          :result="g.result"
          :mr="match_reports_dict[g.game_id]"
          :key="g.game_id"></GamePreview>
        </h2>
      </div>
      <div id="future">
        <u style="color: rgb(146, 71, 165)">Future Games:</u>
        <br/>
        <h3 v-for="g in future_games" :key="g.id">
        <GamePreview
          :id="g.game_id" 
          :referee_name="g.referee_name"
          :homeTeam="g.home_team" 
          :awayTeam="g.away_team" 
          :dateTime="g.date_time"  
          :stadium="g.stadium" 
          :key="g.game_id"></GamePreview>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import GamePreview from "../components/GamePreview.vue";
export default {
  name: "CurrentGames",
  components: {
    GamePreview
  }, 
  data() {
    return {
      future_games: null,
      past_games: null,
      match_reports_dict: null,
    };
  },
  methods: {
    async getMatchReport(){
      try {
          const response = await this.axios.get(
          "http://localhost:3000/league/getGamesDB",
        );
        this.future_games = response.data.future_games;
        this.past_games = response.data.past_games;
        this.match_reports_dict = response.data.match_reports_dict;
        console.log(response);
      } 
      catch (error) {
      console.log("error in get games from DB")
      console.log(error);
    }
    }
  }, 
  mounted(){
    console.log("current games page mounted");
    this.getMatchReport(); 
  }
};
</script>

<style>
.title{
  text-align: center;
  margin: 20px;
  font-size: 50px;
  color: #2f941d;
}
.container {
  display: flex;
  flex-direction: column;
}
.games {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 45px;
}

</style>
