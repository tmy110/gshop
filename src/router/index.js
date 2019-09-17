/**
 * 路由器对象模板
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件
// import MSite from '../pages/MSite/MSite.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Search from '../pages/Search/Search.vue'
//路由组件懒加载 s
const MSite = () => import('../pages/MSite/MSite.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Search = () => import('../pages/Search/Search.vue')
//路由组件懒加载 e
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'

//个人信息页面
import UserInfo from '../pages/UserInfo/UserInfo.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,//返回路由组件的函数，只有执行此函苏才会加载路由组件，这个函数在请求对应的路由路径时才会执行
      meta: {
        showFooter: true
      }
    }, {

      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    }, {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    }, {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    }, {
      path: '/userInfo',
      component: UserInfo,
      meta: {
        showFooter: false
      }
    },
    //默认显示
    {
      path: '/',
      redirect: '/msite'
    }, {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    }
    , {
      path: '/shop',
      component: Shop,
      children: [

        {
          path: '/shop/goods',
          component: ShopGoods,
        },
        {
          path: '/shop/info',
          component: ShopInfo,
        },
        {
          path: '/shop/ratings',
          component: ShopRatings,
        }, //默认显示
        {
          path: '',
          redirect: '/shop/goods'
        }

      ]

    }

  ]

})
