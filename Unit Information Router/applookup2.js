// Data array containing unit information
const units = [
  // ... your units data
  {
    code: 'ICT10001',
    name: 'Problem Solving with ICT',
    credits: 12.5,
    type: 'Core',
  },
  { code: 'COS10005', name: 'Web Development', credits: 12.5, type: 'Core' },
  {
    code: 'ICT30001',
    name: 'Information Technology Project',
    credits: 12.5,
    type: 'Core',
  },
  {
    code: 'INF10003',
    name: 'Introduction to Business Information System',
    credits: 12.5,
    type: 'Core',
  },
  {
    code: 'INF10002',
    name: 'Database Analysis and Design',
    credits: 12.5,
    type: 'Core',
  },
  {
    code: 'COS10009',
    name: 'Introduction to Programming',
    credits: 12.5,
    type: 'Core',
  },
  {
    code: 'INF30029',
    name: 'Information Technology Project Management',
    credits: 12.5,
    type: 'Core',
  },
  {
    code: 'ICT30005',
    name: 'Professional Issues in Information Technology',
    credits: 12.5,
    type: 'Core',
  },
  // ... other units
];

// Vue component for unit details
const UnitDetails = {
  template: `
      <div v-if="selectedUnit" class="unit-details mt-3">
          <h2>Unit Code: {{ selectedUnit.code }}</h2>
          <ul class="list-group">
              <li class="list-group-item"><strong>Code:</strong> {{ selectedUnit.code }}</li>
              <li class="list-group-item"><strong>Name:</strong> {{ selectedUnit.name }}</li>
              <li class="list-group-item"><strong>Credits:</strong> {{ selectedUnit.credits }}</li>
              <li class="list-group-item"><strong>Type:</strong> {{ selectedUnit.type }}</li>
          </ul>
      </div>
  `,
  props: ['selectedUnit'],
};

// Main Vue instance
new Vue({
  el: '#app',
  data: {
    units: units,
    selectedUnit: null,
  },
  components: {
    'unit-details': UnitDetails,
  },
  methods: {
    showDetails(unitCode) {
      this.selectedUnit = this.units.find((unit) => unit.code === unitCode);
    },
  },
  template: `
  <div class="container mt-5">
      <h1 class="mb-4">Unit Information System</h1>
      <table class="table table-hover">
          <thead class="thead-dark">
              <tr>
                  <th>Code</th>
                  <th>Description</th>
                  <th>More Info</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="unit in units" :key="unit.code">
                  <td>{{ unit.code }}</td>
                  <td>{{ unit.name }}</td>
                  <td><button class="btn btn-info" @click="showDetails(unit.code)">Show Details</button></td>
              </tr>
          </tbody>
      </table>
      <unit-details :selected-unit="selectedUnit"></unit-details>
  </div>
  `,
});
