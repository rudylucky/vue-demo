<template>
  <ant-layout class="lo-frame">
    <ant-sider class="sd">left sidebar</ant-sider>
    <ant-layout class="lo-middle">
      <ant-header class="hd">
        <custom-header></custom-header>
      </ant-header>
      <ant-content class="ctt">
        <router-view></router-view>
      </ant-content>
      <ant-footer class="ft">footer</ant-footer>
    </ant-layout>
  </ant-layout>
</template>

<script>
import { Layout } from "ant-design-vue";
import Button from "../components/base/Button";
import CustomHeader from "../components/layout/Header";
const { Header, Content, Footer, Sider } = Layout;

export default {
  name: "index",
  components: {
    AntLayout: Layout,
    Antlayout: Header,
    AntContent: Content,
    AntFooter: Footer,
    AntSider: Sider,
    AntButton: Button,
    AntHeader: Header,
    CustomHeader,
  }
};
</script>

<style lang="scss" scoped>
.lo-frame {
  height: 100%;
}
.hd {
  background-color: #fff;
  padding: 0;
  height: 60px;
}
.sd {
  overflow: auto;
  background-color: #13C2C2;
  height: 100%;
  flex-shrink: 0;
  left: 0;
}
.ctt {
  overflow: auto;
  background-color: #fff;
  margin: 25px 25px 0;
}
</style>