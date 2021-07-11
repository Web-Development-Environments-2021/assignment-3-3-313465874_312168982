<template>
  <div class="teamPage">
    <h1 class="title">Team Page</h1>
    <div class="content">
      <div class="players"><b><u>Players In Team:</u></b><br>
      <PlayerPreview
        v-for="p in players" 
        :ProfilePic="p.image" 
        :fullName="p.name" 
        :positionNumber="p.position"
        :teamName="p.team_name"
        :id="p.player_id"
        :key="p.name"></PlayerPreview>
      </div>
      <div class="games"><b><u>Games In Team:</u></b><br><br>Future Games:
      <div class="futureGames" v-if="future_games.length>0">
      <GamePreview
        v-for="g in future_games"
        :id="g.game_id"
        :referee_name="g.referee_name"  
        :homeTeam="g.home_team" 
        :awayTeam="g.away_team" 
        :dateTime="g.date_time"  
        :stadium="g.stadium"
        :key="g.id"></GamePreview>
      </div>

      <div class="pastGames" v-if= "past_games!= 'No past games available'">Past Games:

        <GamePreview
        v-for="g in past_games"
        :id="g.game_id" 
        :referee_name="g.referee_name" 
        :homeTeam="g.home_team" 
        :awayTeam="g.away_team" 
        :dateTime="g.date_time"  
        :stadium="g.stadium"
        :result="g.result" 
        :mr="match_reports_dict[g.game_id]"
        :key="g.id"></GamePreview>
      </div>
    </div>
    </div>

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
          "http://localhost:3000/teams/teamFullDetails/" + localStorage.teamID,
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

<style>
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.teamPage {
  display: flex;
  flex-direction: column;
}
.games {
  display: flex;
  flex-direction: column;
  /* margin-right: 100px; */
  /* margin-top: 50px; */
  /* padding: 20px; */
  /* height: 1000px; */
}
.players {
  margin-left: 100px;
  margin-top: 20px;
  font-size: 40px;
}
.futureGames {
  margin-top: 30px;
}
.pastGames {
  margin-top: 30px;
}
</style>
