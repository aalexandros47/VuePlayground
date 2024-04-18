new Vue({
  el: '#app',
  data: {
    newStatus: '',
    statuses: [],
  },
  methods: {
    postStatus() {
      if (this.newStatus.trim()) {
        this.statuses.push(this.newStatus);
        this.newStatus = ''; // Clear the input after posting
      }
    },
    deleteStatus(index) {
      this.statuses.splice(index, 1); // Remove the status at the given index
    },
  },
});
