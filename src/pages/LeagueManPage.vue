<template>
    <div class="container">
        <h1 class="title">League Management Page</h1>
        <div class="page" v-if="$root.store.username=='manager'">
            <div class="sorting">
            <b-input-group id="sort-input" prepend="Sort Games By:">
            <b-input-group-append>
                <b-form-select v-model="sortBy" :options="[{text:'No Sort', value: 'No Sort'},{text:'Date', value: 'Date'},{text:'Team', value: 'Team'}]"/>
                <b-button variant="success" @click="sortByEl()">Sort</b-button>
            </b-input-group-append>
            </b-input-group>
            <br/>
            
    
    <div class="games">
      <!-- <div id="past"> -->
        <!-- <u style="color: rgb(146, 71, 165)">Past Games:</u> -->
        <!-- <br/> -->
        <h2 v-for="g in allGames" :key="g.id">
        <GamePreview
          :id="g.game_id"
          :referee_name="g.referee_name" 
          :homeTeam="g.home_team" 
          :awayTeam="g.away_team" 
          :dateTime="g.date_time"  
          :stadium="g.stadium" 
          :result="g.result"
          :mr="match_reports_dict[g.game_id]"
          :key="g.game_id"></GamePreview>
        </h2>
    </div>
    <!-- close div sorting -->
    </div>
      <!-- <div id="future"> -->
        <!-- <u style="color: rgb(146, 71, 165)">Future Games:</u> -->
        <!-- <br/> -->
        <!-- <h3 v-for="g in allGames" :key="g.id">
        <GamePreview
          :id="g.game_id" 
          :referee_name="g.referee_name"
          :homeTeam="g.home_team" 
          :awayTeam="g.away_team" 
          :dateTime="g.date_time"  
          :stadium="g.stadium" 
          :key="g.game_id"></GamePreview>
        </h3> -->
      <!-- </div> -->
    <!-- </div> -->


    <!-- open div add game -->
    <!-- <div id="actions">Add New Game 
        <b-form @submit.prevent="Adding" @reset.prevent="onReset" class="form"> -->
                <!-- referee_name -->
            <!-- <b-form-group id="input-referee-name" label-cols-sm="3" label="Referee Name:" label-for="referee">
            <b-form-input id="referee" v-model="$v.form.referee_name.$model"
                type="text" :state="validateState('referee_name')"></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.form.referee_name.required">
            referee name is required </b-form-invalid-feedback>
            <b-form-invalid-feedback id="alert" v-if="!$v.form.referee_name.alpha">
            referee name should contain only alphabet characters.</b-form-invalid-feedback>
            </b-form-group> -->
                <!-- date_time -->
            <!-- <b-form-group id="input-date_time" label-cols-sm="3" label="Date Time:" label-for="date_time">
            <b-form-input id="date_time" v-model="$v.form.date_time.$model"
                type="text||datetime-local" :state="validateState('date_time')"></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.form.date_time.required">
            date time is required </b-form-invalid-feedback></b-form-group> -->


            <!-- <b-form-group id="input-date" label-cols-sm="3" label="Date:" label-for="date">
            <b-form-datepicker v-model="date" :min="min" :max="max" locale="en"></b-form-datepicker></b-form-group> -->
                <!-- time -->
            <!-- <b-form-group id="input-time" label-cols-sm="3" label="Time:" label-for="time">
            <b-form-timepicker v-model="time" locale="en"></b-form-timepicker></b-form-group> -->

                <!-- home_team -->
            <!-- <b-form-group id="input-home_team" label-cols-sm="3" label="Home Team:" label-for="home_team">
            <b-form-input id="home_team" v-model="$v.form.home_team.$model"
                type="text" :state="validateState('home_team')"></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.form.home_team.required">
            home team is required </b-form-invalid-feedback>
            <b-form-invalid-feedback id="alert" v-if="!$v.form.home_team.alpha">
            home team should contain only alphabet characters.</b-form-invalid-feedback>
            </b-form-group> -->
                <!-- away_team -->
            <!-- <b-form-group id="input-away_team" label-cols-sm="3" label="Away Team:" label-for="away_team">
            <b-form-input id="away_team" v-model="$v.form.away_team.$model"
                type="text" :state="validateState('away_team')"></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.form.away_team.required">
            away team is required </b-form-invalid-feedback>
            <b-form-invalid-feedback id="alert" v-if="!$v.form.away_team.alpha">
            away team should contain only alphabet characters.</b-form-invalid-feedback>
            </b-form-group> -->
                <!-- stadium -->
            <!-- <b-form-group id="input-stadium" label-cols-sm="3" label="Stadium:" label-for="stadium">
            <b-form-input id="stadium" v-model="$v.form.stadium.$model"
                type="text" :state="validateState('stadium')"></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.form.stadium.required">
            stadium is required </b-form-invalid-feedback>
            <b-form-invalid-feedback id="alert" v-if="!$v.form.stadium.alpha">
            stadium should contain only alphabet characters.</b-form-invalid-feedback>
            </b-form-group>
            <b-button id="but" type="reset" variant="danger">Reset</b-button>
            <b-button id="but" type="submit" variant="primary" style="width:250px;">Register</b-button>
        </b-form>
        <b-alert class="mt-2" v-if="form.submitError" variant="warning" dismissible show>
        Adding New Game failed: {{ form.submitError }}
        </b-alert> -->

    <!-- div close form -->
    <!-- </div> -->
    <!-- close div if page-->
    </div>
    <div id="alert" v-else-if="!$root.store.username || $root.store.username!='manager'">You Have No Permissions To This Page</div>
  <!-- close div container -->
  </div>
