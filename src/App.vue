<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <input
        class="input"
        v-bind:value="title"
        @input="title = $event.target.value"
        type="text"
        placeholder="Название"
      />
      <input
        class="input"
        v-bind:value="body"
        @input="body = $event.target.value"
        type="text"
        placeholder="Описание"
      />
      <button class="btn" @click="createPost">Создать</button>
    </form>
    <div class="post" v-for="post in posts" :key="post">
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Название: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "JavaScript",
          body: "Описание поста",
        },
        {
          id: 2,
          title: "JavaScript 2",
          body: "Описание поста 2",
        },
        {
          id: 3,
          title: "JavaScript 3",
          body: "Описание поста 3",
        },
        {
          id: 4,
          title: "JavaScript 4",
          body: "Описание поста 4",
        },
      ],
      title: "",
      body: "",
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
  },
};
</script>

<style>
.app {
  padding: 20px;
}
.post {
  margin-top: 12px;
  padding: 15px;
  border: 2px solid #ccc;
}
form {
  display: flex;
  flex-direction: column;
}
.input {
  width: calc(100%-30px);
  border: 1px solid #4a148c;
  padding: 18px 15px;
  margin-top: 12px;
}
.btn {
  margin-top: 12px;
  align-self: flex-end;
  padding: 10px 12px;
  background: none;
  color: #4a148c;
  border: 2px solid #4a148c;
}
</style>

