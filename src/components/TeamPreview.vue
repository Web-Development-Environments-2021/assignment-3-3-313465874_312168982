<template>
  <div>
    <router-link 
      :to="{
      name: 'teamPage',
      params: { teamID: id},
      }">
    <div>
      <img :src="logo" @click="moveToTeamPage"  :to="{ name: 'teamPage' }"/>
    </div>

    </router-link>
    <div class="team-preview">
    <div :title="id" class="team-title">
      <b>Team Id:</b> {{ id }}
    </div>
    <ul class="team-content">
      <li> team name: {{ name }}</li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: "TeamPreview",
  props: {
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      logo: {
        type: String,
        required: true
      }

  }, 
  methods:{
    moveToTeamPage(){
      localStorage.teamID = this.id;
    }
    
  },
  mounted(){
    console.log("game preview mounted")
  } 
};
</script>

<style>
.team-preview {
  display: inline-block;
  width: 250px;
  height: 80px;
  position: relative;
  font-size: 19px;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 3px;
  border-color:black;
  font-weight: bold;
}

.team-preview .team-title {
  text-align: center;
  text-transform: uppercase;
  color:  black;
}

.team-preview .team-content {
  text-align: left;
  width: 100%;
  overflow: hidden;
}



</style>
