<template>
  <a-layout class="lo-frame">
    <my-sider :menuCollapsed="menuCollapsed" class="sd" />
    <a-layout class="lo-middle">
      <a-header class="hd">
        <my-header :menuCollapsed="menuCollapsed" @toggleMenuCollapsed="toggleMenuCollapsed"></my-header>
      </a-header>
      <a-content class="ctt">
        <router-view></router-view>
      </a-content>
        <my-footer class="ft"></my-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { Layout } from "ant-design-vue";
import MyHeader from "../components/layout/Header";
import MySider from "../components/layout/MySider";
import MyFooter from "../components/layout/Footer";
const { Header, Content } = Layout;

export default {
  name: "index",
  components: {
    ALayout: Layout,
    AContent: Content,
    AHeader: Header,
    MyHeader,
    MySider,
    MyFooter
  },
  data: function() {
    return {
      menuCollapsed: false
    };
  },
  methods: {
    toggleMenuCollapsed: function() {
      this.menuCollapsed = !this.menuCollapsed;
    }
  }
};
</script>

<style lang="scss" scoped>
.lo-frame {
  height: 100%;
  .hd {
    background-color: #fff;
    padding: 0;
    height: 60px;
  }
  .sd {
    overflow: auto;
    background-color: #13c2c2;
  }
  .ctt {
    overflow: auto;
    background-color: #fff;
    margin: 25px 25px 0;
    padding: 20px;
  }
}
</style>