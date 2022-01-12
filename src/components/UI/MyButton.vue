<template>
  <div>
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'my-button'
};
</script>

<style scoped>
.btn {
  padding: 10px 12px;
  background: none;
  color: #4a148c;
  border: 1px solid #4a148c;
  cursor: pointer;
  transition: .5s;
}
.btn:hover{
  color: burlywood;
  background: #4a148c;
}
</style>
