<template>
  <ReadingMap
    :nodes="flowNodes"
    :edges="flowEdges"
  />
  
</template>


<script setup>
import { mapStore } from "../store/mapStore"
import { books } from "../../book/data/books"
import ReadingMap from "../components/ReadingMap.vue"
import { useRoute } from "vue-router"
import dagre from 'dagre' // 新增：引入 dagre

const route = useRoute()

const map = mapStore.maps.find(
  m => m.id == route.params.id
)

// 保留你原本的輔助函式
function getBook(bookId) {
  return books.find(book => book.id === bookId);
}

function getNode(nodeId) {
  return map.nodes.find(node => node.id === nodeId);
}

const nodeBooks = map.nodes.map(id =>
  books.find(b => b.id === id)
);

// ==========================================
// 圖譜資料處理與 Dagre 自動排版區塊
// ==========================================

// 1. 先整理出 Edges (連線)，因為 Dagre 計算排版時需要知道誰連誰
const flowEdges = map.edges.map(edge => ({
  id: `${edge.from}-${edge.to}`,
  source: edge.from,
  target: edge.to,
  label: edge.note
}))

// 2. 整理出原始 Nodes (此時還沒有 x, y 座標)
const rawNodes = map.nodes.map((node) => {
  const book = getBook(node.bookId)
  return {
    id: node.id,
    type: 'book',
    data: {
      title: book.title,
      author: book.author,
      bookId: book.id,
      note: node.note
    }
  }
})

// 3. 建立 Dagre 實例並設定排版規則
const g = new dagre.graphlib.Graph()
// rankdir: 'TB' 代表由上到下 (Top to Bottom)，如果想改由左到右可以改成 'LR'
// nodesep: 同一層級節點的左右間距 / ranksep: 上下層級的垂直間距
g.setGraph({ rankdir: 'TB', nodesep: 100, ranksep: 150 }) 
g.setDefaultEdgeLabel(() => ({}))

// 將節點加入 Dagre 計算 (需告知節點預計的寬高，這裡暫定寬 250, 高 150)
rawNodes.forEach((node) => {
  g.setNode(node.id, { width: 250, height: 150 }) 
})

// 將連線加入 Dagre 計算
flowEdges.forEach((edge) => {
  g.setEdge(edge.source, edge.target)
})

// 執行座標計算
dagre.layout(g)

// 4. 產出最終的 flowNodes (把 Dagre 算好的座標寫入)
const flowNodes = rawNodes.map((node) => {
  const nodeWithPosition = g.node(node.id)
  return {
    ...node,
    position: {
      // 扣除一半的寬高，是為了讓節點的「中心點」對齊連線
      x: nodeWithPosition.x - 125, 
      y: nodeWithPosition.y - 75   
    }
  }
})
</script>

<style scoped>

</style>