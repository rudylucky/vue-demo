<template>
  <a-footer class="ft">
    <span>MES</span>
  </a-footer>
</template>

<script>
import { Layout } from "ant-design-vue";
const { Footer } = Layout;
export default {
  name: "my-footer",
  components: {
    AFooter: Footer
  }
};
</script>

<style>
  .ft {
    text-align: center;
    padding: 8px;
  }
</style>