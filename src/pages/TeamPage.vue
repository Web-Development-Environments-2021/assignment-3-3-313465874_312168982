<template>
  <div>
    <PlayerPreview
      v-for="p in players"
      :id="p.player_id" 
      :image="p.image" 
      :name="p.name" 
      :position="p.position"
      :team_name="p.team_name"
      :key="p.id"></PlayerPreview>

    <GamePreview
      v-for="g in games"
      :id="g.game_id" 
      :homeTeam="g.homeTeam" 
      :awayTeam="g.awayTeam" 
      :dateTime="g.date_time"  
      :stadium="g.stadium"
      :result="g.result" 
      :key="g.id"></GamePreview>

    <ul class="teamClass">
      <li> players: {{ players }}</li>
      <li> games: {{ games }}</li>
    </ul>
  </div>
</template>

<script>
import PlayerPreview from "./PlayerPreview.vue"
import GamePreview from "./GamePreview.vue";
export default {
  name: "TeamPage",
  components: {
    PlayerPreview,
    GamePreview
  }, 
  
  data() {
    return {
      players: null,
      games: null    
    };
  },
  methods: {
    async getPlayersand(){
      let response;
      console.log("response");
      try {
        response = await this.axios.get(
          "http://localhost:3000/teams/teamFullDetails/"+this.$route.params.teamID,
        );
        console.log(response);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
      this.team = response;
    }
  }, 
  mounted(){
    console.log("favorite games mounted");
    this.getPlayer(); 
  }
};
</script>

<style></style>
