<template>
  <div class="navbar">
    <h4 class="mtitle" @click="$router.push('/')">project Vue-3 test</h4>
    <div class="navbar__btns">
      <my-button @click="$router.push('/')">Главная</my-button>
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">О сайте</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 88px;
  background: burlywood;
  box-shadow: 2px 2px 2px gray;
  display: flex;
  align-items: center;
}
.mtitle {
  width: 32%;
  margin-left: 2%;
}
.navbar__btns {
  width: 66%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  margin: 12px 12px 0 0;
}
</style>
