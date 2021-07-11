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

    <!-- open div add game -->
    <div class="actions">
      <div id="newGame"> <b><u>Add New Game</u></b><br><br>
        <b-form @submit.prevent="AddingGame" @reset.prevent="onReset" class="form">
                <!-- referee_name -->
            <b-form-group id="input-referee-name" label-cols-sm="3" label="Referee Name:" label-for="referee">
            <b-form-input id="referee" v-model="$v.formNewGame.referee_name.$model"
                type="text" :state="validateState('stadium')"></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.formNewGame.referee_name.required">
            referee name is required </b-form-invalid-feedback>
            <b-form-invalid-feedback id="alert" v-if="!$v.formNewGame.referee_name.alpha">
            referee name should contain only alphabet characters.</b-form-invalid-feedback>
            </b-form-group>
                <!-- date_time -->
            <b-form-group id="input-date_time" label-cols-sm="3" label="Date Time:" label-for="date_time">
            <b-form-input id="date_time" v-model="$v.formNewGame.date_time.$model"
                type="text" :state="validateState('date_time')"></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.formNewGame.date_time.required">
            date time is required </b-form-invalid-feedback></b-form-group>
                <!-- home_team -->
            <b-form-group id="input-home_team" label-cols-sm="3" label="Home Team:" label-for="home_team">
            <b-form-input id="home_team" v-model="$v.formNewGame.home_team.$model"
                type="text" :state="validateState('home_team')"></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.formNewGame.home_team.required">
            home team is required </b-form-invalid-feedback>
            <b-form-invalid-feedback id="alert" v-if="!$v.formNewGame.home_team.alpha">
            home team should contain only alphabet characters.</b-form-invalid-feedback>
            </b-form-group>
                <!-- away_team -->
            <b-form-group id="input-away_team" label-cols-sm="3" label="Away Team:" label-for="away_team">
            <b-form-input id="away_team" v-model="$v.formNewGame.away_team.$model"
                type="text" :state="validateState('away_team')"></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.formNewGame.away_team.required">
            away team is required </b-form-invalid-feedback>
            <b-form-invalid-feedback id="alert" v-if="!$v.formNewGame.away_team.alpha">
            away team should contain only alphabet characters.</b-form-invalid-feedback>
            </b-form-group>
                <!-- stadium -->
            <b-form-group id="input-stadium" label-cols-sm="3" label="Stadium:" label-for="stadium">
            <b-form-input id="stadium" v-model="$v.formNewGame.stadium.$model"
                type="text" :state="validateState('stadium')"></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.formNewGame.stadium.required">
            stadium is required </b-form-invalid-feedback>
            <b-form-invalid-feedback id="alert" v-if="!$v.formNewGame.stadium.alpha">
            stadium should contain only alphabet characters.</b-form-invalid-feedback>
            </b-form-group>
            <b-button id="but1" type="reset" variant="danger">Reset</b-button>
            <b-button id="but2" type="submit" variant="primary" style="width:300px;">Add Game To DB</b-button>
        </b-form>
        <b-alert class="mt-2" v-if="formNewGame.submitError" variant="warning" dismissible show>
        Adding New Game failed: {{ formNewGame.submitError }}
        </b-alert>

      <!-- div close form -->
      </div><br><br><br>

      <div id="bonus"><b><u>Add Result To Game</u></b><br><br>
        <b-form @submit.prevent="AddingResult" @reset.prevent="onReset" class="form">
              <!-- game_id -->
            <b-form-group id="input-game_id" label-cols-sm="3" label="Game Id:" label-for="game_id">
            <b-form-input id="game_id" v-model="$v.formAddResult.game_id.$model"
                type="number" ></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.formAddResult.game_id.required">
            game_id is required </b-form-invalid-feedback>
            </b-form-group>
                <!-- result -->
            <b-form-group id="input-result" label-cols-sm="3" label="Result:" label-for="result">
            <b-form-input id="result" v-model="$v.formAddResult.result.$model"
                type="text"></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.formAddResult.result.required">
            result is required </b-form-invalid-feedback>
            </b-form-group>
            <b-button id="but3" type="reset" variant="danger">Reset</b-button>
            <b-button id="but4" type="submit" variant="primary" style="width:300px;">Add Result To Game</b-button>
        </b-form>
        <b-alert class="mt-2" v-if="formAddResult.submitError" variant="warning" dismissible show>
        Adding Result To Game failed: {{ formAddResult.submitError }}
        </b-alert>
      </div><br><br><br>

      <div id="addMR"><b><u>Add Match Report To Game:</u></b><br><br>
      <b-form @submit.prevent="AddingMatchReport" @reset.prevent="onReset" class="form">
        <!-- game_id -->
        <b-form-group id="input-game_id" label-cols-sm="3" label="Game Id:" label-for="game_id">
          <b-form-input id="game_id" v-model="$v.formAddMR.game_id.$model"
          type="number" ></b-form-input>
          <b-form-invalid-feedback id="alert" v-if="!$v.formAddMR.game_id.required">
          game_id is required </b-form-invalid-feedback>
          </b-form-group>
          <!-- minuteEvent -->
          <b-form-group id="input-minuteEvent" label-cols-sm="3" label="Minute Event:" label-for="minuteEvent">
            <b-form-input id="minuteEvent" v-model="$v.formAddMR.minuteEvent.$model"
                type="number" ></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.formAddMR.minuteEvent.required">
            minuteEvent is required </b-form-invalid-feedback>
            </b-form-group>
            <!-- event -->
          <b-form-group id="input-event" label-cols-sm="3" label="Event:" label-for="event">
            <b-form-input id="event" v-model="$v.formAddMR.event.$model"
                type="number" ></b-form-input>
            <b-form-invalid-feedback id="alert" v-if="!$v.formAddMR.event.required">
            event is required </b-form-invalid-feedback>
            </b-form-group>
            <b-button id="but5" type="reset" variant="danger">Reset</b-button>
            <b-button id="but6" type="submit" variant="primary" style="width:300px;">Add Match Report To Game</b-button>
        </b-form>
        <b-alert class="mt-2" v-if="formAddMR.submitError" variant="warning" dismissible show>
        Adding Match Report To Game failed: {{ formAddMR.submitError }}
        </b-alert><br><br>
      </div>
    </div>
    <!-- close div if page-->
    </div>
    <div id="notAllowed" v-else-if="!$root.store.username || $root.store.username!='manager'">You Have No Permissions To This Page</div>
  <!-- close div container -->
  </div>
