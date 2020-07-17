import { Radar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Radar,
  name: "RadarChart",
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  methods: {
    update() {
       this.$data._chart.update()
     }
  }
};
