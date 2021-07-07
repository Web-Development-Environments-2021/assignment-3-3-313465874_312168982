 <template>
  <div class = "container">
    <h1 class="title">Hi {{$root.store.username}}, Here Are Your Favorite Games:</h1>
    <br>
    <br>
    <br>
    <br>
    <FavoriteGames id="favorite" v-if="$root.store.username"></FavoriteGames>
  </div>
</template>

<script>
import FavoriteGames from "../components/FavoriteGames";
export default {
  name: "FavoriteGamesPage",
  components: {
    FavoriteGames
  }
};
</script>

<style>
.container{
  justify-content: center;
}
.title{
  text-align: center;
  margin-top: 50px;
}
</style>
