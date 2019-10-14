<template>
  <div class="ct">
    <span class="ct-shrink">
      <ant-icon class="ic-shrink" type="menu-fold" />
    </span>
    <span class="ct-logout right">
      <ant-icon class="ic-shrink" type="logout" />退出
    </span>
    <span class="ct-setting right">
      <ant-icon class="ic-shrink" type="setting" />设置
    </span>
    <span class="ct-max right">
      <ant-icon class="ic-shrink" type="menu-fold" />全屏
    </span>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";
export default {
  name: "custom-header",
  components: {
    AntIcon: Icon
  }
};
</script>

<style lang="scss" scoped>
.ct {
  background-color: #fff;
  span {
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