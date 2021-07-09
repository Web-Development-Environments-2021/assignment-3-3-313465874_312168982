<template>
  <div>
    <router-link 
      :to="{
      name: 'TeamPreview',
      params: { teamID: id},
      }">
    <div>
      <img :src="logo" @click="moveTeamPage"  :to="{ name: 'teamPage' }"/>
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
    moveTeamPage(){
      this.$root.store.changeTeamID(this.id);
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
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.team-preview .team-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.team-preview .team-content {
  width: 100%;
  overflow: hidden;
}



</style>
