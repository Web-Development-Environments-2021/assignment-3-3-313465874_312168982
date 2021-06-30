<template>
  <div>
    <PlayerPreview>
      <!-- v-for="p in players"
      :id="p.id" 
      :fullName="p.fullName" 
      :teamName="p.teamName" 
      :ProfilePic="p.ProfilePic"  
      :positionNumber="p.positionNumber" 
      :key="p.id"> -->
      </PlayerPreview>
  </div>
</template>

<script>
import PlayerPreview from "./PlayerPreview.vue";
export default {
  name: "PlayerPage",
  components: {
    PlayerPreview
  }, 
  data() {
    return {
      players: [
        {
          id:25,
          fullName: "Player1",
          teamName: "fgfc",
          ProfilePic: "link",
          positionNumber: 3
        },
        {
          id:25,
          fullName: "Player2",
          teamName: "fgfc",
          ProfilePic: "link",
          positionNumber: 3
        }
      ]
    };
  },
  // methods: {
  //   async updateGames(){
  //     console.log("response");
  //     try {
  //       const response = await this.axios.get(
  //         "http://localhost:3000/games/favoriteGames",
  //       );
  //       const games = response.data.games;
  //       this.games = [];
  //       this.games.push(...games);
  //       console.log(response);
  //     } catch (error) {
  //       console.log("error in update games")
  //       console.log(error);
  //     }
  //   }
  // }, 
  // mounted(){
  //   console.log("favorite games mounted");
  //   this.updateGames(); 
  // }
};
</script>

<style></style>
