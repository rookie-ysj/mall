<template>
  <div>
    <nav-bar>
      <nav-item path="/home" activecolor="green">
        <template v-slot:item-icon><img src="@assets/img/nav/首页.png"></template>
        <template v-slot:item-icon-active><img src="@assets/img/nav/首页1.png"></template>
        <template v-slot:item-text><div>首页</div></template>
      </nav-item>
      <nav-item path="/category" activecolor="green">
        <template v-slot:item-icon><img src="@assets/img/nav/分类.png"></template>
        <template v-slot:item-icon-active><img src="@assets/img/nav/分类1.png"></template>
        <template v-slot:item-text><div>分类</div></template>
      </nav-item>
      <nav-item path="/shopcart" activecolor="green">
        <template v-slot:item-icon><img src="@assets/img/nav/购物车.png"></template>
        <template v-slot:item-icon-active><img src="@assets/img/nav/购物车1.png"></template>
        <template v-slot:item-text><div>购物车</div></template>
      </nav-item>
      <nav-item path="/profile" activecolor="green">
        <template v-slot:item-icon><img src="@assets/img/nav/我的.png"></template>
        <template v-slot:item-icon-active><img src="@assets/img/nav/我的1.png"></template>
        <template v-slot:item-text><div>我的</div></template>
      </nav-item>
    </nav-bar>
  </div>
</template>

<script>
import navBar from './nav/nav.vue'
import navItem from './nav/navItem.vue'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    navBar,
    navItem,
  }
}
</script>

<style>
/* @import url('./assets/css/reset.css'); */

</style>
