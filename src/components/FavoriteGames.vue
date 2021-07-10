<template>
  <div id = "container">
    <div v-for="g in games" :key="g.id">
    <GamePreview
      :id="g.game_id" 
      :referee_name="g[0].referee_name"
      :homeTeam="g[0].home_team" 
      :awayTeam="g[0].away_team" 
      :dateTime="g[0].date_time"  
      :stadium="g[0].stadium" 
      :key="g[0].game_id"/>
      <!-- GamePreview> -->
      </div>
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
  name: "FavoriteGames",
  components: {
    GamePreview
  }, 
  data() {
    return {
      games: [] 
    };
  },
  methods: {
    async updateGames(){
      this.$forceUpdate();
      if(this.$root.store.username){
        console.log("response");
        try {
          const response = await this.axios.get(
          "http://localhost:3000/users/getFavoriteGames",
        );
        this.games = response.data;
        console.log(response);
        } catch (error) {
        console.log("error in update games")
        console.log(error);
        }
      }
    }
  }, 
  mounted(){
    console.log("favorite games mounted");
    this.updateGames(); 
  }
};
</script>

<style>

</style>
