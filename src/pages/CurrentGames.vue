<template>
  <div class = "container">
    <h1 class="title">The Games Of The Current Stage:</h1>
    <br/>
    Past Games:
    <br/>
    <h2 v-for="g in past_games" :key="g.id">
    <GamePreview
      :id="g.game_id" 
      :homeTeam="g.home_team" 
      :awayTeam="g.away_team" 
      :dateTime="g.date_time"  
      :stadium="g.stadium" 
      :result="g.result"
      :mr="match_reports_dict[g.game_id]"
      :key="g.game_id"></GamePreview>
    </h2>
    <br/>
    Future Games:
    <br/>
    <h3 v-for="g in future_games" :key="g.id">
    
    <GamePreview
      :id="g.game_id" 
      :homeTeam="g.home_team" 
      :awayTeam="g.away_team" 
      :dateTime="g.date_time"  
      :stadium="g.stadium" 
      :key="g.game_id"></GamePreview>
    </h3>
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
        // this.future_games.push(...future_games);
        // this.past_games.push(...past_games);
        // this.match_reports_dict.push(...match_reports_dict);
        console.log(response);
      } 
      catch (error) {
      console.log("error in get games from DB")
      console.log(error);
    }
    }
  }, 
  mounted(){
    console.log("games mounted");
    this.getMatchReport(); 
  }
};
</script>

<style>
.title{
  text-align: center;
  margin-top: 50px;
}
.container{
  margin-left: 30px;
  width: 100%;
}
</style>
