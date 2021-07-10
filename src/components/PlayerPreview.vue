<template>
  <div>
    <router-link 
      :to="{
      name: 'playerPage',
      params: { playerID: id},
      }">
    <div>
      <img :src="ProfilePic" @click="moveToPlayerPage"/>
    </div>

    </router-link>
    <div class="player-preview">
    <div :title="id" id="player-title">
      <b>Player Id:</b> {{ id }}
    </div>
    <ul class="player-content">
      <li> full name: {{ fullName }}</li>
      <li> team name: {{ teamName }}</li>
      <!-- <li> profile picture:  -->
        <!-- <img src= this.ProfilePic class = "logoP" alt="logoP" height="55"> -->
      <!-- </li>  -->
      <li> position number: {{ positionNumber }}</li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: "PlayerPreview",
  props: {
      id: {
        type: Number,
        required: true
      },
      fullName: {
        type: String,
        required: true
      },
      teamName: {
        type: String,
        required: true
      },
      ProfilePic: {
        type: String,
        required: true
      },
      positionNumber: {
        type: Number,
        required: true
      }

  }, 
  methods: {
    moveToPlayerPage(){
      localStorage.player_id = this.id;
    }
  },
  mounted(){
    console.log("player preview mounted")
    
  } 
};
</script>

<style>
.player-preview {
  display: inline-block;
  width: 250px;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:black;
  font-size: 19px;
  font-weight: bold;
  
}

#player-title {
  text-align: center;
  text-transform: uppercase;
  color:  black;
}

.player-preview .player-content {
  width: 100%;
  overflow: hidden;
  color:  black;
}



</style>
