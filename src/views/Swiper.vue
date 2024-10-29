<template>

    <el-card class="card_title"><h3>接码通道一_可选国家_都是实卡</h3></el-card>
    <el-card class="turthcard_container">

        <div class="swiper_intro">
            <div class="swiper_intro_item">
                <label>选择项目</label>
                <el-select class="swiper_select" v-model="selectedService" filterable placeholder="请选择服务" @change="handleChangeService">
                    <el-option disabled value="">请选择服务</el-option>
                    <el-option v-for="item in state.servicelist" :value="item.ID" :label="item.name" :key="item.ID">
                        {{ item.name }}
                    </el-option>
                </el-select>
            </div>
            <div class="swiper_intro_item">
                <label>选择国家</label>
                <el-select class="swiper_select" v-model="selectedCountry" filterable placeholder="请选择国家" @change="handleChangeCountry">
                    <el-option disabled value="">请选择国家</el-option>
                    <el-option v-for="item in state.countrylist" :value="item.country_id" :label="item.name" :key="item.country_id">
                            {{ item.name }}
                    </el-option>
                </el-select>
            </div>
        </div>
        <el-button type="button" class="swiper_submit" @click="getPrice">获取参考价格</el-button>

        <el-table
                :load="state.selectloading"
                :data="state.selecttableData"
                tooltip-effect="dark"
                style="width: 100%">
            <el-table-column
                    prop="countryName"
                    label="国家名称"/>
            <el-table-column
                    prop="serviceName"
                    label="项目名称"/>
            <el-table-column
                    prop="price"
                    label="参考价格￥"/>
            <el-table-column
                    prop="success_rate"
                    label="来码率%"/>
            <el-table-column
                    prop="createTime"
                    label="操作">
                    <el-button
                            class="swiper_got_number"
                            type="button"
                            size="mini"
                            @click="getphonenumber">获取号码</el-button>
            </el-table-column>
        </el-table>
        <el-card>
            <h7>请注意：获取的参考价格并不是实际价格，获取号码后会显示实际价格，如不满足您的需求可于2分钟后释放号码，将会自动退回冻结余额</h7>
        </el-card>
    </el-card>

    <el-card class="card_title"><h3>活动订单</h3></el-card>
    <el-card class="turthcard_container">
        <el-table
                :load="state.orderloading"
                :data="state.ordertableDataRes"
                tooltip-effect="dark"
                style="width: 100%">
            <el-table-column
                    prop="countryName"
                    label="国家"/>
            <el-table-column
                    prop="serviceName"
                    label="项目名称"/>
            <el-table-column
                    prop="cc"
                    label="国家区号"/>
            <el-table-column
                    prop="phone"
                    label="手机号"/>
            <el-table-column
                    prop="code"
                    label="验证码内容"/>
            <el-table-column
                    prop="smsPrice"
                    label="消耗资金"/>
            <el-table-column
                    prop="createTime"
                    label="时间"/>
            <el-table-column
                    label="操作">
                <el-button
                        type="button"
                        class="swiper_got_number"
                        size="mini"
                        @click="cancelSMSOrder">释放</el-button>
            </el-table-column>
        </el-table>
        <el-card>
            <h7>该通道获取的号码会显示区号，例如获取的美国号码是：14076901042，前面的1则是+1的区号，代表美国号码。各个国家的区号都有所不同。请大家使用之前查阅相关资料<br>
                注：2分钟后可手动释放号码，释放后冻结的相关余额会自动返回至您的账户.注：重用号码将会扣费！(费用跟首次一致)</h7>
        </el-card>
    </el-card>

    <el-card class="card_title"><h3>接码记录</h3></el-card>
    <el-card class="turthcard_container">
        <el-table
                :load="state.logloading"
                :data="state.logtableData"
                tooltip-effect="dark"
                style="width: 100%">
            <el-table-column
                    prop="countryName"
                    label="国家"/>
            <el-table-column
                    prop="serviceName"
                    label="项目名称"/>
            <el-table-column
                    prop="phone"
                    label="手机号"/>
            <el-table-column
                    prop="code"
                    label="验证码内容"/>
            <el-table-column
                    prop="smsPrice"
                    label="消耗资金"/>
            <el-table-column
                    prop="createTime"
                    label="时间"/>
            <el-table-column
                    label="操作">
                <el-button
                        type="button"
                        class="swiper_got_number"
                        size="mini"
                        @click="reuse">重用</el-button>
            </el-table-column>
        </el-table>
        <el-card>
            <h7>接码记录列表</h7>
        </el-card>
    </el-card>
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus, Delete } from '@element-plus/icons-vue'
import axios from '@/utils/axios'
import { localGet, localRemove, localSet } from '@/utils'
import DialogAddSwiper from '@/components/DialogAddSwiper.vue'

