<template>
  <div>
    <h1 class="title">Team Page</h1>
    <PlayerPreview
      v-for="p in playersData" 
      :ProfilePic="p.image" 
      :fullName="p.name" 
      :positionNumber="p.position"
      :teamName="p.team_name"
      :id=1
      :key="p.name"></PlayerPreview>

    <GamePreview
      v-for="g in future_games"
      :id="g.game_id" 
      :homeTeam="g.home_team" 
      :awayTeam="g.away_team" 
      :dateTime="g.date_time"  
      :stadium="g.stadium"
      :result="g.result" 
      :key="g.id"></GamePreview>

      <GamePreview
      v-for="g in past_games"
      :id="g.game_id" 
      :homeTeam="g.home_team" 
      :awayTeam="g.away_team" 
      :dateTime="g.date_time"  
      :stadium="g.stadium"
      :result="g.result" 
      :key="g.id"></GamePreview>

    <!-- <ul class="teamClass">
      <li> players: {{ players }}</li>
      <li> games: {{ games }}</li>
    </ul> -->
  </div>
</template>

<script>
import PlayerPreview from "../components/PlayerPreview.vue"
import GamePreview from "../components/GamePreview.vue";
export default {
  name: "TeamPage",
  components: {
    PlayerPreview,
    GamePreview
  }, 
  
  data() {
    return {
      players: null,
      future_games: null,
      past_games: null,
      match_report_dict: null
    };
  },
  methods: {
    async getPlayersand(){
      let response;
      console.log("response");
      try {
        response = await this.axios.get(
          "http://localhost:3000/teams/teamFullDetails/86",
        );
        console.log(response);
      } catch (error) {
        console.log("error in get team page")
        console.log(error);
      }
      this.players = response.data[0];
      this.future_games = response.data[1].future_games;
      this.past_games = response.data[1].past_games;
      this.match_report_dict = response.data[1].match_report_dict;
    }
  }, 
  mounted(){
    console.log("team page mounted");
    this.getPlayersand(); 
  }
};
</script>

<style></style>
