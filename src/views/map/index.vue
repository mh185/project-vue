<template>
  <div>
    <el-amap
      vid="amap"
      :plugin="plugin"
      class="amap-demo"
      :center="center"
      style="height: 800px"
      :zoom="zoom"
      :events="events"
      ref="map"
    ></el-amap>
    <div class="toolbar">
      <span>{{ loaded }}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    let that = this;
    return {
      center: [121.59996, 31.197646],
      adress: "",
      loaded: "定位中,请稍候!",
      zoom: 1,
      events: {
        //地图点击事件
        click: (e) => {
          console.log(e);
          let { lng, lat } = e.lnglat;
          that.lng = lng;
          that.lat = lat;
          // 这里通过高德 SDK 完成。
          var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all",
          });
          geocoder.getAddress([lng, lat], function (status, result) {
            if (status === "complete" && result.info === "OK") {
              if (result && result.regeocode) {
                that.loaded = result.regeocode.formattedAddress;
                that.center = [that.lng, that.lat];
                that.$nextTick();
              }
            }
          });
        },
        //地图平移事件
      },
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  alert(result.formattedAddress);
                  that.zoom = 18; // 如果key是企业的，还可以直接result.addressComponent获取省市，周边等信息
                  that.adress = result.formattedAddress;
                  that.loaded = "当前定位为:" + that.adress;
                  that.center = [result.position.lng, result.position.lat];
                  that.componentMarker.position = [
                    result.position.lng,
                    result.position.lat,
                  ];
                  that.$nextTick();
                } else {
                  that.loaded = "获取定位失败,请重试!";
                }
              });
            },
          },
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style>
</style>