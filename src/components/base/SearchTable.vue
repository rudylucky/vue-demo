<template>
  <div>
    <a-collapse defaultActiveKey="1" :bordered="false">
      <template v-slot:expandIcon="props">
        <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
      </template>
      <a-collapse-panel header="搜索" key="1" class="collapse-panel">
        <div class="container-search">
          <div class="search-item" v-for="item in searchItems" v-bind:key="item.dataIndex">
            <span>{{item.title}}：</span>
            <a-input class="input-search" size="default" />
          </div>
        </div>
      </a-collapse-panel>
    </a-collapse>
    <div class="container-search-button">
      <a-button class="button-op" type="primary">新增</a-button>
      <a-button class="button-op" type="primary">编辑</a-button>
      <a-button class="button-op" type="danger">删除选中</a-button>
      <a-button class="button-search">重置</a-button>
      <a-button class="button-search" type="primary">搜索</a-button>
    </div>
    <a-locale-provider :locale="locale">
      <a-table
        :rowSelection="rowSelection"
        :scroll="{x: 1000}"
        :columns="columns"
        :dataSource="data"
        bordered
        size="small"
        class="table"
        :pagination="pagination"
      >
        <template slot="operation">
          <a style="margin-right: 10px;">编辑</a>
          <a>删除</a>
        </template>
      </a-table>
    </a-locale-provider>
  </div>
</template>

<script>
import {
  Table,
  Button,
  Input,
  Checkbox,
  LocaleProvider,
  Collapse
} from "ant-design-vue";
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
const { Panel } = Collapse;

export default {
  name: "user-info",
  components: {
    ATable: Table,
    AButton: Button,
    AInput: Input,
    ACollapse: Collapse,
    ACollapsePanel: Panel,
    ALocaleProvider: LocaleProvider,
    ACheckbox: Checkbox
  },
  data() {
    const rowSelection = !this.$props.rowSelection ? null : {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      }
    };

    console.log(rowSelection);

    const searchItems = this.$props.columns.filter(v => v.search === true);
    return {
      selected: [],
      locale: zh_CN,
      searchItems,
      rowSelection,
      pagination: {
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: total => `共 ${total} 条数据`,
        total: this.$props.data.length
      }
    };
  },
  computed: {},
  methods: {},
  beforeMount() {
    const columns = this.$props.columns;
    const OpExist = columns.findIndex(v => v.key === "operation") < 0;
    if (OpExist && this.$props.tableProps.operation) {
      columns.push({
        title: "操作",
        key: "operation",
        fixed: "right",
        width: 100,
        scopedSlots: {
          customRender: "operation"
        }
      });
    }
  },
  props: ["data", "columns", "tableProps"]
};
</script>

<style lang="scss" scoped>
.collapse-panel {
  background: #ebf4f4;
  border-radius: 4px;
  margin-bottom: 24px;
  border: 0;
  overflow: hidden;
}
.container-search-button {
  position: relative;
  top: -12px;
  height: 30px;
  .table-title {
    font-size: 20px;
    font-weight: bold;
  }
  .button-search {
    float: right;
    margin: 3px;
  }
  .button-op {
    margin: 3px;
  }
}
.container-search {
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
      width: 150px;
    }
  }
}
</style>