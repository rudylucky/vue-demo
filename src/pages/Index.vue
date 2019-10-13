<template>
  <ant-layout class="lo-frame">
    <ant-header class="hd">header</ant-header>
    <ant-layout class="lo-middle">
      <ant-sider class="sd">left sidebar</ant-sider>
      <ant-content class="ct">
        <ant-button>确定</ant-button>
      </ant-content>
    </ant-layout>
    <ant-footer class="ft">footer</ant-footer>
  </ant-layout>
</template>

<script>
import { Layout } from "ant-design-vue";
import Button from "../components/base/Button";
const { Header, Content, Footer, Sider } = Layout;

export default {
  name: "index",
  components: {
    AntLayout: Layout,
    Antlayout: Header,
    AntContent: Content,
    AntFooter: Footer,
    AntSider: Sider,
    AntButton: Button
  }
};
</script>

<style lang="scss" scoped>
.hd {
  background-color: #9c9;
  height: 60px;
}
.sd {
  overflow: auto;
  background-color: #cc9;
  height: 100%;
  flex-shrink: 0;
  left: 0;
}
.ct {
  left: 200px;
  background-color: #9cc;
  flex-grow: 1;
  width: 600px;
  overflow: auto;
}

.ft {
  background-color: #99c;
}

.lo-frame {
  height: 100%;
}
.lo-middle {
  width: 100%;
  display: flex;
}
</style>