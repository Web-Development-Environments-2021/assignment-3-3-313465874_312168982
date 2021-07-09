<template>
  <div class="container">
    <h1 class="title">Welcome to Superliga App!</h1>
    <!-- <LoginPage v-if="!$root.store.username"></LoginPage> -->
    <!-- Noya - To return When you check -->
    <!-- <FavoriteGames id="favorite" v-if="$root.store.username"></FavoriteGames>
    <LeagueInfo></LeagueInfo> -->
  </div>
</template>

<script>
import LeagueInfo from "../components/LeagueInfo";
import FavoriteGames from "../components/FavoriteGames";
// import LoginPage from "../pages/LoginPage";
// export default {
//   components: {
//     // LoginPage, 
//     LeagueInfo, 
//     FavoriteGames
//   }
// };
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
.title{
  text-align: center;
  // background-image: url('../assets/ball.jpg');
  // background-repeat: 'no-repeat';
  // background-size: 'cover'
}
</style>
