<template>
  <div id="side-bar">
    <nav class="navi-wrap">
      <ul>
        <li>
          <button class="denim-button">EASY LOGIN</button>
        </li>
        <li>
          <button class="denim-button">LOGIN</button>
        </li>
        <li>
          <button class="denim-button">REGISTER</button>
        </li>
        <form class="search-wrap">
          <label class="search-box" for="search-from">
            <input type="search" class="search-form" id="search-from" placeholder="駅名">
            <span class="icon-search"></span>
          </label>
          <button class="denim-button">SEARCH</button>
        </form>
        <p class="spot-search-title"><span aria-hidden="true" class="icon-location2"></span>人気のスポットから検索</p>
        <li>
          <router-link :to="{name : 'mainlayout'}" class="spot-search">
            高円寺駅
          </router-link>
        </li>
        <li>
          <router-link :to="{name : 'mainlayout'}" class="spot-search">
            下北沢駅
          </router-link>
        </li>
        <li>
          <router-link :to="{name : 'mainlayout'}" class="spot-search">
            町田駅
          </router-link>
        </li>
        <li>
          <router-link :to="{name : 'mainlayout'}" class="spot-search">
            渋谷駅
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>