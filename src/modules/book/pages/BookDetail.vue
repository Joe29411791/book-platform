<template>
  <div>

    <div class="f" v-if="book" >
      <div class="img">      
        <img :src= "getImgUrl(book.cover)" alt="封面圖片" >
      </div>
      <div class="info">
        <h2>{{ book.title }}</h2>
        <p>{{ book.author }}</p>
        <p>{{ book.description }}</p>
      </div>

    </div>

    <div v-else>
      找不到書籍
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { books } from "../data/books";

// 在 methods 中，或者組合式 API 的 function 中
function getImgUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}

const route = useRoute();

const book = books.find(b => b.id == route.params.id);
</script>

<style scoped>
/* h1{
    background-color: rgb(102, 65, 16);
} */
.f{
  background-color:  rgb(223, 212, 189);
  display: flex;
  margin: 0px 100px;
  align-items: center;
  
  min-height: 100vh;
  border: 1px #0F2540 solid;
}
.img{
  margin: 50px;
}
.info {
  position: relative;
  top: -80px
}
h2{
  line-height: 0px;
}
</style>