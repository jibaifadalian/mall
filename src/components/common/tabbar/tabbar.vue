<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar',
}
</script>
<style lang="scss">
#tab-bar{
  display: flex;
  align-items: center;
  background-color: #ccc;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100,100,100, 0.2);
}
</style>
