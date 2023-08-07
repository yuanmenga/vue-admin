<template>
  <div class="-ml-5">
    <div class="flex justify-between flex-col md:flex-row">
      <el-card
        shadow="always"
        :body-style="{ padding: '15px' }"
        v-for="index of 4"
        class="flex-1 ml-5 md:mx-5 mt-2 md:mt-0"
      >
        <template #header>
          <div class="flex justify-between">
            <span class="text-[15px] text-gray-600">用户数</span>
            <el-tag class="ml-2" type="success">月</el-tag>
          </div>
        </template>
        <div class="home">
          <div class="">
            <span>$12894{{ index }}</span>
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
      <el-card
        shadow="always"
        :body-style="{ padding: '10px' }"
        class="flex-1 md:mr-4 md:ml-0 ml-5"
      >
        <template #header>
          <div>
            <span class="text-[15px] text-gray-600">用户统计</span>
          </div>
        </template>
        <div
          id="main"
          class="md:w-full md:h-[540px] w-[90vw] h-[290px] -mt-12 md:mt-0"
        ></div>
      </el-card>
      <el-card
        shadow="always"
        :body-style="{ padding: '10px' }"
        class="flex-1 mt-5 md:mt-0 md:ml-0 ml-5"
      >
        <template #header>
          <div>
            <span class="text-[15px] text-gray-600">销售统计</span>
          </div>
        </template>
        <div
          id="mains"
          class="md:w-full md:h-[540px] w-[90vw] h-[290px] -mt-10 md:mt-0"
        ></div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
let a: any;
let b: any;
const echattss = () => {
  let myChart = echarts.init(document.getElementById("main") as HTMLElement);
  let myCharts = echarts.init(document.getElementById("mains") as HTMLElement);
  a = myChart;
  b = myCharts;
  myChart.setOption({
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "10%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        top: "10%",
        radius: ["40%", "60%"],
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
  });
  myCharts.setOption({
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "10%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        top: "10%",
        radius: ["40%", "60%"],
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
  });
};
nextTick(() => {
  echattss();
});
window.addEventListener("resize", () => {
  a.dispose();
  b.dispose();
  echattss();
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
  @apply h-[600px]  md:m-5 mt-5 flex md:flex-row flex-col;
}
</style>
