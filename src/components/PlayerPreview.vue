<template>
  <div class="player-preview">
    <div :title="id" class="player-title">
      <b>Player Id:</b> {{ id }}
    </div>
    <ul class="player-content">
      <li> full name: {{ fullName }}</li>
      <li> team name: {{ teamName }}</li>
      <li> profile picture: {{ ProfilePic }}</li> 
      <li> position number: {{ positionNumber }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PPlayerPreview",
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
        type: Integer,
        required: true
      }

  }, 
  mounted(){
    console.log("game preview mounted")
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
  border-color:cadetblue;
}

.player-preview .player-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.player-preview .player-content {
  width: 100%;
  overflow: hidden;
}



</style>
