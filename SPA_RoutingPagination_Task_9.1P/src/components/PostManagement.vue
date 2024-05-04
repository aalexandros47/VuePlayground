<template>
  <div class="container">
    <h1>Status</h1>
    <input
      v-model="newStatus"
      placeholder="Write a status..."
      class="form-control my-2"
    />
    <button @click="postStatus" class="btn btn-primary">Post</button>
    <ul class="list-group my-3">
      <li
        v-for="(status, index) in statuses"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ status }}
        <button @click="deleteStatus(index)" class="btn btn-danger">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newStatus: '',
      statuses: [],
    };
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
};
</script>

<style scoped>
/* Additional Bootstrap or custom styles can be added here */
</style>
