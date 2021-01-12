<template>
  <div class="content">
    <header>
      <h1>数据可视化-Echarts</h1>
      <div class="showTime">
        当前时间是：<a class="datastyle txt">{{ date | formatDateTime }}</a>
      </div>
    </header>
    <div class="mainbox">
      <div class="column">
        <div class="panel">
          <h2>饼图</h2>
          <div class="chart">
            <pieChart />
          </div>
        </div>
        <div class="panel">
          <h2>柱形图</h2>
          <div class="chart">
            <barGraph />
          </div>
        </div>
        <div class="panel">
          <h2>折线图</h2>
          <div class="chart">
            <lineChart />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>1912309</li>
              <li>213080</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>前端需求人数</li>
              <li>市场供应人数</li>
            </ul>
          </div>
        </div>
        <div class="map"></div>
      </div>
      <div class="column">
        <div class="panel">
          <h2>散点图</h2>
          <div class="chart">
            <scatterDiagram />
          </div>
        </div>
        <div class="panel">
          <h2>雷达图</h2>
          <div class="chart">
            <radarMap />
          </div>
        </div>
        <div class="panel">
          <h2>柱形图</h2>
          <div class="chart">图标</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pieChart from "@/views/dashboard/pieChart"; // 饼图
import barGraph from "@/views/dashboard/barGraph"; //柱状图
import lineChart from "@/views/dashboard/lineChart"; //折线图
import scatterDiagram from "@/views/dashboard/scatterDiagram"; //散点图
import radarMap from "@/views/dashboard/radarMap"; //雷达图
export default {
  components: { pieChart, barGraph, lineChart, scatterDiagram, radarMap },
  data() {
    return {
      date: new Date(),
    };
  },
  filters: {
    formatDateTime(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    },
  },
  mounted() {
    var that = this;
    this.timer = setInterval(() => {
      that.date = new Date(); //修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
    }
  },
};
</script>

<style lang="scss" scoped>
.content {
  background: url("../../assets/bg.png") no-repeat;
}
header {
  position: relative;
  height: 1.25rem;
  background: url("../../assets/tab_active.png") no-repeat;
  background-size: 100% 100%;
  h1 {
    font-size: 0.475rem;
    color: #fff;
    text-align: center;
    line-height: 1.25rem;
  }
  .showTime {
    position: absolute;
    right: 1rem;
    top: 0;
    line-height: 1.25rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.25rem;
  }
}
.mainbox {
  display: flex;
  // min-width: 1024px;
  // max-width: 1920px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  .column {
    flex: 3;
    .no {
      background: rgba(101, 132, 226, 0.1);
      padding: 0.1875rem;
      color: #fff;
      .no-hd {
        border: 1px solid rgba(25, 186, 139, 0.17);
        ul {
          display: flex;
          li {
            flex: 1;
            line-height: 1rem;
            font-size: 0.875rem;
            color: #ffeb7b;
            text-align: center;
          }
        }
      }
      .no-bd {
        ul {
          display: flex;
          li {
            flex: 1;
            text-align: center;
            color: #fff;
            font-size: 0.225rem;
            height: 0.5rem;
            line-height: 0.5rem;
            padding-top: 0.125rem;
          }
        }
      }
    }
    .map {
      height: 10.125rem;
    }
  }
  .column:nth-child(2) {
    flex: 5;
    margin: 0 0.125rem 0.125rem;
  }
  .panel {
    position: relative;
    height: 3.875rem;
    border: 1px solid rgba(25, 186, 139, 0.17);
    padding: 0 0.1875rem 0.5rem;
    margin-bottom: 0.1875rem;
    background: url("../../assets/cultura_bj.png");
    h2 {
      height: 0.6rem;
      color: #fff;
      line-height: 0.6rem;
      font-size: 0.25rem;
      text-align: center;
      font-weight: 400;
    }
    .chart {
      height: 3rem;
    }
  }
}
</style>