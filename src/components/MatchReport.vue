<template>
  <div class="match-report">
     <div>
        <b-table striped hover :items="items"></b-table>
    </div> 
    <!-- <ul class="mt-content"> -->
      <!-- <li> date: {{ homeTeam }}</li>
      <li> hour: {{ awayTeam }}</li>
      <li> minute event: {{ dateTime }}</li> 
      <li> event description: {{ stadium }}</li> -->
    <!-- </ul> -->
  </div>
</template>

<script>
export default {
  name: "MatchReport",
  props: {
      items: {type:Array, required:true}   
  },   
  mounted(){
    console.log("game preview mounted")
  } 
};
</script>

<style>

</style>