</template>

<script>
import GamePreview from "../components/GamePreview.vue";
export default {
  name: "CurrentGames",
  components: {
    GamePreview
  }, 
  data() {
    // //date
    // const now = new Date()
    // const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // // 15th two months prior
    // const minDate = new Date(today)
    // minDate.setMonth(minDate.getMonth() - 2)
    // minDate.setDate(15)
    // // 15th in two months
    // const maxDate = new Date(today)
    // maxDate.setMonth(maxDate.getMonth() + 2)
    // maxDate.setDate(15)
    return {
      future_games: null,
      past_games: null,
      match_reports_dict: null,
      allGames: null,
      sortBy: "No Sort",
    //   form: {
    //     referee_name: "",
    //     date_time: "",
    //     home_team: "",
    //     away_team: "",
    //     stadium: "",

        // date: '',
        // time: '',
        // min: minDate,
        // max: maxDate
    //   },
    //   errors: [],
    //   validated: false
    };
  },
//   validations: {
//     form: {
//       referee_name: {
//         required,
//         alpha
//       },
//       date_time: {
//           required
//       },
    //   date: {
    //       required
    //   },
    //   time: {
    //       required
    //   },
    //   home_team: {
    //     required,
    //     alpha
    //   },
    //   away_team: {
    //     required,
    //     alpha
    //   },
    //   stadium: {
    //     required,
    //     alpha
    //   },
    // }
//   },
  methods: {
    // validateState(param) {
    //   const { $dirty, $error } = this.$v.form[param];
    //   return $dirty ? !$error : null;
    // },
    // async addNewGame() {
    //   try {
    //     const response = await this.axios.post(
    //       "http://localhost:3000/Register",
    //       {
    //         referee_name: this.form.referee_name,
    //         home_team: this.form.home_team,
    //         away_team: this.form.away_team,
    //         date_time: this.form.date_time,
    //         stadium: this.form.stadium,
    //       }
    //     );
    //     } catch (err) {
    //     console.log(err.response);
    //     this.form.submitError = err.response.data.message;
    //   }
    // },
    // Adding() {
    //   console.log("adding method called");
    //   this.$v.form.$touch();
    //   if (this.$v.form.$anyError) {
    //     return;
    //   }
    //   console.log("register method go");
    //   this.addNewGame();
    // },
    // onReset() {
    //   this.form = {
    //     referee_name: ""
    //   };
    //   this.$nextTick(() => {
    //     this.$v.$reset();
    //   });
    // },

    async getMatchReport(){
      try {
          const response = await this.axios.get(
          "http://localhost:3000/league/getGamesDB",
        );
        this.future_games = response.data.future_games;
        this.past_games = response.data.past_games;
        this.match_reports_dict = response.data.match_reports_dict;
        this.allGames = this.past_games.concat(this.future_games);
        console.log(this.allGames);
        console.log(response);
      } 
      catch (error) {
      console.log("error in get games from DB")
      console.log(error);
        }
    },
    sortByEl(){
        this.allGames.sort((a,b) => {
        if(this.sortBy == 'Date'){
          return a.date_time <= b.date_time ? -1 : 1;
        }
        else if(this.sortBy == 'Team'){
          return a.home_team <= b.home_team ? -1 : 1;
        }
      })
    }
  }, 
  mounted(){
    console.log("league management page mounted");
    this.getMatchReport(); 
    this.sortByEl();
    this.allGames.push(...this.allGames);
  },
//   computed: {
//     date_time: function () {
//       return this.date + ' ' + this.time
//     }
//   }
};


</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
.page {
  display: flex;
  flex-direction: row;
}
.games {
  display: flex;
  flex-direction: column;
//   justify-content: space-between;
  font-size: 45px;
  align-self: center;
}
.title {
  text-align: center;
  margin-top: 20px;
  font-size: 50px;
  color: #2f941d;
}
#sort-input {
  width: 1100px; 
  margin-top: 30px;
  margin-left: 50px;
}
#alert {
    text-align: center;
    color: red;
    font-size: 55px;
    font-weight: bold;
}
</style>