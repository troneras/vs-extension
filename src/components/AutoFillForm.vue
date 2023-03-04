<template>
    <v-card-item>
        <v-switch v-model="autofillEnabled" label="Enable autofill"></v-switch>
        <country-select v-model="country" label="Country" />
        <v-snackbar v-model="snackbar" :timeout="5000">{{ snackbarMessage }}</v-snackbar>
    </v-card-item>
</template>
  
<script>
import CountrySelect from "@/components/CountrySelect.vue";
import { countries } from "@/data/countries";

export default {
    name: "AutoFillForm",
    components: {
        CountrySelect,
    },
    data() {
        return {
            country: null,
            countries: countries,
            snackbar: false,
            snackbarMessage: "",
            autofillEnabled: false
        };
    },
};
</script>
