<template>
  <div>
    <ul class="playerClass">
      <li> full name: {{ player.name }}</li>
      <li> commom name: {{ player.common_name }}</li>
      <li> birth date: {{ player.birthDate }}</li> 
      <li> country birth: {{ countryBirth }}</li>
      <li> weight: {{ player.weight }}</li>
      <li> height: {{ player.height }}</li>
      <li> image: 
        <!-- <img src= this.player.image class = "logoP" alt="logoP" height="55"> -->
      </li>
      <li> nation: {{ player.nation }}</li>
      <li> position: {{ player.position }}</li>
      <li> team name: {{ player.team_name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlayerPage",
  data() {
    return {
      player: null    
    };
  },
  methods: {
    async getPlayer(){
      let response;
      console.log("response");
      try {
        response = await this.axios.get(
          "http://localhost:3000/teams/playersFullDetails/" + this.$root.store.player_id,
        );
        console.log(response);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
      this.player = response.data.data[0];
    }
  }, 
  mounted(){
    console.log("favorite games mounted");
    this.getPlayer(); 
  }
};
</script>

<style></style>
