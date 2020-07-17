<template>
  <div>
    <radar-chart ref="radarChart" v-if="competenciesRating != null" :chart-data="data" :options="options"></radar-chart>
  </div>
</template>

<script>
import RadarChart from "./RadarChart.js";

export default {
  name: "CompetenciesInput",
  components: { RadarChart },
  props: {
    competenciesRating: Object,
    futureCompetenciesRating: Object
  },
  data: function() {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: "Current state",
            backgroundColor: "rgba(125, 206, 213, 0.4)",
            data: []
          },
          {
            label: "Goal",
            backgroundColor: "rgba(232, 55, 138, 0.2)",
            data: []
          }
        ]
      },
      options: {
        responsive: true,
        showTooltips: false,
        events: ['click'],
        scale: {
          angleLines: {
            display: false
          },
          ticks: {
            min: 0,
            max: 5,
            stepSize: 1
          }
        }
      }
    };
  },
  created() {
    if (this.competenciesRating != null) {
      for (let key of Object.keys(this.competenciesRating)) {
        this.data.labels.push(key);
        this.data.datasets[0].data.push(this.competenciesRating[key]);
      }
    }
  },
  watch: {
    futureCompetenciesRating(newVal) {
      if (newVal != null) {
        for (let label of this.data.labels) {
          this.data.datasets[1].data.push(newVal[label]);
          this.$refs.radarChart.update();
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
canvas {
  width: 500px !important;
  height: 600px !important;
}
</style>
