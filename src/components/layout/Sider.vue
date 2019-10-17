<template>
  <div>
    <div class="ct-logo"></div>
    <a-menu mode="vertical" theme="dark" :inlineCollapsed="menuCollapsed">
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="mail" />
          <span>系统设置</span>
        </span>
        <a-menu-item key="1">菜单配置</a-menu-item>
        <a-menu-item key="3">员工</a-menu-item>
        <a-menu-item key="2">部门</a-menu-item>
        <a-menu-item key="4">角色</a-menu-item>
        <a-menu-item key="5">用户</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="appstore" />
          <span>基础数据</span>
        </span>
        <a-menu-item key="1">工厂</a-menu-item>
        <a-menu-item key="2">产线</a-menu-item>
        <a-menu-item key="3">车间</a-menu-item>
        <a-menu-item key="4">工位</a-menu-item>
        <a-menu-item key="5">工作中心</a-menu-item>
        <a-menu-item key="6">工序</a-menu-item>
        <a-menu-item key="7">工艺</a-menu-item>
        <a-menu-item key="8">工艺路径</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title">
          <a-icon type="setting" />
          <span>生产</span>
        </span>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { Menu, Icon } from "ant-design-vue";
const { SubMenu, Item, MenuItemGroup } = Menu;

export default {
  name: "sider",
  components: {
    AMenu: Menu,
    ASubMenu: SubMenu,
    AMenuItem: Item,
    AMenuItemGroup: MenuItemGroup,
    AIcon: Icon
  },
  data() {
    return {
      menuCollapsed: true,
      list: [
        {
          key: "1",
          title: "Option 1"
        },
        {
          key: "2",
          title: "Navigation 2",
          children: [
            {
              key: "2.1",
              title: "Navigation 3",
              children: [{ key: "2.1.1", title: "Option 2.1.1" }]
            }
          ]
        }
      ]
    };
  },
  mounted: function() {
    console.log(this.menuCollapsed);
  }
};
</script>

<style>
.ct-logo {
  background-color: #12d6d6;
  height: 60px;
}
</style>