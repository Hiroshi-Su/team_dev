<template>
  <div id="shop-index">
    <div class="rect-wrap" v-for="list in 9" :key="list.id">
      あああああ
      <ListCard/>
    </div>
  </div>
</template>

<script>
import ListCard from '@/component/parts/layout/ListCard';

export default {
  components: { ListCard },
};
</script>

<style></style>