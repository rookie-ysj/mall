<template>
  <div class="navitem" @click="jump">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isActiveText">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navItem',
  props: {
    path: String,
    activecolor: String
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      console.log(this.$route)
      return this.$route.path.includes(this.path)
    },
    isActiveText() {
      console.log(this.activecolor )
      return this.$route.path.includes(this.path) ? {color: this.activecolor} : {}
    }
  },
  methods: {
    jump() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
.navitem {
  flex: 1;
  text-align: center;
  width: 100px;
  height: 49px;
}
.navitem img
{
  width: 24px;
  height: 24px;
}
</style>