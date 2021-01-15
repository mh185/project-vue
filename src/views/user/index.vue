<template>
  <div>
    <el-input></el-input>
    <el-table :data="List" stripe style="width: 100%">
      <el-table-column
        type="index"
        width="180"
        label="序号"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="username"
        label="名称"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="联系电话"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="role_name"
        label="职位"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="email"
        label="Email"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="{ row }">
          <el-switch
            v-model="row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Users } from "@/api/user";
export default {
  data() {
    return {
      List: [],
      pageForm: {
        pagenum: 1,
        pagesize: 10,
        query: "",
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      Users(this.pageForm).then((res) => {
        const { data, meta } = res;
        this.List = data.users;
      });
    },
  },
};
</script>