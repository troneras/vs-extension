<template>
  <v-card-item>
    <v-form @submit.prevent="changePassword">
      <v-text-field v-model="username" label="Username/Email" outlined required></v-text-field>
      <v-text-field v-model="password" label="New Password" outlined required></v-text-field>
      <v-card-actions>
        <v-btn type="submit" variant="flat">Change Password</v-btn>
      </v-card-actions>
      <v-snackbar v-model="snackbar" :timeout="5000">{{ snackbarMessage }}</v-snackbar>
    </v-form>
  </v-card-item>
</template>
  
<script>
export default {
  name: 'ChangePasswordForm',
  data() {
    return {
      username: '',
      password: '',
      snackbar: false,
      snackbarMessage: '',
    };
  },
  methods: {
    changePassword() {
      // Perform the change password action with the given username and password
      // Then show the success message in the snackbar
      this.snackbarMessage = 'Password changed successfully';
      this.snackbar = true;
      this.username = '';
      this.password = '';
    },
  },
};
</script>
  