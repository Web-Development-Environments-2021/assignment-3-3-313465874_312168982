<template>
  <div class="game-preview">
    <div :title="id" class="game-title">
      <b v-if="result">
        <MatchReport :items = "mr">
        </MatchReport>
      </b>
      <!-- <b>Game Id:</b> {{ id }}  -->
    </div>
    <ul class="game-content">
      <li> home team: {{ homeTeam }}</li>
      <li> away team: {{ awayTeam }}</li>
      <li> date time: {{ dateTime }}</li> 
      <li> stadium: {{ stadium }}</li>
      <li v-if="result"> result: {{result}} </li>
    </ul>
  </div>
</template>

<script>
import MatchReport from "./MatchReport.vue";
export default {
  name: "GamePreview",
  components: {
    MatchReport
  }, 
  // data() {
  //   return {
  //   //   mr: null
  //   }
  // },
  props: {
      id: {
        type: Number,
        required: true
      },
      homeTeam: {
        type: String,
        required: true
      },
      awayTeam: {
        type: String,
        required: true
      },
      dateTime: {
        type: String,
        required: true
      },
      stadium: {
        type: String,
        required: true
      },
      result: {
        type: String,
        required: false
      },
      mr: {
        type: Array,
        required: false
      }

  }, 
  mounted(){
    console.log("game preview mounted")
  } 
};
</script>

<style>
.game-preview {
  display: inline-block;
  width: 100%;
  height:100%;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.game-preview .game-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.game-preview .game-content {
  width: 100%;
  overflow: hidden;
}
</style>
