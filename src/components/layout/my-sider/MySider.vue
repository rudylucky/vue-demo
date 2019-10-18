<template>
  <a-sider :width="menuCollapsed ? 0 : '100px'">
    <div class="ct-frame">
      <div class="ct-module">
        <div class="ct-logo"></div>
        <div class="ct-avatar">
          <div class="avatar">
            <a-icon type="weibo-circle" class="img-avatar" />
          </div>
        </div>
        <div
          class="md"
          @mouseenter="handleMouseIn('system')"
          @mouseleave="handleMouseOut('system')"
        >
          <a-icon type="setting" theme="filled" />
          <span>系统</span>
        </div>
        <div class="md" @mouseenter="handleMouseIn('basedata')" @mouseleave="handleMouseOut">
          <a-icon type="database" theme="filled" />
          <span>基础</span>
        </div>
        <div class="md" @mouseenter="handleMouseIn('produce')" @mouseleave="handleMouseOut">
          <a-icon type="tool" theme="filled" />
          <span>生产</span>
        </div>
        <div class="md" @mouseenter="handleMouseIn('quality')" @mouseleave="handleMouseOut">
          <a-icon type="safety-certificate" theme="filled" />
          <span>质量</span>
        </div>
      </div>
      <div
        class="ct-page"
        v-show="showPage"
        @mouseenter="handleMouseIn"
        @mouseleave="handleMouseOut"
      >
        <div class="md">
          <a-icon type="safety-certificate" theme="filled" />
          <span>{{ selectedModule }}</span>
        </div>
      </div>
    </div>
  </a-sider>
</template>

<script>
import { Icon, Layout } from "ant-design-vue";
const { Sider } = Layout;

export default {
  name: "my-sider",
  components: {
    AIcon: Icon,
    ASider: Sider
  },
  props: ['menuCollapsed'],
  data() {
    return {
      showPage: false,
      selectedModule: null,
    };
  },
  methods: {
    toggleMenuCollapsed() {
      this.menuCollapsed = !this.menuCollapsed;
    },
    handleMouseIn(page) {
      this.showPage = true;
      if (typeof page != "string") {
        return;
      }
      this.selectedModule = page;
    },
    handleMouseOut() {
      this.showPage = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.ct-shrink {
  position: relative;
  z-index: 120;
  user-select: none;
  height: 60px;
  width: 80px;
  text-align: center;
  cursor: pointer;
  .ic-shrink {
    margin-top: 18px;
    font-size: 25px;
    color: #aaa;
  }
  &:hover {
    background-color: #eee;
  }
}
.ct-frame {
  .ct-module {
    .ct-logo {
      background-color: #12d6d6;
      height: 60px;
    }
    .ct-avatar {
      margin: 5px auto;
      padding-top: 5px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      background-color: #12d6d6;
      .avatar {
        text-align: center;
        .img-avatar {
          font-size: 50px;
        }
      }
    }
    .md {
      span {
        margin: 0 5px 0 5px;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      height: 47px;
      font-size: 17px;
      color: #fff;
      user-select: none;
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
  .ct-page {
    z-index: 100;
    position: fixed;
    left: 100px;
    top: 60px;
    width: 150px;
    height: 100%;
    background-color: #08979c;
    .md {
      cursor: pointer;
      span {
        margin: 0 30px 0 5px;
      }
      display: flex;
      padding-left: 20px;
      align-items: center;
      height: 47px;
      font-size: 17px;
      color: #fff;
      user-select: none;
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>