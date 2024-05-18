// Define the Home component
const Home = {
  template: `
        <div>
            <h1>Welcome to the SPA</h1>
            <p>Please navigate to the login page or the dashboard.</p>
            <router-link to="/login">Go to Login</router-link>
            <router-link to="/dashboard">Go to Dashboard</router-link>
        </div>
    `,
};

// Define the Dashboard component
const Dashboard = {
  data() {
    return {
      units: [],
      newUnit: { code: '', desc: '', cp: '', type: '' },
      selectedUnit: null,
      currentPage: 1,
      pageSize: 5,
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    pageCount() {
      return Math.ceil(this.units.length / this.pageSize);
    },
    paginatedUnits() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.units.slice(start, start + this.pageSize);
    },
  },
  methods: {
    fetchData() {
      console.log('Fetching data...');
      fetch('units.json')
        .then((response) => response.json())
        .then((data) => {
          console.log('Data fetched:', data);
          this.units = data;
        })
        .catch((error) => console.error('Error fetching data:', error));
    },
    addUnit() {
      console.log('Adding unit:', this.newUnit);
      this.units.push(this.newUnit);
      this.newUnit = { code: '', desc: '', cp: '', type: '' };
    },
    updateUnit(unit) {
      console.log('Updating unit:', unit);
      const index = this.units.findIndex((u) => u.code === unit.code);
      if (index !== -1) {
        this.$set(this.units, index, unit);
      }
    },
    deleteUnit(unit) {
      console.log('Deleting unit:', unit);
      const index = this.units.findIndex((u) => u.code === unit.code);
      if (index !== -1) {
        this.units.splice(index, 1);
      }
    },
    selectUnit(unit) {
      console.log('Selecting unit:', unit);
      this.selectedUnit = { ...unit };
    },
  },
  template: `
        <div>
            <h2>Dashboard</h2>
            <div v-if="selectedUnit">
                <h3>Edit Unit</h3>
                <input v-model="selectedUnit.desc" placeholder="Description">
                <button @click="updateUnit(selectedUnit)">Update</button>
                <button @click="deleteUnit(selectedUnit)">Delete</button>
            </div>
            <div>
                <h3>Add New Unit</h3>
                <input v-model="newUnit.desc" placeholder="Description">
                <button @click="addUnit">Add</button>
            </div>
            <table class="table">
                <tr v-for="unit in paginatedUnits" :key="unit.code">
                    <td>{{ unit.desc }}</td>
                    <td>{{ unit.code }}</td>
                    <td><button @click="selectUnit(unit)">Edit</button></td>
                </tr>
            </table>
            <button v-if="currentPage > 1" @click="currentPage--">Prev</button>
            <button v-if="currentPage < pageCount" @click="currentPage++">Next</button>
        </div>
    `,
};

// Define the Login component
const Login = {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    login() {
      if (this.username === 'arnob' && this.password === '1234') {
        localStorage.setItem('loggedIn', true);
        this.$router.push('/dashboard');
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    },
  },
  template: `
        <div>
            <h2>Login</h2>
            <form @submit.prevent="login">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" v-model="username" class="form-control" id="username" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" v-model="password" class="form-control" id="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <p class="text-danger" v-if="errorMessage">{{ errorMessage }}</p>
            </form>
        </div>
    `,
};

// Define the routes
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('loggedIn')) {
        next();
      } else {
        next('/login');
      }
    },
  },
];

// Create the Vue Router instance
const router = new VueRouter({
  routes,
});

// Create and mount the Vue instance
const app = new Vue({
  router,
}).$mount('#app');
