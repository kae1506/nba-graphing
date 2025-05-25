const ApexCharts = defineAsyncComponent(() => import("vue3-apexcharts"));
import Vue from "vue";

const app = Vue.createApp({});
app.use(ApexCharts);