<template>
  <div id="main-layout" >
    <div class="main-layout-text-wrap">
      <p class="main-layout-text">お気に入りの古着屋をみんなとシェアしよう</p>
    </div>
    <div class="main-layout-phrase-wrap">
      <p class="main-layout-phrase">Share your favorite vintage shops.</p>
    </div>
    <div class="main-layout-index">
      <div class="background-img">
    </div>
    </div>
    <SideBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from '@/component/parts/layout/SideBar';

export default {
  components: { SideBar },
};
</script>

<style></style>
