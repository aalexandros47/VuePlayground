var app = new Vue({
  el: '#app',
  data: {
    posts: [],
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      $.getJSON('https://jsonplaceholder.typicode.com/posts', function (data) {
        app.posts = data.map((post) => ({
          id: post.id,
          title: post.title,
        }));
      });
    },
  },
});
