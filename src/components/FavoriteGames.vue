<template>
  <div>
    <GamePreview
      v-for="g in games"
      :id="g.game_id" 
      :homeTeam="g.homeTeam" 
      :awayTeam="g.awayTeam" 
      :dateTime="g.date_time"  
      :stadium="g.stadium" 
      :key="g.id"></GamePreview>
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
      games: [
        // {
        //   id:25,
        //   homeTeam: "Maccabi Tel-Aviv",
        //   awayTeam: "Hapoel Beer-Sheva",
        //   date: "27/5/21",
        //   hour: "20:00",
        //   stadium: "CAMP NOU"
        // },
        // {
        //   id:39,
        //   hostTeam: "Hapoel Tel-Aviv",
        //   guestTeam: "Maccabi Haifa",
        //   date: "29/5/21",
        //   hour: "20:00",
        //   stadium: "BAM"
        // }
      ]
    };
  },
  methods: {
    async updateGames(){
      console.log("response");
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/getFavoriteGames",
        );
        const games = response.data.games; //check if delete data
        this.games = [];
        this.games.push(...games);
        console.log(response);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }
  }, 
  mounted(){
    console.log("favorite games mounted");
    this.updateGames(); 
  }
};
</script>

<style></style>