</template>

<script>
import GamePreview from "../components/GamePreview.vue";
import {
  required,
  alpha
} from "vuelidate/lib/validators";
export default {
  name: "CurrentGames",
  components: {
    GamePreview
  }, 
  data() {
    return {
      future_games: null,
      past_games: null,
      match_reports_dict: null,
      allGames: null,
      sortBy: "No Sort",
      formNewGame: {
        referee_name: "",
        date_time: "",
        home_team: "",
        away_team: "",
        stadium: "",
      },
      formAddResult: {
        game_id: "",
        result: "",
      },
      formAddMR: {
        game_id: "",
        minuteEvent: "",
        event: "",
      },
      errors: [],
      validated: false
    }
  },
  validations: {
    formNewGame: {
      referee_name: {
        required,
        alpha
      },
      date_time: {
          required
      },
      home_team: {
        required,
        alpha
      },
      away_team: {
        required,
        alpha
      },
      stadium: {
        required,
        alpha
      },
    },
    formAddResult: {
      game_id: {
        require
      },
      result: {
        require
      },
    },
    formAddMR: {
      game_id: {
        require
      },
      minuteEvent: {
        require
      },
      event: {
        required
      },
    }
      
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.formNewGame[param];
      return $dirty ? !$error : null;
    },
    async addNewGame() {
      try {
        const response = await this.axios.post(
          "http://localhost:3000/users/addGame",
          {
            referee_name: this.formNewGame.referee_name,
            home_team: this.formNewGame.home_team,
            away_team: this.formNewGame.away_team,
            date_time: this.formNewGame.date_time,
            stadium: this.formNewGame.stadium,
          }
        );
        console.log(response);
        if(response.status === 201){
          this.$root.toast("AddGame", "The game successfully added", "success");
        }
        this.$router.push("/currentGames");
        } catch (err) {
        console.log(err.response);
        this.formNewGame.submitError = err.response.data.message;
      }
    },
    async addResultToGame() {
      try {
        const response = await this.axios.post(
          "http://localhost:3000/addResultGame",
          {
            game_id: this.formAddResult.game_id,
            result: this.formAddResult.result,
          }
        );
        console.log(response);
        if(response.status === 201){
          this.$root.toast("AddResultToGame", "The result successfully added to the game", "success");
        }
        this.$router.push("/currentGames");
        } catch (err) {
        console.log(err.response);
        this.formAddResult.submitError = err.response.data.message;
      }
    },
    async addMRToGame() {
      try {
        const response = await this.axios.post(
          "http://localhost:3000/addMatchReportToGame",
          {
            game_id: this.formAddMR.game_id,
            minuteEvent: this.formAddMR.minuteEvent,
            event: this.formAddMR.event,
          }
        );
        console.log(response);
        if(response.status === 201){
          this.$root.toast("AddMatchReportToGame", "The match report successfully added to the game", "success");
        }
        this.$router.push("/currentGames");
        } catch (err) {
        console.log(err.response);
        this.formAddMR.submitError = err.response.data.message;
      }
    },
    AddingGame() {
      console.log("adding method called");
      console.log("add game method go");
      this.addNewGame();
    },
    AddingResult() {
      console.log("adding method called");
      console.log("add result method go");
      this.addResultToGame();
    },
    AddingMatchReport() {
      console.log("adding method called");
      console.log("add match report method go");
      this.addMRToGame();
    },
    onReset() {
      this.form = {
        referee_name: "",
        date_time: "",
        home_team: "",
        away_team: "",
        stadium: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },

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
  justify-content: space-between;
  font-size: 45px;
  align-self: center;
}
.actions {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 100px;
  width: 600px;
  font-size: 30px;
  font-weight: bold;
}
.title {
  text-align: center;
  margin-top: 20px;
  font-size: 50px;
  color: #2f941d;
}
#sort-input {
  // width: 1100px; 
  margin-top: 30px;
  margin-left: 50px;
}
#notAllowed {
    text-align: center;
    color: red;
    font-size: 55px;
}
#alert {
    text-align: center;
    color: red;
    font-size: 15px;
    font-weight: bold;
}
// #newGame {
  // width: 500px;
  // font-size: 20px;
  // font-weight: bold;
//   margin-top: 50px;
//   margin-left: 150px;
// }
// #bonus {
//   margin-top: 50px;
//   margin-left: 150px;
// }
#but1 {
  font-size: 25px;
}
#but2 {
  font-size: 25px;
}
#but3 {
  font-size: 25px;
}
#but4 {
  font-size: 25px;
}
#but5 {
  font-size: 25px;
}
#but6 {
  font-size: 25px;
}

</style>