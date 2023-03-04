<template>
  <v-card-item>
    <v-form>
      <v-switch v-model="showErrors" label="Show errors on the website" class="mb-6"></v-switch>
      <v-card-actions>
        <v-btn variant="flat" @click="openConfigTracer">Open Config Tracer</v-btn>
        <v-btn variant="flat" color="error" @click="flushRedis" class="ml-4">Flush Redis</v-btn>
      </v-card-actions>
      <v-snackbar v-model="snackbar" :timeout="5000">{{ snackbarMessage }}</v-snackbar>
    </v-form>
  </v-card-item>
</template>

  
<script>
export default {
  name: "DebuggingTools",
  data() {
    return {
      showErrors: false,
      snackbar: false,
      snackbarMessage: '',
    };
  },
  methods: {
    openConfigTracer() {
      // TODO: Implement the code to open the Config Tracer tool.
      this.snackbarMessage = `Opened config tracer successfully`;
      this.snackbar = true;
    },
    flushRedis() {
      // TODO: Implement the code to flush Redis.
      // Display a success message to the user
      this.snackbarMessage = `Redis flushed successfully`;
      this.snackbar = true;
    },
  },

};
</script>
  
<style scoped></style>
  