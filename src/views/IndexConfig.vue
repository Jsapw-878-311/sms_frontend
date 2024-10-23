<template>
  <el-card class="index-container">
    <el-collapse class="aboutus_content" v-model="activeName" accordion>

      <el-collapse-item class="info_content" title="关于接码(可选国家)" name="1">
        <div>可选国家(全是实卡) 选择项目/国家时可以点击选择项目/国家输入框输入你要查找的项目/国家名称 二次接码：在接码记录中可以重用号码,接码记录-重用-即可根据提示重用号码,通常号码会存在一段时间,如果号码下线则无法重用号码！</div>
      </el-collapse-item>
      <el-collapse-item class="info_content" title="关于接码(美国实卡)" name="2">
        <div>该通道无法复用号码</div>
        <div>该通道获取的号码都是美国实卡，请大家放心使用，此通道无法重用号码，可以获取多个号码，但是有限制，因为为了避免浪费，请理解</div>
      </el-collapse-item>
      <el-collapse-item class="info_content" title="关于接码_可选国家_API说明" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>

        <li>您的APIkey可在 仪表盘>首页 获取</li><br>
        <li>返回状态码说明(status_code)：</li>
        状态码0：获取短信验证码成功 (该状态码只在 获取验证码 接口中存在)<br>
        状态码1：正确返回数据<br>
        状态码2：缺少必要参数<br>
        状态码3：用户不存在<br>
        状态码4：用户被禁止<br>
        状态码5：其他异常信息<br><br>

        <li>获取用户信息，余额、冻结余额 POST请求地址：https://ussms.cyou/api/api_getUser</li>
        必要参数：api_key<br>
        返回值解析(json格式)：
        {
        "status_code": "1",
        "balance": "299.17",
        "mail": "xxxxxssss@gmail.com",
        "success": true,
        "name": "a123456",
        "freeze_balance": "0.0",
        "error": ""
        }<br>
        有效参数：status_code 代表状态码、balance 代表用户余额、mail 代表用户邮箱、success 代表接口访问成功、name 代表用户名、freeze_balance 代表冻结余额、error 代表异常信息<br><br>

        <li>获取国家列表 POST请求地址：https://ussms.cyou/api/api_getCountryList</li>
        必要参数：api_key<br>
        返回值解析(json数组格式)：[{
        "status_code": "1",
        "success": true,
        "country_chinese_name": "多米尼克",
        "error": "",
        "country_id": "145"
        },
        {
        "status_code": "1",
        "success": true,
        "country_chinese_name": "美国",
        "error": "",
        "country_id": "1"
        }]<br>
        有效参数：status_code 代表状态码、success 代表接口访问成功、country_chinese_name 代表国家名称、country_id 代表国家ID、error 代表异常信息<br><br>

        <li>获取项目列表 POST请求地址：https://ussms.cyou/api/api_getProjectLis</li>
        必要参数：api_key<br>
        返回值解析(json数组格式)：[{
        "status_code": "1",
        "service_name": "Google/Gmail",
        "success": true,
        "service_id": "395",
        "error": ""
        },
        {
        "status_code": "1",
        "service_name": "Neuron",
        "success": true,
        "service_id": "632",
        "error": ""
        }]<br>
        有效参数：status_code 代表状态码、success 代表接口访问成功、service_name 代表项目名称、service_id 代表项目ID、error 代表异常信息<br><br>

        <li>获取参考价格 POST请求地址：https://ussms.cyou/api/api_getProposedPrice</li>
        必要参数：api_key、country_id、service_id<br>
        返回值解析(json格式)：
        {
        "record_cancel_button": "",
        "record_number_state": "",
        "record_country_name": "",
        "status_code": "1",
        "record_number": "",
        "record_refer_price": "5.72",
        "index": "",
        "record_service_name": "",
        "error": "",
        "record_number_message": "",
        "record_number_order_id": "",
        "api_key": "",
        "record_actual_price": "",
        "record_number_system_number": "",
        "record_number_time": "",
        "record_user_name_mark_stat": "",
        "success": true,
        "record_user_name": "",
        "service_id": "395",
        "id": "",
        "record_time": "",
        "success_rate": "100.00",
        "country_id": "1"
        }<br>
        有效参数：status_code 代表状态码、record_refer_price 代表参考价格、success 代表接口访问成功、service_id 代表项目ID、success_rate 代表来码率、country_id 代表国家ID<br><br>

        <li>获取号码 POST请求地址：https://ussms.cyou/api/api_getNumber</li>
        必要参数：api_key、country_id、service_id<br>
        返回值解析(json格式)：
        {
        "record_cancel_button": "",
        "record_number_state": "",
        "record_country_name": "美国_United States",
        "status_code": "1",
        "record_number": "19372096794",
        "record_refer_price": "",
        "index": "",
        "record_service_name": "Affirm",
        "error": "",
        "record_number_message": "",
        "record_number_order_id": "T0D8CVQR",
        "api_key": "",
        "record_actual_price": "3.44",
        "record_number_system_number": "",
        "record_number_time": "",
        "record_user_name_mark_stat": "",
        "success": true,
        "record_user_name": "a1769988917",
        "service_id": "25",
        "id": "",
        "record_time": "2023-11-08 17:44:16",
        "success_rate": "",
        "country_id": "1"
        }<br>
        有效参数：record_country_name 代表国家名称、status_code 代表状态码、record_number 代表获取的号码、record_service_name 代表项目名称、record_number_order_id 代表订单ID、record_actual_price 代表价格、success 代表接口访问成功、record_user_name 代表用户名、service_id 代表项目ID、record_time 代表订单日期、country_id 代表国家ID<br><br>

        <li>获取验证码 POST请求地址：https://ussms.cyou/api/api_getQueryVerification</li>
        必要参数：api_key、record_number_order_id<br>
        返回值解析(json格式)：
        {
        "record_cancel_button": "",
        "record_number_state": "",
        "record_country_name": "",
        "status_code": "0",
        "record_number": "",
        "record_refer_price": "",
        "index": "",
        "record_service_name": "",
        "error": "",
        "record_number_message": "Your code is 427184.",
        "record_number_order_id": "",
        "api_key": "",
        "record_actual_price": "",
        "record_number_system_number": "",
        "record_number_time": "",
        "record_user_name_mark_stat": "",
        "success": true,
        "record_user_name": "",
        "service_id": "",
        "id": "",
        "record_time": "",
        "success_rate": "",
        "country_id": ""
        }<br>
        有效参数：status_code 代表状态码、success 代表接口访问成功 (如果status_code返回0则代表record_number_message该参数会返回验证码信息)<br><br>

        <li>释放号码 POST请求地址：https://ussms.cyou/api/api_getCancelOrder</li>
        必要参数：api_key、record_number_order_id<br>
        返回值解析(json格式)：
        {
        "status_code": "1",
        "service_name": "",
        "success": true,
        "service_id": "",
        "error": "号码释放成功，余额将自动退回您的账户！"
        }<br>
        有效参数：status_code 代表状态码、success 代表接口访问成功、error 代表异常信息<br><br>

        <li>重用号码 POST请求地址：https://ussms.cyou/api/api_getOrderAgain</li>
        必要参数：api_key、record_number_order_id<br>
        返回值解析(json格式)：
        {
        "status_code": "1",
        "service_name": "",
        "success": true,
        "service_id": "",
        "error": "复用成功，请继续使用订单ID获取验证码"
        }<br>
        有效参数：status_code 代表状态码、success 代表接口访问成功、error 代表异常信息<br>

      </el-collapse-item>
      <el-collapse-item class="info_content" title="提交项目" name="4">
        如没有您需要的接码项目可寻找TG客服进行提交接码项目<br>
        提交时请将：国家地区、网站或者APP进行提交
      </el-collapse-item>
      <el-collapse-item class="info_content" title="关于我们" name="5">
        本接码网站已诚信运营多年，技术实力雄厚，售后服务优质！可提供多国接码以及美国实卡接码，可接Telegram、Google Voice、Chat GPT、Twitter、WhatsApp等等。
      </el-collapse-item>

    </el-collapse>
  </el-card>
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus, Delete } from '@element-plus/icons-vue'
import DialogAddGood from '@/components/DialogAddGood.vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/utils/axios'
// 首页配置类型参数
const configTypeMap = {
  hot: 3,
  new: 4,
  recommend: 5
}

const router = useRouter()
const route = useRoute()
const multipleTable = ref(null)
const addGood = ref(null)
const state = reactive({
})
// 监听路由变化
router.beforeEach((to) => {
  if (['hot', 'new', 'recommend'].includes(to.name)) {
    state.configType = configTypeMap[to.name]
    state.currentPage = 1
    getIndexConfig()
  }
})
// 初始化
onMounted(() => {
  state.configType = configTypeMap[route.name]
})

</script>

<style scoped>
  .index-container {
    min-height: 100%;
    padding: 30px;
    font-size: 20px;
  }
  .info_content {
    font-size: 20px;
  }
</style>