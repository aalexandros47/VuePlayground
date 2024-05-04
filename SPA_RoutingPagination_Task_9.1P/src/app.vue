<template>
  <div class="container mt-3">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Single Page Application</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/name-test"
                >Name Test</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/post-management"
                >Post Management</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/student-marks"
                >Student Marks</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Content area where router-view will display the active component -->
    <div class="content mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.content {
  min-height: 80vh;
}
</style>
