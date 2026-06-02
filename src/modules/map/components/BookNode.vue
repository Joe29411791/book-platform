<template>
  <div class="book-node">
    <h4>{{ data.title }}</h4>

    <p class="author">
      {{ data.author }}
    </p>

    <p class="desc">
      {{ data.description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})
</script>

<style scoped>
.book-node {
  width: 220px;

  padding: 12px;

  border: 2px solid #130d0360;

  border-radius: 10px;

  background: rgba(223, 212, 189, 0.293);

  cursor: pointer;
}

.author {
  color: rgb(33, 33, 33);
  font-size: 12px;
}

.desc {
  font-size: 12px;
}
</style>