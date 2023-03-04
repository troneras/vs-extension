<template>
    <v-card-item>
        <v-form @submit.prevent="createTestUser">
            <v-text-field v-model="username" :rules="usernameRules" label="Username" required />
            <country-select v-model="country" label="Country" />
            <v-card-actions>
                <v-btn type="submit" variant="flat">Create Test User</v-btn>
            </v-card-actions>
            <v-snackbar v-model="snackbar" :timeout="5000">{{ snackbarMessage }}</v-snackbar>
        </v-form>
    </v-card-item>
</template>
  
<script>
import CountrySelect from "@/components/CountrySelect.vue";
import { countries } from "@/data/countries";

export default {
    name: "CreateTestUserForm",
    components: {
        CountrySelect,
    },
    data() {
        return {
            username: "",
            country: null,
            countries: countries,
            snackbar: false,
            snackbarMessage: "",
        };
    },
    computed: {
        usernameRules() {
            return [v => !!v || "Username is required"];
        },
    },
    methods: {
        createTestUser() {
            // Send the username and country data to the server to create the test user
            // Then show the success message in the snackbar
            this.snackbarMessage = `Test user created: ${this.username} (${this.country.name})`;
            this.snackbar = true;
            // this.username = "";
        },
    },
};
</script>
