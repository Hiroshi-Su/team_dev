<template>
  <div id="main-layout" >
    <div class="main-layout-text-wrap">
      <p class="main-layout-text">お気に入りの古着屋をみんなとシェアしよう</p>
    </div>
    <div class="main-layout-phrase-wrap animation-drop" :class= {dropping:isActive}>
      <span class="char" v-for="ph in phrases" :key="ph.id">{{ph}}</span>
    </div>
    <div class="main-layout-index">
      <div class="background-img"></div>
    </div>
    <img src="/img/sideBar/vintage-font.svg" alt="Vintage Shop" class="logo-img">
    <!-- <div class="logo-img"></div> -->
    <section class="function-wrap">
      <aside class="side-bar-wrap" @mouseover="addDroppig" @mouseleave="removeDroppig">
        <SideBar/>
      </aside>
      <main class="main-wrap">
        <router-view></router-view>
      </main>
    </section>
  </div>
</template>

<script>
import SideBar from '@/component/parts/layout/SideBar';

export default {
  components: { SideBar },
  data() {
    return{
      isActive:false,
      phrases: 'Share your favorite vintage shops.',
    }
  },
  methods:{
    // droppingPhrase(){
      // for文での書き方
      // const el = document.querySelector('.animation-drop');
      // const str = el.innerHTML.trim();
      // let concatStr = '';

      // for( let c of str) {
      //   c = c.replace(' ', '&nbsp;');
      //   concatStr += `<span class="char">${c}</span>`;
      // }
      // el.innerHTML = concatStr;
          
      // reduce関数を使った書き方
      // const el = document.querySelector('.animation-drop');
      // const str = el.innerHTML.trim().split("");

      // el.innerHTML =  arry.reduce((accu, curr) => {
      //   curr = curr.replace(' ', '&nbsp;');
      //   return `${accu}<span class="char">${curr}</span>`;
      // }, "");
    // },
    addDroppig: function(){
        this.isActive = true;
    },
    removeDroppig: function(){
        this.isActive = false;
    }
  },
};
</script>

<style></style>
