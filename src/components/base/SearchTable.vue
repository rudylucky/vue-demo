<template>
  <div>
    <div class="container-search">
      <div class="search-item" v-for="item in searchItems" v-bind:key="item.dataIndex">
        <span>{{item.title}}：</span>
        <a-input class="input-search" size="small" />
      </div>
    </div>
    <a-locale-provider :locale="locale">
      <a-table
        :columns="columns"
        :dataSource="data"
        bordered
        size="small"
        class="table"
        :pagination="pagination"
      />
    </a-locale-provider>
  </div>
</template>

<script>
import { Table, Button, Input, LocaleProvider } from "ant-design-vue";
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default {
  name: "user-info",
  components: {
    ATable: Table,
    AButton: Button,
    AInput: Input,
    ALocaleProvider: LocaleProvider
  },
  data() {
    const searchItems = this.$props.columns.filter(v => v.search === true);
    return {
      locale: zh_CN,
      searchItems,
      pagination: {
        showSizeChanger: true,
        showQuickJumper: true,
        size: "small",
        showTotal: total => `共 ${total} 条数据`,
        total: this.$props.columns.length
      }
    };
  },
  props: ["data", "columns"]
};
</script>

<style lang="scss" scoped>
.container-search {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  .search-item {
    margin: 5px 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .input-search {
      width: 130px;
    }
  }
}
</style>