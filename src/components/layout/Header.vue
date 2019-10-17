<template>
  <div class="ct">
    <span class="ct-shrink" @click="toggleMenuCollapsed">
      <a-icon class="ic-shrink" :type="menuCollapsed ? 'menu-unfold' : 'menu-fold'" />
    </span>
    <span class="ct-logout right">
      <a-icon class="ic-shrink" type="logout" />退出
    </span>
    <span class="ct-setting right">
      <a-icon class="ic-shrink" type="setting" />设置
    </span>
    <span class="ct-max right" @click="toggleFullScreen">
      <a-icon class="ic-shrink" type="fullscreen" />全屏
    </span>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";
export default {
  name: "custom-header",
  components: {
    AIcon: Icon
  },
  props: ['menuCollapsed'],
  methods: {
    toggleFullScreen: function() {
      document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen();
    },
    toggleMenuCollapsed: function() {
      this.$emit("toggleMenuCollapsed");
    }
  },
  beforeMount() {
    console.log(this.$props.menuCollapsed);
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