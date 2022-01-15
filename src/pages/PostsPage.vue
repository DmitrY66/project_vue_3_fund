<template>
  <div>
    <h1>Страница с постами</h1>

    <my-input v-model="searchQuery" placeholder="Поиск..." />

    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>

      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <!-- <post-list :posts="posts" @remove="removePost" v-if="!isPostsLoading" /> -->
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />

    <div v-else class="">Идёт загрузка...</div>
    <div class="observer" ref="observer"></div>

    <!-- <div class="page__wrapper">
      <div class="page" 
      v-for="pageNumber in totalPages" 
      :key="pageNumber"
      :class="{
        'current-page': page === pageNumber,
      }"
      @click="changePage(pageNumber)">{{ pageNumber }}</div>
    </div> -->
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";
import MySelect from "@/components/UI/MySelect";

export default {
  components: {
    PostList,
    PostForm,
    MyButton,
    MySelect,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
      // this.fetchPosts();
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          // "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2"
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("ошибка");
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          // "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2"
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert("ошибка");
      }
    },
  },
  mounted() {
    this.fetchPosts();
    // this.$refs.observer;
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  // watch: {
  //   page() {
  //     this.fetchPosts();
  //   }
  // },

  // первый вариант не раскоменчивай это
  // watch: {
  //   selectedSort(newValue) {
  //     // console.log("newValue: ", newValue);
  //     this.posts.sort((post1, post2) => {
  //       return post1[newValue]?.localeCompare(post2[newValue]);
  //     });
  //   },
  // },
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid blueviolet;
  padding: 10px;
  margin-right: 1px;
  cursor: pointer;
}
.current-page {
  border: 3px solid blueviolet;
}
.observer {
  height: 30px;
  background: cornflowerblue;
}
</style>
