<template>
<main>
      <section> 
        <h2>書籍蒐藏庫</h2>
        <div class="grid">
          <div
            v-for="book in books"
            :key="book.id"
            class="card"
            @click="goDetail(book.id)"
          >
            <div class="img">
              <img :src="getImgUrl(book.cover)" key="書籍封面">
            </div>
            <div class="info">
              <h3>{{ book.title }}</h3>
              <p>{{ book.author }}</p>
            </div>

          </div>
        </div>
      </section>

    </main>
</template>


<script setup>
import { useRouter } from "vue-router";
import { books } from "../../book/data/books";

const router = useRouter();

function goDetail(id) {
  router.push(`/book/${id}`);
}
function getImgUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}
</script>


<style scoped>
section{
  margin: 15px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2{
    background-color: rgb(249, 242, 220);

  position: relative;
  margin:0px;
  top:30px;
  right: 20px;

}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  gap: 20px;
  padding: 100px;
}

.card {
  border: 2px solid #444141;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;

  cursor: pointer;
  display: flex;
}
.card .info{
  padding: 5px 30px;
}

/* --- 修正後的圖片樣式 --- */

/* 1. 先為圖片準備一個固定寬度的容器，保持左圖右字的佈局 */
.card .img {
  flex: 0 0 150px; /* 固定寬度為 150px (可依需求調整) */
  height: 100%;    /* 撐滿卡片的高度 (由 .grid 指定的 300px) */
  display: flex;   /* 使用 flex 讓圖片在容器內置中 */
  align-items: center;
  justify-content: center;
  
  /* 可選：加上一個淡淡的背景色，這樣圖片如果不夠寬時，兩側不會看起來空空的 */
  background-color: #f8f8f8; 
  overflow: hidden; /* 確保萬一超出也不會破壞排版 */
}

/* 2. 控制圖片本身 */
.card .img img {
  /* 讓圖片在容器內縮放到最大，但不超出容器 */
  max-width: 100%;
  max-height: 100%;
  
  /* --- 關鍵修正 --- */
  /* contain 的意思是：按比例縮放圖片，直到它完整地適應在容器內。
     這樣整張圖片都會被顯示出來，絕不會被裁切。 */
  object-fit: contain; 
  
  /* 去除圖片下方預設的空白間隙 */
  display: block; 
}
</style>