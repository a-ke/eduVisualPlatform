import Vue from 'vue'
import Router from 'vue-router'
const startUp = () =>
  import ('@/tpl/startUp')
const videoStudio = () =>
  import ('@/tpl/videoStudio')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'startUp',
    component: startUp
  }, {
    path: '/videoStudio',
    name: 'videoStudio',
    component: videoStudio
  }]
})
