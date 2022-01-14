<template>
  <div class="post">
    <div class="">
      <div>{{ post.id }}</div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button 
      @click="$emit('remove', post)"
      >
      Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  margin-top: 12px;
  padding: 15px;
  border: 2px solid #4a148c;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
