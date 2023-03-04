<template>
  <v-card-item>
    <v-form @submit.prevent="changeCountry">
      <country-select v-model="country" />
      <v-card-actions>
        <v-btn type="submit" variant="flat">Change Country</v-btn>
      </v-card-actions>
      <v-snackbar v-model="snackbar" :timeout="5000">{{ snackbarMessage }}</v-snackbar>
    </v-form>
  </v-card-item>
</template>

<script>
import CountrySelect from '@/components/CountrySelect.vue'

export default {
  name: "ChangeCountryForm",
  components: {
    CountrySelect,
  },
  data() {
    return {
      country: null,
      snackbar: false,
      snackbarMessage: ""
    };
  },
  methods: {
    changeCountry() {
      // Perform the change country action with the given country code
      // Then show the success message in the snackbar
      this.snackbarMessage = `Country changed to ${this.country.name} (${this.country.code})`;
      this.snackbar = true;
      this.country = null;
    },
  },
};
</script>