<template>
  <div>

    <h1>建立閱讀路徑圖</h1>

    <div>
      <label>主題名稱</label>

      <input
        v-model="title"
        placeholder=""
      >
    </div>

    <div>
      <label>路徑圖簡介</label>

      <textarea
        v-model="description"
      />
    </div>

    <button @click="createMap">
      建立
    </button>

  </div>
</template>

<script setup>
import { ref } from "vue"
import { mapStore } from "../store/mapStore"
import { useRouter } from "vue-router"

const router = useRouter()


const title = ref("")
const description = ref("")

function createMap() {
  console.log("jiojaofjoaidjfoa")

  const newMap = {

    id: Date.now(),

    title: title.value,

    description: description.value,

    nodes: [],

    edges: []

  }

  mapStore.maps.push(newMap)

  router.push("/map/list")

}
</script>