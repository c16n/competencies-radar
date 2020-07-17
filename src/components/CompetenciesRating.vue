<template>
  <div v-if="competenciesRating">
    <div class="mt-4">1: Novice - 2: Advanced Beginner - 3: Practitioner - 4: Proficient - 5: Expert</div>
    <button
      type="button"
      class="btn btn-primary mt-3 mb-3"
      :disabled="competencies == null || competencies.length < 1"
      v-on:click="$emit('update:competenciesRating', competenciesRating)"
    >{{ buttonName }}</button>
    <div class="text-left mt-3 ml-5" v-for="(competency, index) in competencies" :key="index">
      <span class="font-weight-bold">{{ competency }}</span>
      <br>
      <input type="radio" v-model="competenciesRating[competency]" :name="competency" value="1"> Novice
      <input
        type="radio"
        class="ml-2"
        v-model="competenciesRating[competency]"
        :name="competency"
        value="2"
      > Advanced Beginner
      <input
        type="radio"
        class="ml-2"
        v-model="competenciesRating[competency]"
        :name="competency"
        value="3"
      > Practitioner
      <input
        type="radio"
        class="ml-2"
        v-model="competenciesRating[competency]"
        :name="competency"
        value="4"
      > Proficient
      <input
        type="radio"
        class="ml-2"
        v-model="competenciesRating[competency]"
        :name="competency"
        value="5"
      > Expert
    </div>
    <button
      type="button"
      class="btn btn-primary mt-3 mb-3"
      :disabled="competencies == null || competencies.length < 1"
      v-on:click="$emit('update:competenciesRating', competenciesRating)"
    >{{ buttonName }}</button>
  </div>
</template>

<script>
export default {
  name: "CompetenciesInput",
  props: {
    competencies: Array,
    prefilledRating: {
      type: Object,
      required: false,
      default: null
    }
  },
  data: function() {
    return {
      competenciesRating: null
    };
  },
  created() {
    if (this.prefilledRating) {
      this.competenciesRating = this.prefilledRating;
    } else {
      this.competenciesRating = this.competencies.reduce(function(map, obj) {
        map[obj] = 0;
        return map;
      }, {});
    }
  },
  computed: {
    buttonName() {
      return this.prefilledRating != null ? "Update Radar" : "Create Radar";
    }
  }
};
</script>
