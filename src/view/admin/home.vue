<template>
  <div>
    <div class="flex -translate-y-5 flex-col md:flex-row">
      <el-card
        shadow="always"
        :body-style="{ padding: '15px' }"
        v-for="index of 4"
        class="flex-1 m-5"
      >
        <template #header>
          <div class="flex justify-between">
            <span class="text-[15px] text-gray-600">用户数</span>
            <el-tag class="ml-2" type="success">月</el-tag>
          </div>
        </template>
        <div class="home">
          <div class="">
            <span>$12894</span>
            <i class="fas fa-coins"></i>
          </div>
          <div class="mt-2">
            <span>总人数</span>
            <span class="-mr-3">200人</span>
          </div>
        </div>
      </el-card>
    </div>
    <div class="echarts">
      <div id="main" style="width: 600px; height: 500px"></div>
      <div id="mains" style="width: 600px; height: 500px"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { nextTick } from "vue";

nextTick(() => {
  let myChart = echarts.init(document.getElementById("main") as HTMLElement);
  let myCharts = echarts.init(document.getElementById("mains") as HTMLElement);
  let option;
  option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };
  let options = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  myCharts.setOption(options);
});
</script>
<script></script>
<style scoped lang="scss">
.home {
  div {
    @apply flex justify-between items-center text-gray-600;
    i {
      @apply text-[#f1c40f] text-[18px];
    }
  }
}
.echarts {
  @apply bg-white m-5 -translate-y-10 flex justify-evenly;
}
</style>
