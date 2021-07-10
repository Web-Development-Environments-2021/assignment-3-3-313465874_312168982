<template>
  <div class="container">
    <h1 class="title">Welcome to Superliga App!</h1>
      
    <div class="items">
      <div id="leaguePage">
        <LeagueInfo></LeagueInfo>
      </div>
      <div id="rigthCol">
        <!-- <div id="loginPage"> -->
          <LoginPage v-if="!$root.store.username"></LoginPage>
        <!-- </div> -->
        <!-- <div id="favoritesPage"> -->
          <FavoriteGames id="favorite" v-if="$root.store.username">
          <!-- <div v-for="game in limit3Games" :key="game.id"></div> -->
          </FavoriteGames>
        <!-- </div>  -->
      </div>
    </div>
  </div>
</template>

<script>
import LeagueInfo from "../components/LeagueInfo";
import FavoriteGames from "../components/FavoriteGames";
import LoginPage from "../pages/LoginPage";
export default {
  components: {
    LoginPage, 
    LeagueInfo, 
    FavoriteGames
  }
  // computed: {
  //   limit3Games(){
  //     return this.FavoriteGames.slice(0,3);
  //   }
  // }
};

</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;
}
.items {
  display: flex;
  flex-direction: row;
}
.title{
  text-align: center;
  margin: 20px;
  font-size: 50px;
  color: #2f941d;
}
</style>
