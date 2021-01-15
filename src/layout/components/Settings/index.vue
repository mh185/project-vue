<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">全局设置</h3>
      <div>
        夜间模式
        <el-switch
          v-model="value"
          @change="childMethod()"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
    </div>
  </div>
</template>

<script>
import { setColor, getColor } from "@/utils/auth";
export default {
  data() {
    return {
      value: true,
    };
  },
  created() {
    this.value = (getColor() == "true" ? true : false);
  },
  methods: {
    childMethod() {
      setColor(this.value);
      this.$message.success("成功");
      this.$emit('fatherMethod')
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right;
  }
}
</style>
