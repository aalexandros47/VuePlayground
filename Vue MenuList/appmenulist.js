const app = Vue.createApp({});

// Define the 'mymenu' component
app.component('mymenu', {
  props: ['menu'], // Define the props the component accepts
  template: `
        <ul>
            <li v-for="item in menu" :key="item">{{ item }}</li>
        </ul>
    `, // Template for displaying each menu item
});

app.mount('#app'); // Mount the Vue application to the DOM
