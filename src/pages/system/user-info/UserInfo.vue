<template>
  <search-table :tableProps="tableProps" />
</template>

<script>
import SearchTable from "@/components/base/SearchTable";
import { fetchUser, deleteUser } from './UserInfoService';

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
  rowSelection: true,
  columns,
  deleteMethod: deleteUser,
  getMethod: fetchUser,
};

export default {
  name: "user-info",
  components: {
    SearchTable
  },
  data() {
    return {
      tableProps
    };
  }
};
</script>

<style lang="scss" scoped>
</style>