const addSwiper = ref()
const selectedService = ref('');
const selectedCountry = ref('');
let timer;
const state = reactive({
    selectloading: false,
    servicelist: [],
    countrylist: [],
    isgetpriced: false,
    selecttableData: [{
        countryName: "",
        serviceName: "",
        price: "",
        success_rate: ""
    }],
    orderloading: false,
    ordertableDataRes: [],
    ordertableData: [{
        countryName: "",
        serviceName: "",
        cc: "",
        phone: "",
        code: "",
        smsPrice: "",
        createTime: ""
    }],
    orderInfo: {},
    logloading: false,
    logtableData: [
    ],
    logtableDataRes: [{
        countryName: "",
        serviceName: "",
        phone: "",
        code: "",
        smsPrice: "",
        createTime: ""
    }]
})

onMounted(() => {
    getServiceList()
    getCountryList()
})
const getServiceList = () => {
    axios.get('/getSMS/servicelist').then(res => {
        state.servicelist = res
    })
}
const getCountryList = () => {
    axios.post('/getSMS/countrylist', {
        "serviceNo": 1
    }).then(res => {
        state.countrylist = res
    })
}
const handleChangeService = async (event) => {
    for(let i = 0; i < state.servicelist.length; i++){
        if(selectedService.value === state.servicelist[i].ID){
            state.selecttableData[0].serviceName = state.servicelist[i].name
            break
        }
    };
    axios.post('/getSMS/countrylist', {
        "serviceNo": selectedService.value
    }).then(res => {
        state.countrylist = res
    })
}
const handleChangeCountry = async (event) => {
    for(let i = 0; i < state.countrylist.length; i++){
        if(selectedCountry.value === state.countrylist[i].country_id){
            state.selecttableData[0].countryName = state.countrylist[i].name
            break
        }
    };
    if(state.isgetpriced) getPrice()
}
const getPrice = () => {
    state.isgetpriced = true;
    axios.post('/getSMS/price', {
        serviceNo: selectedService.value,
        countryNo: selectedCountry.value
    }).then(res => {
        state.selecttableData[0].price = res.price,
        state.selecttableData[0].success_rate = res.success_rate
    })
}
const getphonenumber = () => {
    axios.post('/getSMS/number', {
        serviceNo: selectedService.value,
        countryNo: selectedCountry.value
    }).then(res => {
        state.ordertableData[0].countryName = res.countryName
        state.ordertableData[0].serviceName = res.serviceName
        state.ordertableData[0].cc = "+" + res.cc
        state.ordertableData[0].phone = res.phone
        state.ordertableData[0].code = "获取中。。。"
        state.ordertableData[0].smsPrice = res.smsPrice
        state.ordertableData[0].createTime = res.creatTime
        state.ordertableDataRes = state.ordertableData
        localSet('orderId', res.orderId)
        state.logloading = true
        state.orderInfo = res
        state.logtableDataRes[0].countryName = res.countryName
        state.logtableDataRes[0].serviceName = res.serviceName
        state.logtableDataRes[0].phone = res.phone
        state.logtableDataRes[0].code = ""
        state.logtableDataRes[0].smsPrice = res.smsPrice
        state.logtableDataRes[0].createTime = res.creatTime
        getCode()
    })
}
const cancelSMSOrder = () => {
    if(!localGet('orderId')) return;
    axios.post('/getSMS/cancel', {
        orderId: localGet('orderId')
    }).then(res => {
        state.ordertableData[0].countryName = ""
        state.ordertableData[0].serviceName = ""
        state.ordertableData[0].cc = ""
        state.ordertableData[0].phone = ""
        state.ordertableData[0].code = ""
        state.ordertableData[0].smsPrice = ""
        state.ordertableData[0].createTime = ""
        localRemove('orderId')
        window.clearInterval(timer)
        state.logloading = false
    })
}
const getCode = () => {
    timer = window.setInterval(() => {
        setTimeout(() => {
            axios.post('/getSMS/code', {
                orderId: localGet('orderId')
            }).then(res => {
                if(res.status === 3){
                    state.logtableDataRes[0].code = res.full_sms
                    state.ordertableDataRes[0].code = state.logtableDataRes[0].code
                    state.logtableData = state.logtableDataRes
                    window.clearInterval(timer)
                    state.logloading = false
                }
            })
        },0)
    },1000)
}
const reuse = () => {
    ElMessage.error("无法再次请求电话号码，请稍后重试")
}

const handleEdite = async (index, row) =>  {
    console.log(index, row);
}
</script>

<style>
    .turthcard_container {
        margin-bottom: 30px;
    }
    .card_title {
        margin-top: 20px;
    }
    .swiper_intro {
        display: flex;
        font-size: 20px;
    }
    .swiper_intro_item {
        flex: 1;
        margin-right: 20px;
        font-size: 20px;
    }
    .swiper_select {
        margin-top: 20px;
        font-size: 20px;
    }
    .swiper_submit {
        margin-top: 20px;
        border-radius: 10px;
        margin-bottom: 30px;
        background-color: #1BAEAE;
        width: 100%;
        height: 40px;
        font-size: 20px;
    }
    .swiper_got_number {
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        background-color: #1BAEAE;
        width: 100%;
        height: 30px;
        font-size: 18px;
    }
</style>