<template>
  <div>
    <ul class="playerClass">
      <li> full name: {{ name }}</li>
      <li> commom name: {{ common_name }}</li>
      <li> birth date: {{ birthDate }}</li> 
      <li> country birth: {{ countryBirth }}</li>
      <li> weight: {{ weight }}</li>
      <li> height: {{ height }}</li>
      <li> image: {{ image }}</li>
      <li> nation: {{ nation }}</li>
      <li> nation: {{ position }}</li>
      <li> team name: {{ team_name }}</li>
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
          "http://localhost:3000/teams/playersFullDetails/"+this.$route.params.playerID,
        );
        console.log(response);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
      this.player = response;
    }
  }, 
  mounted(){
    console.log("favorite games mounted");
    this.getPlayer(); 
  }
};
</script>

<style></style>
