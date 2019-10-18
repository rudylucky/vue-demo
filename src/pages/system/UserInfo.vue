<template>
  <search-table :tableProps="tableProps" :data="data" :columns="columns" />
</template>

<script>
import SearchTable from "../../components/base/SearchTable";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    tel: "0571-22098909",
    phone: 18889898989,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    tel: "0571-22098333",
    phone: 18889898888,
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "London No. 2 Lake Park"
  }
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    sorter: true,
    search: true,
    width: 120,
  },
  {
    title: "年龄",
    dataIndex: "age",
    sorter: true,
    search: true,
    width: 80
  },
  {
    title: "固定电话",
    dataIndex: "tel",
    search: true,
    width: 150
  },
  {
    title: "移动电话",
    dataIndex: "phone",
    search: true,
    width: 150
  },
  {
    title: "地址",
    dataIndex: "address"
  }
];

const tableProps = {
  selection: true,
  operation: true,
  rowSelection: true
};

export default {
  name: "user-info",
  components: {
    SearchTable
  },
  data() {
    return {
      data,
      columns,
      tableProps
    };
  }
};
</script>

<style lang="scss" scoped>
</style>