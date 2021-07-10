<template>
  <div class="playerPage">
    <h1 class="title">Player Page</h1>
    <div class="playerTicket">
      <div>
        <img :src="player.image" width="330px" height="330px"/>
      </div>
      <div>
        <ul class="playerClass">
          <li> full name: {{ player.name }}</li>
          <li> commom name: {{ player.common_name }}</li>
          <li> birth date: {{ player.birthDate }}</li> 
          <li> country birth: {{ countryBirth }}</li>
          <li> weight: {{ player.weight }}</li>
          <li> height: {{ player.height }}</li>
          <li> nation: {{ player.nation }}</li>
          <li> position: {{ player.position }}</li>
          <li> team name: {{ player.team_name }}</li>
        </ul>
      </div>
    </div>
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
          "http://localhost:3000/teams/playersFullDetails/" + localStorage.player_id,
          // + this.$root.store.player_id,
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
    console.log("player page mounted");
    this.getPlayer(); 
  }
};
</script>

<style>
.title{
  text-align: center;
  margin-top: 20px;
  font-size: 50px;
  color: #2f941d;
}
.playerClass {
  font-size: 25px;
  font-weight: bold;
  align-items: center;
}
.playerPage{
  display: flex;
  flex-direction: column;
}
.playerTicket{
  margin-left: 200px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
}
</style>
