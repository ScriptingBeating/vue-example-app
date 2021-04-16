const state = {
  posts: [],
  postsLoaded: false
};
const mutations = {
    SET_POSTS: (state, posts) => {
      state.postsLoaded = true;
      return state.posts = posts;
    },
    ADD_POST: (state, post) => state.posts.unshift(post),
    DELETE_POST: (state, index) => state.posts.splice(index, 1)
};
const getters = {
    allPosts: state => state.posts,
    postsLoaded: state => state.postsLoaded
};
const actions = {
  async fetchPosts({ commit }) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();
    commit('SET_POSTS', data);
  },
  addPost({ commit, getters }, post) {
      commit('ADD_POST', {
        ...post, id: getters.allPosts.length + 1
      });
  },
  deletePost({ commit, getters }, postId) {
    const posts = getters.allPosts;
    const postIndex = posts.findIndex(p => p.id === postId);
    if (!postIndex <= -1) {
      throw Error('Post not found');
    }
    commit('DELETE_POST', postIndex);
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
};
