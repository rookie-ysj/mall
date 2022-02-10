<template>
  <div class="nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'nav',
}
</script>

<style scoped>
.nav {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  width: 100%;
  height: 60px;
}

</style>