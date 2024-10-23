<!--<template>-->
<!--  <el-card class="introduce">-->


<!--          <template #header>-->
<!--              <div class="header">-->
<!--                  <el-input-->
<!--                          style="width: 200px; margin-right: 10px"-->
<!--                          placeholder="请输入汇率"-->
<!--                          v-model="state.exchange"-->
<!--                          @change="handleOption"-->
<!--                          clearable-->
<!--                  />-->

<!--                <el-input-->
<!--                        style="width: 200px; margin-right: 10px"-->
<!--                        placeholder="请输入转化率"-->
<!--                        v-model="state.convert"-->
<!--                        @change="handleOption"-->
<!--                        clearable-->
<!--                />-->

<!--                  <el-select @change="handleOption" filterable v-model="state.orderStatus"-->
<!--                             style="width: 200px; margin-right: 10px">-->
<!--                      <el-option-->
<!--                              v-for="item in state.options"-->
<!--                              :key="item.value"-->
<!--                              :label="item.label"-->
<!--                              :value="item.value"-->
<!--                      />-->
<!--                  </el-select>-->

<!--                  &lt;!&ndash;         <el-button type="primary" size="small" icon="el-icon-edit">修改订单</el-button>&ndash;&gt;-->
<!--                  &lt;!&ndash;                <el-button type="primary" :icon="HomeFilled" @click="handleConfig()">配货完成</el-button>&ndash;&gt;-->
<!--                  &lt;!&ndash;                <el-button type="primary" :icon="HomeFilled" @click="handleSend()">出库</el-button>&ndash;&gt;-->
<!--                  &lt;!&ndash;                <el-button type="danger" :icon="Delete" @click="handleClose()">关闭订单</el-button>&ndash;&gt;-->
<!--              </div>-->
<!--          </template>-->
<!--  </el-card>-->

<!--</template>-->

<!--<script setup>-->
<!--import { onMounted, onUnmounted } from 'vue'-->

<!--let myChart = null-->

<!--onMounted(() => {-->
<!--})-->
<!--onUnmounted(() => {-->
<!--  myChart.dispose()-->
<!--})-->
<!--</script>-->

<!--<style scoped>-->
<!--  .introduce .order {-->
<!--    display: flex;-->
<!--    margin-bottom: 50px;-->
<!--  }-->
<!--  .introduce .order .order-item {-->
<!--    flex: 1;-->
<!--    margin-right: 20px;-->
<!--  }-->
<!--  .introduce .order .order-item:last-child{-->
<!--    margin-right: 0;-->
<!--  }-->
<!--  .welcome_bar {-->
<!--    margin-top: 70px;-->
<!--  }-->
<!--  .order {-->
<!--    margin-top: 30px;-->
<!--  }-->
<!--  #zoom {-->
<!--    min-height: 300px;-->
<!--  }-->
<!--</style>-->

<template>
    <el-card class="introduce">
        <div class="order">
            <el-card class="order-item">
                <template #header>
                    <div class="card-header">
                        <span>今日订单数</span>
                    </div>
                </template>
                <div class="item">1888</div>
            </el-card>
            <el-card class="order-item">
                <template #header>
                    <div class="card-header">
                        <span>今日日活</span>
                    </div>
                </template>
                <div class="item">36271</div>
            </el-card>
            <el-card class="order-item">
                <template #header>
                    <div class="card-header">
                        <span>转化率</span>
                    </div>
                </template>
                <div class="item">20%</div>
            </el-card>
        </div>
        <div id="zoom"></div>
    </el-card>
</template>

<script setup>
    import { onMounted, onUnmounted } from 'vue'

    let myChart = null

    onMounted(() => {
        if (window.echarts) {
            // 基于准备好的dom，初始化echarts实例
            myChart = window.echarts.init(document.getElementById('zoom'))

            // 指定图表的配置项和数据
            const option = {
                title: {
                    text: '系统折线图'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['新增注册', '付费用户', '活跃用户', '订单数', '当日总收入']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2021-03-11', '2021-03-12', '2021-03-13', '2021-03-14', '2021-03-15', '2021-03-16', '2021-03-17']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '新增注册',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '付费用户',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '活跃用户',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '订单数',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '当日总收入',
                        type: 'line',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            }

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option)
        }
    })
    onUnmounted(() => {
        myChart.dispose()
    })
</script>

<style scoped>
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
    #zoom {
        min-height: 300px;
    }
</style>