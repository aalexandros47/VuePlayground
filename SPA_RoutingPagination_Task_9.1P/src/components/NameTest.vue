<template>
  <div class="container mt-5">
    <h1 class="mb-3">String Test Web App</h1>
    <div class="mb-3">
      <label for="userNameInput" class="form-label">Enter your name:</label>
      <input
        id="userNameInput"
        type="text"
        class="form-control"
        v-model="userName"
      />
      <button class="btn btn-primary mt-2" @click="checkName">Submit</button>
    </div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      myName: 'Arnob', // Assuming 'Arnob' is the name to check against
      message: '',
    };
  },
  methods: {
    checkName() {
      if (this.userName.toLowerCase() === this.myName.toLowerCase()) {
        this.message = 'Awesome name!';
      } else {
        this.message = this.userName + ' is not my name';
      }
    },
  },
};
</script>

<style scoped>
/* Additional Bootstrap or custom styles can be added here */
</style>
