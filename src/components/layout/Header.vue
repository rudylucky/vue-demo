<template>
  <div class="ct">
    <span class="ct-logout right">
      <ant-icon class="ic-shrink" type="logout" />退出
    </span>
    <span class="ct-setting right">
      <ant-icon class="ic-shrink" type="setting" />设置
    </span>
    <span class="ct-max right" @click="toggleFullScreen">
      <ant-icon class="ic-shrink" type="fullscreen" />全屏
    </span>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";
export default {
  name: "custom-header",
  components: {
    AntIcon: Icon
  },
  methods: {
    toggleFullScreen: function() {
      document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen();
    },
    toggleMenuCollapsed: function() {
      this.$emit("toggleMenuCollapsed");
    }
  }
};
</script>

<style lang="scss" scoped>
.ant-table-body {
  margin: 0;
}
.sd {
  overflow: auto;
  background-color: #13c2c2;
}
.ct {
  span {
    user-select: none;
    display: inline-block;
    height: 100%;
    width: 80px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    .ic-shrink {
      color: #aaa;
      margin-right: 5px;
    }
  }
  span:hover {
    background-color: #eee;
  }
  .right {
    float: right;
  }
  .ct-shrink {
    width: 60px;
    font-size: 20px;
  }
  .ct-max {
  }
  .ct-setting {
  }
  .ct-logout {
  }
}
</style>