<template>
  <div class="container">
    <h1>Student Marks</h1>
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <caption>
          List of Students and their Marks
        </caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Mark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in paginatedItems" :key="student.name">
            <td>{{ student.name }}</td>
            <td>{{ student.mark }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <paginate
      :page-count="pageCount"
      :page-range="3"
      :margin-pages="1"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :highlight-class="'active'"
    ></paginate>
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate-next';

export default {
  components: {
    Paginate,
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      students: [
        { name: 'Arnob', mark: 90 },
        { name: 'Bill', mark: 80 },
        { name: 'Casey', mark: 78 },
        { name: 'David', mark: 84 },
        { name: 'Ella', mark: 91 },
        { name: 'Frank', mark: 75 },
        { name: 'George', mark: 88 },
        { name: 'Hannah', mark: 85 },
        { name: 'Irene', mark: 92 },
        { name: 'Jack', mark: 78 },
        { name: 'Karen', mark: 86 },
        { name: 'Leo', mark: 84 },
        { name: 'Mia', mark: 90 },
        { name: 'Nick', mark: 89 },
        { name: 'Olivia', mark: 93 },
        { name: 'Paul', mark: 81 },
        { name: 'Quinn', mark: 80 },
        { name: 'Rachel', mark: 77 },
        { name: 'Sam', mark: 83 },
        { name: 'Tina', mark: 82 },
        { name: 'Uma', mark: 85 },
        { name: 'Vince', mark: 78 },
        { name: 'Wendy', mark: 87 },
        { name: 'Xavier', mark: 84 },
        { name: 'Yara', mark: 79 },
        { name: 'Zack', mark: 88 },
      ],
    };
  },
  computed: {
    paginatedItems() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.students.slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.students.length / this.perPage);
    },
  },
  methods: {
    clickCallback(pageNum) {
      this.currentPage = pageNum;
    },
  },
};
</script>

<style scoped>
/* Additional Bootstrap or custom styles can be added here */
.table-responsive {
  max-width: 800px;
  margin: auto;
}
</style>
