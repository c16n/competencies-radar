<template>
  <div class="hello">
    <button
      type="button"
      class="btn btn-primary"
      :disabled="competenciesInput == null"
      v-on:click="$emit('update:competencies', competencies)"
    >Rate yourself</button>
    <br>
    <br>
    <textarea v-model="competenciesInput" id="competencies" rows="20" cols="40"></textarea>
  </div>
</template>

<script>
export default {
  name: "CompetenciesInput",
  data: function() {
    return {
      competenciesInput: null
    };
  },
  computed: {
    competencies() {
      if (this.competenciesInput) {
        return this.competenciesInput.split("\n");
      }
      return null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
