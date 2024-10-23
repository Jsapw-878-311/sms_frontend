<template>
    <el-card class="introduce">
        <el-card class="welcome_bar">
            <template #header>
                <div class="card-header">
          <span class="card-header">
            Welcome：qishaobuluo<br>
          </span>
                </div>
            </template>
            <div class="item">
                欢迎━(*｀∀´*)ノ亻!使用此系统，我们的系统全新美化，功能齐全，敬请使用！
            </div>
        </el-card>
        <div class="order">

            <el-card class="order-item">
                <template #header>
                    <div class="card-header">
                        <span>订单总数</span>
                    </div>
                </template>
                <div class="item">0</div>
            </el-card>
            <el-card class="order-item">
                <template #header>
                    <div class="card-header">
                        <span>账户余额</span>
                    </div>
                </template>
                <div class="item">{{ state.userInfo && state.userInfo.walletValue || '0.00' }}</div>
            </el-card>
            <el-card class="order-item">
                <template #header>
                    <div class="card-header">
                        <span>冻结余额</span>
                    </div>
                </template>
                <div class="item">0.0</div>
            </el-card>
            <el-card class="order-item">
                <template #header>
                    <div class="card-header">
                        <span>累计充值</span>
                    </div>
                </template>
                <div class="item">0.0</div>
            </el-card>
        </div>
    </el-card>

    <el-card  class="introduce">

            <table class="intro_table">
                <thead>
                <tr class="row_height">
                    <th>标题</th>
                    <th>内容</th>
                </tr>
                </thead>
                <tbody>
                <tr class="row_height">
                    <td>公告</td>
                    <td>欢迎来到511sSMS在线验证平台</td>
                </tr>
                <tr class="row_height">
                    <td>客服</td>
                    <td>TG客服: @wuyaoyaokefu</td>
                </tr>
                <tr class="row_height">
                    <td>交流群</td>
                    <td><a href="https://t.me/wuyaoyaojiaoliuqun">TG交流群</a> <a href="https://t.me/ussms_shikajiema">TG频道</a></td>
                </tr>
                <tr class="row_height">
                    <td>邀请码</td>
                    <td>66ffe79a</td>
                </tr>
                <tr class="row_height">
                    <td>将我们分享给朋友</td>
                    <input type="hidden" id="content" value="https://ussms.cyou/user/register?promote_url=66ffe79a" />
                    <!--                      <td>https://ussms.cyousmsredWeb_war/user/register?promote_url=66ffe79a</td>-->
                    <td><a href="javascript:;" class="copy">点我复制链接</a></td>
                </tr>
                <tr class="row_height">
                    <td>您的APIkey</td>
                    <td><a href="javascript:;" id="getapikeybutton" onclick="getKey()">点击获取APIkey</a></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
    </el-card>
</template>

<script setup>
    import {onMounted, reactive} from 'vue'
    import {ElMessage} from 'element-plus'
    import {HomeFilled, Delete} from '@element-plus/icons-vue'
    import axios from '@/utils/axios'

    const state = reactive({
        userInfo: null, // 用户信息变量
        loading: false,
        tableData: [], // 数据列表
        total: 0, // 总条数
        currentPage: 1, // 当前页
    })

    // 初始化获取订单列表
    onMounted(() => {
        getUserInfo()
    })

    // 获取用户信息
    const getUserInfo = async () => {
        const userInfo = await axios.get('/user/info')
        state.userInfo = userInfo
    }
</script>
<style scoped>

    .introduce {
        margin-bottom: 20px;
    }
    .introduce .order {
        display: flex;
        margin-bottom: 50px;
    }
    .introduce .order .order-item {
        flex: 1;
        margin-right: 20px;
    }
    .introduce .order .order-item:last-child{
        margin-right: 0;
    }
    .welcome_bar {
        margin-top: 50px;
    }
    .order {
        margin-top: 30px;
    }
    .intro_table {
        width: 100%;
        border-spacing: 30px;
    }
    .row_height {
        height: 30px;
    }
</style>