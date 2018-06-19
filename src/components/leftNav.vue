<template>
    <div class="leftNav" :style="{left:left}" @mouseenter.stop.prevent="toggleNav($event)" @mouseleave.stop.prevent="toggleNav($event)">
        <span class="arrow"></span>
        <ul>
            <li v-for="(item,index) in navLists" :key=index :class="{'leftNav-list':true,'current-nav':currentNav==item.name}">
                <router-link class="nav-touter" :to="{name:item.name}">
                    {{item.nav}}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "leftNav",
  data() {
    return {
      left: "-3.2rem",
      currentNav: "",
      navLists: [
        {
          nav: "首页",
          name: "startUp"
        },
        {
          nav: "录播教室",
          name: "videoStudio"
        },
        {
          nav: "资源评估",
          name: "ResourceAssessment"
        },
        {
          nav: "教学分析",
          name: "teachingAnalysis"
        }
      ]
    };
  },
  created: function() {
    var vm = this;
    vm.getCurrentNav();
  },
  methods: {
    toggleNav: function($event) {
      var vm = this;
      vm.left = vm.left == "0" ? "-3.2rem" : "0";
    },
    getCurrentNav: function() {
      var vm = this;
      vm.currentNav = vm.$route.name;
    }
  }
};
</script>

<style>
.leftNav {
  position: fixed;
  top: 0;
  width: 3.2rem;
  height: 100%;
  z-index: 2010;
  background-color: #021533;
  background: linear-gradient(to right, #020816, #022758, #020816);
  border-right: 2px solid #397cc2;
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: all 0.4s linear;
}
.leftNav .arrow {
  background: url("../../static/images/public/arrow_right.png") no-repeat center;
  display: inline-block;
  width: 13px;
  height: 100%;
  position: absolute;
  right: -15px;
}
.leftNav .leftNav-list {
  background: url("../../static/images/public/tooltip_bg_n.png") no-repeat;
  background-size: 100% 100%;
  width: 2.7rem;
  height: 0.55rem;
  text-align: center;
  font-weight: 400;
  font-size: 0.18rem;
  color: #77e6fe;
  line-height: 0.55rem;
  margin-left: 0.15rem;
  margin-top: 0.25rem;
  transition: 0.2s linear;
}
.leftNav .leftNav-list:hover,
.leftNav .leftNav-list.current-nav {
  background: url("../../static/images/public/tooltip_bg_h.png") no-repeat;
}
.leftNav .leftNav-list .nav-touter {
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  text-decoration: none;
}
.leftNav .leftNav-list .nav-touter:hover {
  color: #fff;
  text-decoration: none;
}
</style>



