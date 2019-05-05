import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载
var setting = function(resolve){require(['../components/settings/settings.vue'],resolve)}
var admin = function(resolve){require(['../components/settings/admin/admin.vue'],resolve)};
var already = function(resolve){require(['../components/alreadysong/alreadysong.vue'],resolve)};
var loginvue  = function(resolve){require(['../components/login/login.vue'],resolve)};
var mine = function(resolve){require(['../components/mine/mine.vue'],resolve)};
var nick = function(resolve){require(['../components/mine/setnick/setnick.vue'],resolve)};
var sign = function(resolve){require(['../components/mine/sign/sign.vue'],resolve)};
var common = function(resolve){require(['../components/settings/common/common.vue'],resolve)};
var funs = function(resolve){require(['../components/funs/funs.vue'],resolve)};
var tool = function(resolve){require(['../components/tool/tool.vue'],resolve)};
var jm = function(resolve){require(['../components/tool/jiemeng/jiemeng.vue'],resolve)};
var testapi = function(res){require(['../components/testexpressapi/testexpressapi.vue'],res)}
import store from '../store'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/mine',
      // component:Mine,
      component:mine,
      name:'mine',
      children:[
        {
          path:'/set',
          component:setting,
          name:'set',
          children:[
            {
              path:'/admin',
              component:admin,
              name:'admin'
            },
            { 
              path:'/common',
              component:common,
              name:'common'
            }
          ]
        },
        {
          path:'/nick',
          component:nick,
          name:'nick'
        },
        {
          path:'/sign',
          component:sign,
          name:'sign'
        }
      ],
      //路由独享守卫，进入我的页面先检查是否登录了,登录了进入我的页面，未登录，进入登录页面
      beforeEnter:function(to,from,next){
        console.log(store.getters.islogin);
        if(!store.getters.islogin){
          next({path:'/loginpath'});
        }else{
          next();
        }
      }
    },
    {
      path:'/already',
      component:already,
      name:'already'
    },
    {
      path:'/loginpath',
      component:loginvue,
      name:'login'
    },
    {
      path:'/funs',
      component:funs,
      name:'funs'
    },
    {
      path:'/tool',
      component:tool,
      name:'tool',
      children:[
        {
          path:'/jm',
          component:jm,
          name:'jm'
        }
      ]
    },
    {
      path:'/testapi',
      name:'testapi',
      component:testapi
    }
  ]
})


