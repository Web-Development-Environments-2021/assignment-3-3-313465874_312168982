<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" id="menu">
      <b-navbar-brand :to="{ name: 'main' }">Superliga Vue</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

        <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
        <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
        <b-nav-item :to="{ name: 'currentGames' }">Current Stage Games</b-nav-item>
        <b-nav-item :to="{ name: 'LeagueManPage' }">League Management Page</b-nav-item>
        <!-- <b-nav-item :to="{ name: 'teamPage' }">Team page</b-nav-item> -->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="!$root.store.username">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">hello guest</a>
          <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
          <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
        <b-nav-item-dropdown right>
          <template #button-content>
            {{ $root.store.username }}
          </template>
          <b-dropdown-item :to="{ name: 'favoriteGamesPage' }">Favorites</b-dropdown-item>
          <b-dropdown-item href="#" @click="Logout" >Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    async Logout() {
      await this.axios.post(
          "http://localhost:3000/Logout",
      );
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background-image: url('./assets/ball.jpg');
  background-repeat: 'no-repeat';
  background-position: center;
  background-repeat:  no-repeat;
  background-size:cover ;
  background-attachment: fixed;
}

#nav {
  padding: 30px;
}

// #nav a {
//   font-weight: bold;
//   color: #ff0000;
// }

// #nav a.router-link-exact-active {
//   color: #d100c0;
// }

</style>
