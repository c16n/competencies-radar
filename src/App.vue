<template>
  <div id="app" class="container-fluid mt-2">
    <div class="row">
      <header class="col-sm-12">
        <img width="50" height="50" src="logo.png">
        <h1>Competencies Radar</h1>
      </header>
      <nav class="col-sm-12 mt-3">
        <p>
          <span :class="{'font-weight-bold': step == 1}">1. Enter Competencies</span> -
          <span :class="{'font-weight-bold': step == 2}">2. Rate yourself</span> -
          <span :class="{'font-weight-bold': step == 3}">3. Set your Goals</span>
        </p>

        <hr>
      </nav>
      <div class="col-sm-12 col-lg-4" v-if="step == 1">
        <h2>1. Competencies</h2>
        <p>Enter a list of competencies that you want to rate</p>
        <hr>
        <CompetenciesInput v-on:update:competencies="competencies = $event; step = 2;"/>
      </div>
      <div class="col-sm-12 col-lg-4 pt-sm-5 pt-lg-0" v-if="step == 2">
        <h2>2. Rate yourself</h2>
        <p>How would you rate yourself right now?</p>
        <hr>
        <CompetenciesRating
          :competencies="competencies"
          v-on:update:competenciesRating="showRadar"
        />
      </div>
      <div class="col-sm-12 col-lg-4 pt-sm-5 pt-lg-0" v-if="step == 3">
        <h2>3. Set your Goals</h2>
        <p>Which competencies do you want to improve?</p>
        <hr>
        <CompetenciesRating
          v-show="competenciesRating != null"
          :competencies="competencies"
          :prefilled-rating="competenciesRating"
          v-on:update:competenciesRating="updateRadar"
        />
      </div>
      <div class="col-sm-12 col-lg-4 pt-sm-5 pt-lg-0" v-if="step == 4">
        <h2>You finished your Radar &#127881;</h2>
        <hr>
        <button
          type="button"
          class="btn btn-primary mt-3 mb-3"
          v-on:click="createNewRadar"
        >Create another radar</button>
      </div>
      <div class="col-sm-11 col-lg-5 offset-lg-1" v-if="(step == 3 || step == 4)">
        <Radar
          :competenciesRating="competenciesRating"
          :futureCompetenciesRating="futureCompetenciesRating"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CompetenciesInput from "./components/CompetenciesInput";
import CompetenciesRating from "./components/CompetenciesRating";
import Radar from "./components/Radar";

export default {
  name: "App",
  components: {
    CompetenciesInput,
    CompetenciesRating,
    Radar
  },
  data: function() {
    return {
      competencies: null,
      competenciesRating: null,
      futureCompetenciesRating: null,
      step: 1
    };
  },
  methods: {
    showRadar(event) {
      this.competenciesRating = event;
      this.step = 3;
      window.scrollTo(0,0);
    },
    updateRadar(event) {
      this.futureCompetenciesRating = event;
      this.step = 4;
      window.scrollTo(0,0);
    },
    createNewRadar() {
      location.reload();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
