<template>
  <div>
    <div v-for="g in games" :key="g.id">
    <GamePreview
      :id="g.game_id" 
      :homeTeam="g.homeTeam" 
      :awayTeam="g.awayTeam" 
      :dateTime="g.date_time"  
      :stadium="g.stadium" 
      :key="g.id"/>
      </div>
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
  name: "CurrentGames",
  components: {
    GamePreview
  }, 
  data() {
    return {
      future_games: [],
      past_games: [],
      match_reports_dict: [],
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
        this.future_games.push(...future_games);
        this.past_games.push(...past_games);
        this.match_reports_dict.push(...match_reports_dict);
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

<style></style>
