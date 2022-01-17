<template>
  <div>
    
    <h1>Страница с постами</h1>

    <my-input 
    v-focus 
    v-model="searchQuery" 
    placeholder="Поиск..." />

    <div class="app__btns">
      <my-button>Создать пост</my-button>

      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>

    <post-list 
    :posts="sortedAndSearchedPosts" 
    v-if="!isPostsLoading" />

    <div v-else>Идёт загрузка...</div>

    <!-- <div class="observer" v-intersection="loadMorePosts"></div> -->

  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import { ref } from "vue";

import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    PostList,
    PostForm,
    MyButton,
    MySelect,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
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
