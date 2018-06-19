import Vue from 'vue'
import Router from 'vue-router'
const startUp = () =>
  import ('@/tpl/startUp')
const content = () =>
  import ('@/tpl/content')
const videoStudio = () =>
  import ('@/tpl/videoStudio')
const ResourceAssessment = () =>
  import ('@/tpl/ResourceAssessment')
const teachingAnalysis = () =>
  import ('@/tpl/teachingAnalysis')


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'startUp',
    component: startUp
  }, {
    path: '/content',
    name: 'content',
    component: content,
    children: [{
      path: '/content/videoStudio',
      name: 'videoStudio',
      component: videoStudio
    }, {
      path: '/content/ResourceAssessment',
      name: 'ResourceAssessment',
      component: ResourceAssessment
    }, {
      path: '/content/teachingAnalysis',
      name: 'teachingAnalysis',
      component: teachingAnalysis
    }]
  }]
})
