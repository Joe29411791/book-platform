<template>
  <div>
    <h1>閱讀路徑圖</h1>
    <button @click="goCreate">
      建立路徑圖
    </button>

    <div
      v-for="map in mapStore.maps"
      :key="map.id"
      class="map-card"
      @click="goMap(map.id)"
    >
      <h3>{{ map.title }}</h3>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { mapStore } from "../store/mapStore.js"

const router = useRouter()

function goMap(id) {
  router.push(`/map/${id}`)
}
function goCreate() {
  // 請依據你實際的 route name 或 path 修改，例如 '/create'
  router.push('list/create') 
}
const maps = mapStore.maps
</script>

<style scoped>
h1{
  position: relative;
}
.map-card {
  border: 2px solid #0F2540; 
  padding: 12px;
  margin: 10px 70px;
  cursor: pointer;
  
  /* 字體顏色也可以跟著改為深藍色，增加整體感 */
  color: #0F2540;
  
  /* 移除原本的圓角，讓它跟 Header 一樣保持俐落的直角，或者保留很小的 4px */
  border-radius: 0; 
  
  background-color: #ffffff; /* 預設白底 */
  transition: all 0.2s ease-in-out;
}

.map-card:hover {
  /* Hover 時變成與 Header 相同的沙色背景 */
  background-color: rgb(223, 212, 189); 
  
  /* 如果想要有點互動感，可以讓卡片在 hover 時稍微往上浮或加個陰影 */
  transform: translateY(-2px);
  box-shadow: 4px 4px 0px #0F2540; /* 加上這種硬陰影會非常有復古 UI 的味道 */
}
</style>