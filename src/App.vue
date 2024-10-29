<template>
  <div class="layout">
    <el-container v-if="state.showMenu" class="container">
      <el-aside class="aside">
        <div class="head">
          <div>
<!--            <img src="//s.weituibao.com/1582958061265/mlogo.png" alt="logo">-->
<!--            <el-image src="https://www.baidu.com/img/flexible/logo/pc/result@2.png" :fit="fit" alt="logo"/>-->
            <el-image src="https://zhifu.qsbl.pw/assets/img/logo.png" :fit="fit" alt="logo"/>
            <span></span>
          </div>
        </div>
        <div class="line" />
        <el-menu
          background-color="#222832"
          text-color="#fff"
          :router="true"
           :default-openeds="state.defaultOpen"
           :default-active='state.currentPath'
        >
          <el-sub-menu index="1">
            <template #title>
              <span>我的账户</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/introduce"><el-icon><User /></el-icon>首页</el-menu-item>
              <el-menu-item index="/account"><el-icon><Lock /></el-icon>修改密码</el-menu-item>
              <el-menu-item>
                  <div class="main_logout" @click="logout_out">
                      <el-icon><Plus /></el-icon>退出登录
                  </div>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
           <el-sub-menu index="2">
            <template #title>
              <span>接码</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper"><el-icon><Menu /></el-icon>可选国家(全是实卡)</el-menu-item>
              <el-menu-item ><el-icon><Picture /></el-icon>美国实卡</el-menu-item>
<!--                index="/guest"-->
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>自助充值</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/charge"><el-icon><Sell /></el-icon>卡密充值</el-menu-item>
              <el-menu-item index="/chargelist"><el-icon><Goods /></el-icon>充值记录</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <span>教学说明</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/info"><el-icon><Odometer /></el-icon>使用说明</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container class="content">
        <Header />
        <div class="main">
          <router-view />
        </div>
        <Footer />
      </el-container>
    </el-container>
    <el-container v-else class="container">
      <router-view />
    </el-container>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from '@/utils/axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { localGet, localRemove, pathMap } from '@/utils'

const noMenu = ['/login', '/register']
const router = useRouter()
const state = reactive({
  showMenu: true,
  defaultOpen: ['1', '2', '3', '4'],
  currentPath: '/',
})

onMounted(() => {
    // console.log(localGet('token'))
    if (!localGet('token')) {
        // 如果没有，则跳至登录页面
        next({ path: '/login' })
    }
})
router.afterEach((to, from) => {
  state.showMenu = !noMenu.includes(to.path)
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register') {
    // 如果路径是 /login 则正常执行
    next()
  } else {
    // 如果不是 /login，判断是否有 token
    if (!localGet('token')) {
      // 如果没有，则跳至登录页面
      next({ path: '/login' })
    } else {
      // 否则继续执行
      next()
    }
  }
  state.currentPath = to.path
  document.title = pathMap[to.name]
})


// 退出登录
const logout_out = () => {
  axios.post('/user/logout').then(() => {
    // 退出之后，将本地保存的 token  清理掉
    localRemove('token')
    // 回到登录页
    router.push({ path: '/login' })
  })
}
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}
.container {
  height: 100vh;
}
.aside {
  width: 200px!important;
  background-color: #222832;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.head > div {
  display: flex;
  align-items: center;
}

.head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.head span {
  font-size: 20px;
  color: #ffffff;
}
.line {
  border-top: 1px solid hsla(0,0%,100%,.05);
  border-bottom: 1px solid rgba(0,0,0,.2);
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px;
}
</style>

<style>
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .el-menu {
    border-right: none!important;
  }
  .el-submenu {
    border-top: 1px solid hsla(0, 0%, 100%, .05);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
  .el-submenu:first-child {
    border-top: none;
  }
  .el-submenu [class^="el-icon-"] {
    vertical-align: -1px!important;
  }
  a {
    color: #409eff;
    text-decoration: none;
  }
  .el-pagination {
    text-align: center;
    margin-top: 20px;
  }
  .el-popper__arrow {
    display: none;
  }
    .main_logout {
        width: 100%;
        height: 100%;
    }
</style>