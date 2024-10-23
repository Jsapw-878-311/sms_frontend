<template>
  <el-card class="good-container">
    <el-table
      :load="state.loading"
      :data="state.tableData"
      stripe
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        prop="userWalletRechargeValue"
        label="金额"
      >
      </el-table-column>
      <el-table-column
        prop="goodsName"
        label="方式"
      >卡密
      </el-table-column>
      <el-table-column
        prop="userWalletRechargeTime"
        label="日期"
      >
      </el-table-column>
    </el-table>
    <!--总数超过一页，再展示分页器-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="state.total"
      :page-size="state.pageSize"
      :current-page="state.currentPage"
      @current-change="changePage"
    />
  </el-card>
</template>

<script setup>
import { onMounted, reactive, getCurrentInstance } from 'vue'
import axios from '@/utils/axios'
import { ElMessage } from 'element-plus'
import { Plus, Delete } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import md5 from "js-md5";

const app = getCurrentInstance()
const { goTop } = app.appContext.config.globalProperties
const router = useRouter()
const state = reactive({
  loading: false,
  tableData: [], // 数据列表
  total: 0, // 总条数
  currentPage: 1, // 当前页
  pageSize: 11 // 分页大小
})
onMounted(() => {
  getGoodList()
})
// 获取轮播图列表
const getGoodList = () => {
  state.loading = true
  axios.get('/user/rechargeList', {
    params: {
      pageNumber: state.currentPage,
      pageSize: state.pageSize
    }
  }).then(res => {
    state.tableData = res.list
    state.tableData.userWalletRechargeTime = new Date(res.list.userWalletRechargeTime)
    state.total = res.totalCount
    state.currentPage = res.currPage
    state.loading = false
    goTop && goTop()
  })
}
const changePage = (val) => {
  state.currentPage = val
  getGoodList()
}
</script>

<style scoped>
  .good-container {
    min-height: 100%;
  }
</style>
