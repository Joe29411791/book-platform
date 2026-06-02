<template>
  <div style="width: 100%; height: 100vh; border: 2px solid rgb(223, 212, 189);">
    <VueFlow
      :nodes="nodes"
      :edges="edges"

      :node-types="nodeTypes"

      @node-click="onNodeClick"
    />
  </div>
  
</template>

<script setup>
import { VueFlow } from '@vue-flow/core'
import { useRouter } from 'vue-router'
import BookNode from './BookNode.vue'

const router = useRouter()

const props = defineProps({
  nodes: Array,
  edges: Array
})

function onNodeClick(event) {
  router.push(
    `/book/${event.node.data.bookId}`
  )
}
const nodeTypes = {
  book: BookNode
}
</script>

<style>
.vue-flow {
  width: 100%;
  height: 600px;
  border: 1px solid #eebbbb;
}
</style>