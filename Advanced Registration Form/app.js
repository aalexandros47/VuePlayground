new Vue({
  el: '#app',
  data: {
    formData: {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      confirmPassword: '',
      email: '',
      streetAddress: '',
      suburb: '',
      postcode: '',
      mobileNumber: '',
    },
    termsShown: false,
    errors: {},
  },
  methods: {
    validateForm() {
      this.errors = {}; // Reset errors before validation

      // First Name
      if (
        !this.formData.firstName ||
        !/^[a-zA-Z]+$/.test(this.formData.firstName)
      ) {
        this.errors.firstName =
          'First name is required and must be letters only.';
      }

      // Last Name
      if (
        !this.formData.lastName ||
        !/^[a-zA-Z]+$/.test(this.formData.lastName)
      ) {
        this.errors.lastName =
          'Last name is required and must be letters only.';
      }

      // User Name
      if (!this.formData.userName || this.formData.userName.length < 3) {
        this.errors.userName =
          'User name is required and must be at least 3 characters long.';
      }

      // Password
      if (
        !this.formData.password ||
        !/[0-9]$[%^&*]{1,}/.test(this.formData.password) ||
        this.formData.password.length < 8
      ) {
        this.errors.password =
          'Password must be at least 8 characters long and include at least one special character ($, %, ^, &, *).';
      }

      // Confirm Password
      if (this.formData.confirmPassword !== this.formData.password) {
        this.errors.confirmPassword =
          'Confirm password must match the password.';
      }

      // Email
      if (
        !this.formData.email ||
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.formData.email)
      ) {
        this.errors.email = 'Email must be in valid email format.';
      }

      // Postcode
      if (!this.formData.postcode || !/^\d{4}$/.test(this.formData.postcode)) {
        this.errors.postcode = 'Postcode must be exactly 4 numeric digits.';
      }

      // Mobile Number
      if (
        !this.formData.mobileNumber ||
        !/^04\d{8}$/.test(this.formData.mobileNumber)
      ) {
        this.errors.mobileNumber =
          'Mobile number must be 10 digits and start with 04.';
      }

      return Object.keys(this.errors).length === 0;
    },
    submitForm() {
      if (this.validateForm()) {
        // Handle form submission logic here
        alert('Form is being submitted');
      } else {
        alert('Errors in form submission. Please check your input.');
      }
    },
    toggleTerms() {
      this.termsShown = !this.termsShown;
    },
  },
});
