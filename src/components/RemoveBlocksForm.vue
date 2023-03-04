<template>
  <v-card-item>
    <v-form @submit.prevent="removeBlocks">
      <v-text-field v-model="username" label="Username/Email" outlined required></v-text-field>
      <v-card-actions>
        <v-btn type="submit" variant="flat">Remove Blocks</v-btn>
      </v-card-actions>
      <v-snackbar v-model="snackbar" :timeout="5000">{{ snackbarMessage }}</v-snackbar>
    </v-form>
  </v-card-item>
</template>
  
<script>
export default {
  name: 'RemoveBlocksForm',
  data() {
    return {
      username: '',
      snackbar: false,
      snackbarMessage: '',
    };
  },
  methods: {
    removeBlocks() {
      // Perform the remove blocks action with the given username
      // Then show the success message in the snackbar
      this.snackbarMessage = 'Blocks removed successfully';
      this.snackbar = true;
      this.username = '';
    },
  },
};
</script>
  